import { firebaseConfig, ADMIN_EMAIL } from './firebase-config.js';
import { computeRatings, START_RATING, PROVISIONAL_GAMES } from './elo.js';

// Games live in a Firestore collection: everyone reads it live, only the admin account can
// write (enforced by firestore.rules). Writes made offline are queued and synced later.
const FIREBASE_CDN = 'https://www.gstatic.com/firebasejs/10.12.2';
const NO_TIME = 'No time';
// Same presets as the clock.
const TIME_CONTROLS = [
  ['Bullet', ['1+0', '1+1', '2+1']],
  ['Blitz', ['3+0', '3+2', '5+0', '5+3']],
  ['Rapid', ['10+0', '10+5', '15+10', '25+10']],
  ['Classica', ['30+0', '30+20', '60+0', '90+30']],
];
const RESULTS = ['1-0', '0-1', '1/2'];

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const keyOf = (name) => name.trim().replace(/\s+/g, ' ').toLowerCase();
const view = $('#view');
const configured = !String(firebaseConfig.apiKey).startsWith('REPLACE');

let F, auth, db;

const S = {
  admin: false,
  loaded: false,
  error: null,
  games: [],
  players: new Map(), // key -> display name
  stats: new Map(),
  deltas: new Map(),
};

/* ---------------- Firebase ---------------- */

async function initFirebase() {
  const [appMod, authMod, storeMod] = await Promise.all([
    import(`${FIREBASE_CDN}/firebase-app.js`),
    import(`${FIREBASE_CDN}/firebase-auth.js`),
    import(`${FIREBASE_CDN}/firebase-firestore.js`),
  ]);
  F = { ...appMod, ...authMod, ...storeMod };
  const app = F.initializeApp(firebaseConfig);
  auth = F.getAuth(app);
  try {
    db = F.initializeFirestore(app, { localCache: F.persistentLocalCache() });
  } catch {
    db = F.getFirestore(app);
  }

  F.onAuthStateChanged(auth, (user) => {
    S.admin = !!user && user.email === ADMIN_EMAIL;
    document.body.classList.toggle('is-admin', S.admin);
    rebuild();
    if (S.loaded) route();
  });

  F.onSnapshot(
    F.collection(db, 'games'),
    { includeMetadataChanges: true },
    (snap) => {
      setGames(
        snap.docs
          .map((d) => {
            const g = cleanGame({ ...d.data(), id: d.id });
            return g && { ...g, isPending: d.metadata.hasPendingWrites };
          })
          .filter(Boolean),
      );
      const first = !S.loaded;
      S.loaded = true;
      S.error = null;
      // Forms are not redrawn on remote updates so nobody loses what they are typing.
      if (first || !['nuova', 'admin'].includes(currentRoute().key)) route();
    },
    (err) => {
      S.error = err;
      S.loaded = true;
      route();
    },
  );
}

function fbErrMsg(e) {
  const c = e?.code ?? '';
  if (/invalid-credential|wrong-password|user-not-found|invalid-login|invalid-email/.test(c)) return 'Password errata.';
  if (c.includes('too-many-requests')) return 'Troppi tentativi. Riprova tra qualche minuto.';
  if (c.includes('permission-denied')) return 'Operazione non consentita: accedi come admin.';
  if (c.includes('network') || c.includes('unavailable')) return 'Connessione assente. Riprova.';
  return e?.message || 'Errore imprevisto.';
}

/* ---------------- Data ---------------- */

// Accepts loosely-shaped records and returns a clean game or null.
function cleanGame(g) {
  if (!g || typeof g !== 'object') return null;
  const white = String(g.white ?? '').trim().replace(/\s+/g, ' ').slice(0, 30);
  const black = String(g.black ?? '').trim().replace(/\s+/g, ' ').slice(0, 30);
  const playedAtMs = Date.parse(g.playedAt);
  if (!white || !black || keyOf(white) === keyOf(black) || !RESULTS.includes(g.result) || Number.isNaN(playedAtMs)) return null;
  return {
    id: String(g.id),
    white,
    black,
    result: g.result,
    timeControl: String(g.timeControl ?? '').slice(0, 20),
    playedAt: new Date(playedAtMs).toISOString(),
    note: String(g.note ?? '').slice(0, 140),
  };
}

