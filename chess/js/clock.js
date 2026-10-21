// Standalone chess clock. Each device runs its own instance; nothing is shared or sent anywhere.
// Side 0 is the top half (rotated towards the far player), side 1 the bottom half.
(() => {
  const STATE_KEY = 'chessclock.state.v1';
  const PREFS_KEY = 'chessclock.prefs.v1';
  const LOW_TIME_MS = 20_000;
  const PRESETS = [
    { group: 'Bullet', items: [[1, 0], [1, 1], [2, 1]] },
    { group: 'Blitz', items: [[3, 0], [3, 2], [5, 0], [5, 3]] },
    { group: 'Rapid', items: [[10, 0], [10, 5], [15, 10], [25, 10]] },
    { group: 'Classica', items: [[30, 0], [30, 20], [60, 0], [90, 30]] },
  ];

  const $ = (id) => document.getElementById(id);
  const sides = [$('side-0'), $('side-1')];
  const faces = sides.map((s) => ({
    time: s.querySelector('.time'),
    tag: s.querySelector('.tag'),
    hint: s.querySelector('.hint'),
    moves: s.querySelector('.moves'),
  }));
  const menu = $('menu');

  const store = {
    get(key, fallback) {
      try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {}
    },
    del(key) {
      try {
        localStorage.removeItem(key);
      } catch {}
    },
  };

  const prefs = Object.assign({ sound: true, vibrate: true, fullscreen: true, label: '', last: '5+3' }, store.get(PREFS_KEY, {}));
  const savePrefs = () => store.set(PREFS_KEY, prefs);

  // C: { base, inc, left, moves: [ms|n, ms|n], active, white, running, flagged, tc }
  //   active = side whose time is running (-1 before the first press); white = side that moved first.
  let C = null;
  let last = 0;
  let raf = 0;
  let saveTimer = 0;

  /* ---------- Setup screen ---------- */

  const tcLabel = (min, inc) => `${min}+${inc}`;

  function renderPresets() {
    $('presets').innerHTML = PRESETS.map(
      (g) => `
      <div class="preset-group">
        <h2>${g.group}</h2>
        <div class="preset-grid">
          ${g.items
            .map(([m, i]) => {
              const tc = tcLabel(m, i);
              return `<button class="preset ${tc === prefs.last ? 'is-last' : ''}" data-min="${m}" data-inc="${i}">
                <b>${tc}</b><small>${m} min${i ? ` · +${i}s` : ''}</small></button>`;
            })
            .join('')}
        </div>
      </div>`,
    ).join('');
  }

  $('presets').addEventListener('click', (ev) => {
    const b = ev.target.closest('.preset');
    if (!b) return;
    const m = Number(b.dataset.min);
    const i = Number(b.dataset.inc);
    start({ top: [m, i], bottom: [m, i] });
  });

  const customForm = $('custom-form');
  customForm.handicap.addEventListener('change', () => ($('handicap-row').hidden = !customForm.handicap.checked));
  customForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const clamp = (v, lo, hi, d) => {
      const n = Math.round(Number(v));
      return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : d;
    };
    const bottom = [clamp(customForm.min.value, 1, 300, 10), clamp(customForm.inc.value, 0, 120, 0)];
    const top = customForm.handicap.checked
      ? [clamp(customForm.min2.value, 1, 300, 5), clamp(customForm.inc2.value, 0, 120, 0)]
      : bottom;
    start({ top, bottom });
  });

  const labelInput = $('label-input');
  labelInput.value = prefs.label;
  labelInput.addEventListener('input', () => {
    prefs.label = labelInput.value.trim();
    savePrefs();
  });

  for (const key of ['sound', 'vibrate', 'fullscreen']) {
    const el = $(`opt-${key}`);
    el.checked = prefs[key];
    el.addEventListener('change', () => {
      prefs[key] = el.checked;
      savePrefs();
    });
  }

  /* ---------- Game lifecycle ---------- */

  function start({ top, bottom }) {
    const tc = top[0] === bottom[0] && top[1] === bottom[1] ? tcLabel(...bottom) : `${tcLabel(...bottom)} / ${tcLabel(...top)}`;
    prefs.last = tc;
    savePrefs();
    C = {
      base: [top[0] * 60_000, bottom[0] * 60_000],
      inc: [top[1] * 1000, bottom[1] * 1000],
      left: [top[0] * 60_000, bottom[0] * 60_000],
      moves: [0, 0],
      active: -1,
      white: -1,
      running: false,
      flagged: -1,
      tc,
    };
    unlockAudio();
    if (prefs.fullscreen) enterFullscreen();
    showBoard();
    save();
  }

  function restart() {
    C.left = [...C.base];
    C.moves = [0, 0];
    C.active = -1;
    C.white = -1;
    C.running = false;
    C.flagged = -1;
    closeMenu();
    save();
    render();
  }

  function showSetup() {
    C = null;
    store.del(STATE_KEY);
    cancelAnimationFrame(raf);
    releaseWakeLock();
    closeMenu();
    $('board').hidden = true;
    $('setup').hidden = false;
    document.body.classList.remove('on-board');
    renderPresets();
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  }

  function showBoard() {
    $('setup').hidden = true;
    $('board').hidden = false;
    document.body.classList.add('on-board');
    $('bar-label').textContent = [prefs.label, C.tc].filter(Boolean).join(' · ');
    requestWakeLock();
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(frame);
    render();
  }

  function advance(now) {
    if (!C?.running) return;
    const side = C.active;
    C.left[side] -= now - last;
    last = now;
    if (C.left[side] <= 0) {
      C.left[side] = 0;
      C.running = false;
      C.flagged = side;
      save();
      onFlag();
    }
  }

  function press(side) {
    if (!C || C.flagged >= 0 || !menu.hidden) return;
    const now = performance.now();
    if (C.active === -1) {
      // Whoever presses first is Black: pressing starts the opponent's (White's) clock.
      C.active = 1 - side;
      C.white = C.active;
      C.running = true;
      last = now;
      feedback();
      save();
      render();
      return;
    }
    if (!C.running || side !== C.active) return;
    advance(now);
    if (C.flagged >= 0) return;
    C.left[side] += C.inc[side];
    C.moves[side] += 1;
    C.active = 1 - side;
    feedback();
    save();
    render();
  }

  function pause() {
    if (!C) return;
    advance(performance.now());
    C.running = false;
    save();
    openMenu();
  }

  function resume() {
    if (!C || C.flagged >= 0 || C.active === -1) return closeMenu();
    closeMenu();
    C.running = true;
    last = performance.now();
    requestWakeLock();
    render();
  }

  function onFlag() {
    vibrate([200, 100, 200, 100, 400]);
    if (prefs.sound) [0, 0.25, 0.5].forEach((t) => beep(660, 0.18, 0.25, t));
    render();
    setTimeout(openMenu, 900);
  }

  /* ---------- Rendering ---------- */

  function fmt(ms) {
    if (ms < LOW_TIME_MS) return (Math.floor(ms / 100) / 10).toFixed(1);
    const total = Math.ceil(ms / 1000);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = String(total % 60).padStart(2, '0');
    return h ? `${h}:${String(m).padStart(2, '0')}:${s}` : `${m}:${s}`;
  }

  const lastText = ['', ''];
  function render() {
    if (!C) return;
    const started = C.active !== -1;
    for (const i of [0, 1]) {
      const text = fmt(C.left[i]);
      if (text !== lastText[i]) {
        faces[i].time.textContent = text;
        lastText[i] = text;
      }
      const el = sides[i];
      el.classList.toggle('is-active', started && C.active === i && C.flagged < 0);
      el.classList.toggle('is-paused', started && !C.running && C.flagged < 0);
      el.classList.toggle('is-low', C.left[i] < LOW_TIME_MS && C.left[i] < C.base[i] / 4);
      el.classList.toggle('is-flagged', C.flagged === i);
      el.classList.toggle('is-winner', C.flagged === 1 - i);
      faces[i].tag.textContent = started ? (C.white === i ? '♔ Bianco' : '♚ Nero') : '';
      faces[i].moves.textContent = started ? `${C.moves[i]} ${C.moves[i] === 1 ? 'mossa' : 'mosse'}` : '';
      faces[i].hint.textContent = !started
        ? 'Il Nero tocca qui per far partire il Bianco'
        : C.flagged === i
          ? 'Tempo scaduto'
          : C.flagged === 1 - i
            ? 'Vittoria'
            : '';
    }
    document.body.classList.toggle('is-running', C.running);
  }

  function frame(now) {
    advance(now);
    render();
    raf = requestAnimationFrame(frame);
  }

  /* ---------- Menu ---------- */

  function openMenu() {
    if (!C) return;
    const started = C.active !== -1;
    const flagged = C.flagged >= 0;
    $('menu-title').textContent = flagged ? 'Tempo scaduto' : started ? 'Pausa' : 'Pronto';
    $('menu-sub').textContent = flagged
      ? `Vince il ${C.flagged === C.white ? 'Nero' : 'Bianco'} · ${C.moves[0] + C.moves[1]} mosse`
      : started
        ? `${C.tc} · ${C.moves[0] + C.moves[1]} mosse`
        : `${C.tc} · il Nero tocca il suo lato per iniziare`;
    $('m-resume').hidden = flagged;
    $('m-resume').textContent = started ? 'Riprendi' : 'Chiudi';
    disarm();
    menu.hidden = false;
  }

  function closeMenu() {
    menu.hidden = true;
    disarm();
  }

  // Destructive menu actions need a second tap while a game is in progress.
  let armed = null;
  const MENU_LABELS = { 'm-restart': 'Ricomincia con lo stesso tempo', 'm-change': 'Cambia tempo', 'm-quit': 'Interrompi e torna alla home' };
  function disarm() {
    armed = null;
    for (const [id, label] of Object.entries(MENU_LABELS)) {
      $(id).textContent = label;
      $(id).classList.remove('armed');
    }
  }

  function quit() {
    store.del(STATE_KEY);
    C = null;
    releaseWakeLock();
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    location.href = './';
  }
  function guarded(btn, action) {
    const inProgress = C && C.active !== -1 && C.flagged < 0;
    if (!inProgress || armed === btn) return action();
    disarm();
    armed = btn;
    btn.classList.add('armed');
    btn.textContent = 'Tocca di nuovo per confermare';
  }

  $('m-resume').addEventListener('click', resume);
  $('m-restart').addEventListener('click', (e) => guarded(e.currentTarget, restart));
  $('m-change').addEventListener('click', (e) => guarded(e.currentTarget, showSetup));
  $('m-quit').addEventListener('click', (e) => guarded(e.currentTarget, quit));
  menu.addEventListener('click', (e) => {
    if (e.target === menu && C?.flagged < 0) resume();
  });

  /* ---------- Input ---------- */

  sides.forEach((el, i) =>
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      unlockAudio();
      press(i);
    }),
  );
  sides.forEach((el) => el.addEventListener('contextmenu', (e) => e.preventDefault()));

  $('btn-menu').addEventListener('click', () => (C?.running ? pause() : openMenu()));
  $('btn-sound').addEventListener('click', () => {
    prefs.sound = !prefs.sound;
    $('opt-sound').checked = prefs.sound;
    savePrefs();
    syncSoundIcon();
  });
  const syncSoundIcon = () => document.body.classList.toggle('is-muted', !prefs.sound);
  syncSoundIcon();

  document.addEventListener('keydown', (e) => {
    if (!C || $('board').hidden) return;
    if (e.code === 'Space') {
      e.preventDefault();
      if (C.active === -1) press(0);
      else press(C.active);
    } else if (e.code === 'Escape' || e.code === 'KeyP') {
      C.running ? pause() : resume();
    }
  });

  /* ---------- Feedback: sound, vibration ---------- */

  let ctx = null;
  function unlockAudio() {
    if (!prefs.sound) return;
    try {
      ctx ??= new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
    } catch {}
  }
  document.addEventListener('touchend', unlockAudio, { passive: true });

  function beep(freq, dur, vol, when = 0) {
    if (!ctx) return;
    const t = ctx.currentTime + when;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  function vibrate(pattern) {
    if (prefs.vibrate) navigator.vibrate?.(pattern);
  }

  function feedback() {
    vibrate(15);
    if (prefs.sound) beep(1300, 0.035, 0.12);
  }

  /* ---------- Screen: wake lock, fullscreen ---------- */

  let wakeLock = null;
  async function requestWakeLock() {
    try {
      if ('wakeLock' in navigator && !wakeLock) {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => (wakeLock = null));
      }
    } catch {}
  }
  function releaseWakeLock() {
    wakeLock?.release().catch(() => {});
    wakeLock = null;
  }

  function enterFullscreen() {
    const el = document.documentElement;
    const req = el.requestFullscreen ?? el.webkitRequestFullscreen;
    try {
      const p = req?.call(el, { navigationUI: 'hide' });
      p?.then?.(() => screen.orientation?.lock?.('portrait').catch(() => {})).catch(() => {});
    } catch {}
  }

  /* ---------- Persistence ---------- */

  // Saved so an accidental reload or app switch never loses a game; it always comes back paused.
  function save() {
    if (C) store.set(STATE_KEY, { ...C, running: false });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      if (C) advance(performance.now());
      save();
    } else if (C && !$('board').hidden) {
      requestWakeLock();
    }
  });
  window.addEventListener('pagehide', save);
  saveTimer = setInterval(() => C?.running && save(), 2000);

  /* ---------- Boot ---------- */

  renderPresets();
  const saved = store.get(STATE_KEY, null);
  if (saved && Array.isArray(saved.left) && saved.left.length === 2) {
    C = saved;
    showBoard();
    if (C.active !== -1) openMenu();
  }

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