function setGames(list) {
  S.games = list.map((g) => ({ ...g, wk: keyOf(g.white), bk: keyOf(g.black), playedAtMs: Date.parse(g.playedAt) }));
  rebuild();
}

function rebuild() {
  S.players = new Map();
  for (const g of [...S.games].sort((a, b) => a.playedAtMs - b.playedAtMs)) {
    if (!S.players.has(g.wk)) S.players.set(g.wk, g.white);
    if (!S.players.has(g.bk)) S.players.set(g.bk, g.black);
  }
  const { stats, deltas } = computeRatings(
    [...S.players.keys()],
    S.games.map((g) => ({ id: g.id, white: g.wk, black: g.bk, result: g.result, playedAtMs: g.playedAtMs })),
  );
  S.stats = stats;
  S.deltas = deltas;
}

/* ---------------- Routing ---------------- */

const ROUTES = {
  classifica: viewLeaderboard,
  partite: viewGames,
  giocatore: viewPlayer,
  nuova: viewNewGame,
  admin: viewAdmin,
};

function currentRoute() {
  const raw = location.hash.replace(/^#\/?/, '');
  const [path, qs = ''] = raw.split('?');
  const [name, ...rest] = path.split('/');
  const key = ROUTES[name] ? name : 'classifica';
  return { key, param: rest.length ? decodeURIComponent(rest.join('/')) : null, query: new URLSearchParams(qs) };
}

function route() {
  const r = currentRoute();
  if (r.key === 'nuova' && !S.admin) {
    location.hash = '#/admin';
    return;
  }
  document.querySelectorAll('[data-tab]').forEach((a) => a.classList.toggle('active', a.dataset.tab === r.key));
  if (!configured) return renderNotConfigured();
  if (!S.loaded) return;
  if (S.error && r.key !== 'admin') return renderError();
  const sameView = view.dataset.route === location.hash;
  const y = window.scrollY;
  view.dataset.route = location.hash;
  ROUTES[r.key](r);
  window.scrollTo(0, sameView ? y : 0);
}

function renderNotConfigured() {
  view.innerHTML = `
    <section class="card">
      <h1>Quasi pronto</h1>
      <p>Manca la configurazione del database: compila <code>chess/js/firebase-config.js</code> seguendo <code>chess/README.md</code>.</p>
      <p class="muted">L'orologio funziona già.</p>
      <a class="btn btn-primary btn-block" href="clock.html">Apri l'orologio</a>
    </section>`;
}

function renderError() {
  view.innerHTML = `
    <section class="card">
      <h1>Classifica non disponibile</h1>
      <p class="muted">${esc(fbErrMsg(S.error))}</p>
      <button class="btn btn-primary btn-block" onclick="location.reload()">Riprova</button>
    </section>`;
}

window.addEventListener('hashchange', route);
if (configured) initFirebase().catch((e) => ((S.error = e), (S.loaded = true), route()));
else route();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});

/* ---------------- Helpers ---------------- */

const playerName = (key) => S.players.get(key) ?? key;
const playerHref = (key) => `#/giocatore/${encodeURIComponent(key)}`;
const fmtDate = (ms) =>
  new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(ms);
const fmtDelta = (d) => (d > 0 ? `+${d}` : d < 0 ? `−${Math.abs(d)}` : '±0');
const fmtResult = (r) => (r === '1/2' ? '½–½' : r.replace('-', '–'));

let toastTimer;
function toast(msg, kind = '') {
  const t = $('#toast');
  t.textContent = msg;
  t.className = `toast show ${kind}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.className = 'toast'), 3600);
}

/* ---------------- Leaderboard ---------------- */

function viewLeaderboard() {
  const ranked = [...S.players.keys()]
    .map((k) => ({ k, s: S.stats.get(k) }))
    .sort((a, b) => b.s.rating - a.s.rating || b.s.games - a.s.games);

  const row = ({ k, s }, i) => {
    const last = s.history.at(-1);
    return `
      <li>
        <a href="${playerHref(k)}">
          <span class="pos">${i + 1}</span>
          <span class="who"><strong>${esc(playerName(k))}</strong>
            <small>${s.games} ${s.games === 1 ? 'partita' : 'partite'} · ${s.w}V ${s.d}P ${s.l}S</small></span>
          <span class="elo"><strong>${s.rating}${s.games < PROVISIONAL_GAMES ? '<sup title="Elo provvisorio">?</sup>' : ''}</strong>
            ${last ? `<small class="delta ${last.delta > 0 ? 'up' : last.delta < 0 ? 'down' : ''}">${fmtDelta(last.delta)}</small>` : ''}</span>
        </a>
      </li>`;
  };

  view.innerHTML = `
    <section class="card">
      <div class="card-head"><h1>Classifica</h1><span class="muted small">${S.games.length} partite</span></div>
      ${ranked.length ? `<ol class="rank">${ranked.map(row).join('')}</ol>` : `<p class="empty">Nessuna partita ancora.${S.admin ? ' <a href="#/nuova">Registra la prima</a>.' : ''}</p>`}
    </section>
    <details class="card info">
      <summary>Come funziona l'Elo</summary>
      <h3>1. Punto di partenza</h3>
      <p>Tutti partono da <b>${START_RATING}</b>. L'Elo non è salvato: la classifica viene ricalcolata da zero rigiocando tutte le partite in ordine di data, quindi una partita registrata in ritardo (o eliminata) aggiorna correttamente tutto ciò che viene dopo.</p>

      <h3>2. Il punteggio atteso</h3>
      <p>Prima di ogni partita si stima quanti punti "dovrebbe" fare ciascuno:</p>
      <p class="formula">atteso = 1 / (1 + 10<sup>D / 400</sup>)</p>
      <p>dove <b>D</b> = Elo dell'avversario − il tuo Elo.</p>
      <table class="elo-table">
        <thead><tr><th>Differenza di Elo</th><th>Atteso del più forte</th></tr></thead>
        <tbody><tr><td>0</td><td>0,50</td></tr><tr><td>100</td><td>0,64</td></tr><tr><td>200</td><td>0,76</td></tr><tr><td>400</td><td>0,91</td></tr></tbody>
      </table>

      <h3>3. Il risultato reale</h3>
      <p>Vittoria = <b>1</b>, patta = <b>0,5</b>, sconfitta = <b>0</b>.</p>

      <h3>4. La variazione</h3>
      <p class="formula">variazione = K × (risultato − atteso)</p>
      <p>arrotondata all'intero. K indica quanto pesa una partita: <b>40</b> per le prime ${PROVISIONAL_GAMES} partite di un giocatore (Elo provvisorio, segnato con <b>?</b>, per arrivare in fretta al livello reale) e <b>20</b> dopo. Il K dipende dalle partite giocate da ciascuno, quindi nella stessa partita i due giocatori possono avere K diversi.</p>

      <h3>Esempi</h3>
      <ul>
        <li><b>1200 contro 1200, vince il Bianco.</b> Atteso 0,5 per entrambi: Bianco 40 × (1 − 0,5) = <span class="up">+20</span>, Nero <span class="down">−20</span>.</li>
        <li><b>1220 contro 1180, patta.</b> Atteso del 1220 ≈ 0,557: 40 × (0,5 − 0,557) ≈ <span class="down">−2</span>, il 1180 fa <span class="up">+2</span>. Pareggiare contro un giocatore più debole fa perdere un po' di Elo.</li>
        <li><b>1180 batte 1300.</b> Atteso del 1180 ≈ 0,33: 40 × (1 − 0,33) ≈ <span class="up">+27</span>. Battere chi è più forte vale molto di più.</li>
      </ul>

      <h3>Da sapere</h3>
      <ul>
        <li>Con K diversi (o per gli arrotondamenti) i punti guadagnati e persi in una partita possono non essere uguali.</li>
        <li>È un Elo interno al gruppo: non è confrontabile con quello FIDE o di chess.com.</li>
      </ul>
    </details>`;
}

/* ---------------- Games ---------------- */

function gameCard(g) {
  const d = S.deltas.get(g.id);
  const winner = g.result === '1-0' ? g.wk : g.result === '0-1' ? g.bk : null;
  const side = (key, color, delta) => `
    <a class="gp ${key === winner ? 'won' : ''}" href="${playerHref(key)}">
      <span class="pc pc-${color}" aria-label="${color === 'w' ? 'Bianco' : 'Nero'}"></span>
      <span class="gp-name">${esc(playerName(key))}</span>
      ${delta != null ? `<span class="delta ${delta > 0 ? 'up' : delta < 0 ? 'down' : ''}">${fmtDelta(delta)}</span>` : ''}
    </a>`;

  return `
    <article class="game ${g.isPending ? 'is-pending' : ''}">
      <div class="game-meta">
        <span>${fmtDate(g.playedAtMs)}${g.timeControl ? ` · ${esc(g.timeControl)}` : ''}</span>
        ${g.isPending ? '<span class="status wait">In invio…</span>' : ''}
      </div>
      <div class="game-body">
        ${side(g.wk, 'w', d?.white)}
        <div class="result">${fmtResult(g.result)}</div>
        ${side(g.bk, 'b', d?.black)}
      </div>
      ${g.note ? `<p class="game-note">${esc(g.note)}</p>` : ''}
      ${S.admin ? `<div class="btn-row"><button class="btn btn-danger-ghost btn-sm" data-delete="${esc(g.id)}">Elimina</button></div>` : ''}
    </article>`;
}

const byNewest = (a, b) => b.playedAtMs - a.playedAtMs || b.id.localeCompare(a.id);

function viewGames() {
  const list = [...S.games].sort(byNewest);
  view.innerHTML = `
    <div class="page-head"><h1>Partite</h1>${S.admin ? '<a class="btn btn-primary btn-sm" href="#/nuova">+ Nuova</a>' : ''}</div>
    <div class="game-list">${list.length ? list.map(gameCard).join('') : '<p class="empty card">Nessuna partita ancora.</p>'}</div>`;
}

view.addEventListener('click', async (ev) => {
  const btn = ev.target.closest('[data-delete]');
  if (!btn || !S.admin) return;
  const g = S.games.find((x) => x.id === btn.dataset.delete);
  if (!g || !confirm(`Eliminare ${g.white} – ${g.black} del ${fmtDate(g.playedAtMs)}?`)) return;
  try {
    await F.deleteDoc(F.doc(db, 'games', g.id));
    toast('Eliminata');
  } catch (e) {
    toast(fbErrMsg(e), 'bad');
  }
});

/* ---------------- Player ---------------- */

function sparkline(history) {
  const pts = [START_RATING, ...history.map((h) => h.rating)];
  if (pts.length < 2) return '';
  const W = 320;
  const H = 90;
  const min = Math.min(...pts) - 10;
  const max = Math.max(...pts) + 10;
  const x = (i) => (i / (pts.length - 1)) * W;
  const y = (v) => H - ((v - min) / (max - min)) * H;
  const line = pts.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  return `
    <figure class="spark">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="Andamento Elo">
        <line x1="0" x2="${W}" y1="${y(START_RATING)}" y2="${y(START_RATING)}" class="spark-base"/>
        <polyline points="${line}" class="spark-line" vector-effect="non-scaling-stroke"/>
      </svg>
      <figcaption><span>min ${Math.min(...pts)}</span><span>max ${Math.max(...pts)}</span></figcaption>
    </figure>`;
}

function viewPlayer(r) {
  const key = r.param;
  const s = S.stats.get(key);
  if (!s) {
    view.innerHTML = `<p class="empty card">Giocatore non trovato.</p>`;
    return;
  }
  const games = S.games.filter((g) => g.wk === key || g.bk === key).sort(byNewest);
  const score = s.games ? Math.round(((s.w + s.d / 2) / s.games) * 100) : 0;

  const h2h = new Map();
  for (const g of games) {
    const opp = g.wk === key ? g.bk : g.wk;
    const res = g.result === '1/2' ? 'd' : (g.result === '1-0') === (g.wk === key) ? 'w' : 'l';
    const rec = h2h.get(opp) ?? { w: 0, d: 0, l: 0 };
    rec[res] += 1;
    h2h.set(opp, rec);
  }
  const total = (rec) => rec.w + rec.d + rec.l;
  const h2hRows = [...h2h.entries()]
    .sort((a, b) => total(b[1]) - total(a[1]))
    .map(([opp, rec]) => `
      <li><a href="${playerHref(opp)}">${esc(playerName(opp))}</a>
        <span class="wdl"><b class="up">${rec.w}</b> · ${rec.d} · <b class="down">${rec.l}</b></span></li>`)
    .join('');

  view.innerHTML = `
    <section class="card player">
      <div class="player-head">
        <h1>${esc(playerName(key))}</h1>
        <div class="big-elo">${s.rating}<small>${s.games < PROVISIONAL_GAMES ? 'provvisorio' : 'Elo'}</small></div>
      </div>
      <dl class="stats">
        <div><dt>Partite</dt><dd>${s.games}</dd></div>
        <div><dt>V / P / S</dt><dd>${s.w} / ${s.d} / ${s.l}</dd></div>
        <div><dt>Punti</dt><dd>${score}%</dd></div>
        <div><dt>Picco</dt><dd>${s.peak}</dd></div>
      </dl>
      ${sparkline(s.history)}
    </section>
    ${h2hRows ? `<section class="card"><h2>Scontri diretti</h2><p class="muted small">vinte · patte · perse</p><ul class="h2h">${h2hRows}</ul></section>` : ''}
    <h2 class="section-title">Partite</h2>
    <div class="game-list">${games.map(gameCard).join('')}</div>`;
}

/* ---------------- New game (admin) ---------------- */

function localDateTimeValue(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}

function viewNewGame() {
  const names = [...S.players.values()].sort((a, b) => a.localeCompare(b, 'it'));

  view.innerHTML = `
    <section class="card">
      <h1>Nuova partita</h1>
      <form class="form" id="ng" novalidate autocomplete="off">
        <div class="pair">
          <label class="field"><span><i class="pc pc-w"></i> Bianco</span><input name="white" list="players" maxlength="30" placeholder="Nome" /></label>
          <button type="button" class="swap" id="swap" aria-label="Scambia i colori">⇄</button>
          <label class="field"><span><i class="pc pc-b"></i> Nero</span><input name="black" list="players" maxlength="30" placeholder="Nome" /></label>
          <datalist id="players">${names.map((n) => `<option value="${esc(n)}">`).join('')}</datalist>
        </div>

        <fieldset class="seg">
          <legend>Risultato</legend>
          ${[['1-0', 'Vince il Bianco'], ['1/2', 'Patta'], ['0-1', 'Vince il Nero']]
            .map(([v, l]) => `<label><input type="radio" name="result" value="${v}" /><span><b>${fmtResult(v)}</b><small>${l}</small></span></label>`)
            .join('')}
        </fieldset>

        <div class="row2">
          <label class="field"><span>Tempo</span>
            <select name="tc">
              <option value="${NO_TIME}" selected>${NO_TIME}</option>
              ${TIME_CONTROLS.map(([group, tcs]) => `<optgroup label="${group}">${tcs.map((t) => `<option value="${t}">${t}</option>`).join('')}</optgroup>`).join('')}
            </select>
          </label>
          <label class="field"><span>Quando</span><input type="datetime-local" name="playedAt" value="${localDateTimeValue()}" /></label>
        </div>
        <label class="field"><span>Note <small class="muted">(facoltativo)</small></span><input name="note" maxlength="140" placeholder="Apertura, torneo, …" /></label>

        <p class="form-error" id="ng-error" role="alert"></p>
        <button class="btn btn-primary btn-block btn-lg" id="ng-submit">Pubblica partita</button>
      </form>
    </section>`;

  const form = $('#ng');
  $('#swap').onclick = () => {
    [form.white.value, form.black.value] = [form.black.value, form.white.value];
  };

  form.onsubmit = (ev) => {
    ev.preventDefault();
    const err = $('#ng-error');
    // Reuse the existing spelling of a known player so "marco" and "Marco" stay one person;
    // new names get capitalised words.
    const canonical = (v) =>
      S.players.get(keyOf(v)) ?? v.trim().replace(/\s+/g, ' ').replace(/(^|\s)(\p{L})/gu, (m, sp, c) => sp + c.toUpperCase());
    const white = canonical(form.white.value);
    const black = canonical(form.black.value);
    const playedAt = new Date(form.playedAt.value || Date.now());

    err.textContent = '';
    if (!white || !black) return void (err.textContent = 'Inserisci i nomi dei due giocatori.');
    if (keyOf(white) === keyOf(black)) return void (err.textContent = 'I due giocatori devono essere diversi.');
    if (!form.result.value) return void (err.textContent = 'Seleziona il risultato.');
    if (Number.isNaN(playedAt.getTime())) return void (err.textContent = 'La data non è valida.');

    const game = {
      white,
      black,
      result: form.result.value,
      timeControl: form.tc.value,
      playedAt: playedAt.toISOString(),
      note: form.note.value.trim(),
      createdAt: F.serverTimestamp(),
    };
    // Not awaited: Firestore applies the write locally at once and syncs it (even after a
    // signal drop), so the admin is never stuck waiting at the table.
    F.addDoc(F.collection(db, 'games'), game).catch((e) => toast(fbErrMsg(e), 'bad'));
    toast('Partita pubblicata ✓', 'ok');
    location.hash = '#/partite';
  };
}

/* ---------------- Admin ---------------- */

function viewAdmin() {
  if (!S.admin) {
    view.innerHTML = `
      <section class="card">
        <h1>Area admin</h1>
        <p class="muted">Solo l'admin può aggiungere ed eliminare partite.</p>
        <form class="form" id="login" autocomplete="off">
          <label class="field"><span>Password</span><input name="password" type="password" required /></label>
          <p class="form-error" role="alert"></p>
          <button class="btn btn-primary btn-block">Accedi</button>
        </form>
      </section>`;
    const form = $('#login');
    form.onsubmit = async (ev) => {
      ev.preventDefault();
      const err = $('.form-error', form);
      const btn = form.querySelector('button');
      err.textContent = '';
      btn.disabled = true;
      try {
        await F.signInWithEmailAndPassword(auth, ADMIN_EMAIL, form.password.value);
        toast('Accesso admin ✓', 'ok');
      } catch (e) {
        err.textContent = fbErrMsg(e);
      } finally {
        btn.disabled = false;
      }
    };
    return;
  }

  view.innerHTML = `
    <section class="card">
      <h1>Area admin</h1>
      <p class="muted">Le partite che pubblichi compaiono subito a tutti. Resti collegato su questo telefono finché non esci.</p>
      <div class="form">
        <a class="btn btn-primary btn-block btn-lg" href="#/nuova">+ Nuova partita</a>
        <button class="btn btn-ghost btn-block" id="logout">Esci da admin</button>
      </div>
    </section>`;
  $('#logout').onclick = async () => {
    await F.signOut(auth);
    location.hash = '#/classifica';
  };
}
