/**
 * Antipode GeoGuesser Game
 *
 * Find the antipode of a randomly placed point on the 3D globe.
 * Uses the exposed __globe, __controls, and __helpers from the main bundle.
 */

(function () {
  'use strict';

  // ── Constants ──
  const TOTAL_ROUNDS = 5;
  const MAX_SCORE_PER_ROUND = 5000;
  const EARTH_RADIUS_KM = 6371;
  const MARKER_RADIUS = 0.015;
  const MARKER_SURFACE_R = 1.015;

  // ── Colors ──
  const COLOR_CHALLENGE = 0xff8c00;   // Orange — challenge point
  const COLOR_GUESS     = 0x42a5f5;   // Blue — player's guess
  const COLOR_ANSWER    = 0xff1744;   // Red — true antipode
  const COLOR_ARC       = 0xffeb3b;   // Yellow — arc line

  // ── Wait for globe to be ready ──
  let globe, controls, helpers;

  const waitForGlobe = setInterval(() => {
    if (window.__globe && window.__controls && window.__helpers) {
      clearInterval(waitForGlobe);
      globe = window.__globe;
      controls = window.__controls;
      helpers = window.__helpers;
      init();
    }
  }, 100);

  // ── State ──
  let gameActive = false;
  let phase = 'idle'; // idle | guessing | confirmed | ended
  let currentRound = 0;
  let totalScore = 0;

  // References to overlay objects (equator, poles) that we hide during gameplay
  let overlayObjects = [];

  // Current round data
  let challengeLat, challengeLon;
  let guessLat, guessLon;
  let challengeMarker = null;
  let guessMarker = null;
  let answerMarker = null;
  let arcLine = null;
  let gameMarkers = []; // track all game-added objects for cleanup

  // ── DOM refs ──
  let playBtn, gameHud, gameInstruction, gameScoreBadge;
  let roundNumEl, totalScoreEl;
  let confirmBtn, nextBtn, endBtn, bottomBar;
  let resultPanel, infoLabel, coordsLabel, resetBtn;

  // Three.js primitives (extracted from existing objects)
  let SphereGeometry, MeshBasicMaterial, Mesh, BufferGeometry, LineBasicMaterial, Line, Vector2, Raycaster, Vector3;

  function init() {
    // Extract Three.js constructors from existing globe objects
    const earthMesh = globe.earthMesh;
    SphereGeometry = earthMesh.geometry.constructor;
    Mesh = earthMesh.constructor;

    // Get MeshBasicMaterial from the pole markers (which use MeshBasicMaterial)
    const earthGroup = globe.earthGroup;
    for (let i = 0; i < earthGroup.children.length; i++) {
      const child = earthGroup.children[i];
      if (child.isMesh && child.material && child.material.type === 'MeshBasicMaterial') {
        MeshBasicMaterial = child.material.constructor;
        break;
      }
    }
    if (!MeshBasicMaterial) {
      console.warn('[AntipodeGame] MeshBasicMaterial not found, falling back to MeshStandard');
      MeshBasicMaterial = earthMesh.material.constructor;
    }

    // Get Raycaster and Vector2 from controls
    Raycaster = controls.raycaster.constructor;
    Vector2 = controls.mouse.constructor;

    // Get Vector3 from camera position
    Vector3 = globe.camera.position.constructor;

    // Get Line and BufferGeometry from equator line
    for (let i = 0; i < earthGroup.children.length; i++) {
      const child = earthGroup.children[i];
      if (child.isLine) {
        Line = child.constructor;
        BufferGeometry = child.geometry.constructor;
        LineBasicMaterial = child.material.constructor;
        break;
      }
    }
    if (!Line) {
      console.warn('[AntipodeGame] Line/BufferGeometry not found from equator; arc drawing will fail');
    }

    // Cache DOM refs
    playBtn = document.getElementById('play-btn');
    gameHud = document.getElementById('game-hud');
    gameInstruction = document.getElementById('game-instruction');
    gameScoreBadge = document.getElementById('game-score-badge');
    roundNumEl = document.getElementById('round-num');
    totalScoreEl = document.getElementById('total-score');
    confirmBtn = document.getElementById('confirm-btn');
    nextBtn = document.getElementById('next-btn');
    endBtn = document.getElementById('end-btn');
    bottomBar = document.getElementById('game-bottom-bar');
    resultPanel = document.getElementById('result-panel');
    infoLabel = document.getElementById('info-label');
    coordsLabel = document.getElementById('coords-label');
    resetBtn = document.getElementById('reset-btn');

    // Identify overlay objects (equator line, pole markers) so we can hide them during game
    for (let i = 0; i < earthGroup.children.length; i++) {
      const child = earthGroup.children[i];
      // Equator = red Line; Poles = small yellow MeshBasicMaterial spheres
      if (child.isLine || (child.isMesh && child.material && child.material.type === 'MeshBasicMaterial')) {
        overlayObjects.push(child);
      }
    }

    // Bind button events (use .onclick to allow safe reassignment later)
    playBtn.onclick = startGame;
    confirmBtn.onclick = confirmGuess;
    nextBtn.onclick = nextRound;
    endBtn.onclick = endGame;

    // ── CRITICAL: Intercept clicks during the game ──
    // The existing E3 handler is registered on the canvas in bubble phase.
    // We register in CAPTURE phase so we fire first, and can stop the E3
    // handler from placing its own markers while the game is active.
    globe.renderer.domElement.addEventListener('click', function (event) {
      if (!gameActive) return;            // let E3 handler work normally
      event.stopImmediatePropagation();   // block E3's onClick
      onGlobeClick(event);                // handle in game logic
    }, true); // ← capture phase
  }

  // ── Game Flow ──

  function startGame() {
    gameActive = true;
    currentRound = 0;
    totalScore = 0;

    // Hide existing UI
    playBtn.classList.add('hidden');
    infoLabel.style.display = 'none';
    coordsLabel.classList.remove('visible');
    resetBtn.classList.remove('visible');

    // Remove any existing markers from the default interaction
    if (controls.markers && controls.markers.length > 0) {
      controls.removeAllMarkers();
    }

    // Hide equator line and pole markers so they don't give away the answer
    for (const obj of overlayObjects) obj.visible = false;

    // Show game HUD
    gameHud.classList.add('visible');
    bottomBar.classList.add('visible');
    updateHUD();

    nextRound();
  }

  function nextRound() {
    clearRoundObjects();
    hideResult();

    currentRound++;
    if (currentRound > TOTAL_ROUNDS) {
      showFinalScore();
      return;
    }

    phase = 'guessing';
    updateHUD();
    gameInstruction.textContent = '🌍 Click on the globe to guess the antipode of the orange point!';
    gameInstruction.style.display = '';

    // Hide all action buttons (confirm appears after a guess)
    confirmBtn.classList.remove('visible');
    nextBtn.classList.remove('visible');
    endBtn.classList.remove('visible');

    // Generate random challenge point — avoid poles (clamp to ±70°)
    challengeLat = Math.random() * 140 - 70;  // -70 to 70
    challengeLon = Math.random() * 360 - 180; // -180 to 180

    // Place orange challenge marker
    challengeMarker = createMarker(challengeLat, challengeLon, MARKER_SURFACE_R, COLOR_CHALLENGE, 0.022);
    globe.earthGroup.add(challengeMarker);
    gameMarkers.push(challengeMarker);

    // Animate camera to show the challenge point
    rotateToPoint(challengeLat, challengeLon);
  }

  function onGlobeClick(event) {
    if (!gameActive || phase !== 'guessing') return;

    const mouse = new Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const raycaster = new Raycaster();
    raycaster.setFromCamera(mouse, globe.camera);
    const intersects = raycaster.intersectObject(globe.earthMesh);

    if (intersects.length === 0) return;

    const point = intersects[0].point;
    const localPoint = globe.earthGroup.worldToLocal(point.clone());
    const coords = helpers.vecToLatLon(localPoint);
    guessLat = coords.lat;
    guessLon = coords.lon;

    // Remove previous guess marker if repositioning
    if (guessMarker) {
      globe.earthGroup.remove(guessMarker);
      guessMarker.geometry.dispose();
      guessMarker.material.dispose();
      const idx = gameMarkers.indexOf(guessMarker);
      if (idx > -1) gameMarkers.splice(idx, 1);
    }

    // Place blue guess marker
    guessMarker = createMarker(guessLat, guessLon, MARKER_SURFACE_R, COLOR_GUESS, 0.018);
    globe.earthGroup.add(guessMarker);
    gameMarkers.push(guessMarker);

    // Show confirm button
    confirmBtn.classList.add('visible');
    gameInstruction.textContent = '📍 Click again to reposition, or confirm your guess!';
  }

  function confirmGuess() {
    if (phase !== 'guessing' || !guessMarker) return;
    phase = 'confirmed';

    confirmBtn.classList.remove('visible');

    // Calculate true antipode
    const antipode = helpers.antipode(challengeLat, challengeLon);
    const trueLat = antipode.lat;
    const trueLon = antipode.lon;

    // Place red answer marker
    answerMarker = createMarker(trueLat, trueLon, MARKER_SURFACE_R, COLOR_ANSWER, 0.022);
    globe.earthGroup.add(answerMarker);
    gameMarkers.push(answerMarker);

    // Draw arc between guess and true antipode
    drawArc(guessLat, guessLon, trueLat, trueLon);

    // Calculate distance (great-circle)
    const distKm = greatCircleDistance(guessLat, guessLon, trueLat, trueLon);
    const maxDist = Math.PI * EARTH_RADIUS_KM; // ~20015 km
    const roundScore = Math.round(MAX_SCORE_PER_ROUND * Math.max(0, 1 - distKm / maxDist));
    totalScore += roundScore;

    // Show score popup
    showScorePopup(roundScore);

    // Show result panel
    showResult(distKm, roundScore, trueLat, trueLon);

    // Update HUD
    updateHUD();
    gameInstruction.textContent = roundScore >= 4000
      ? '🎯 Amazing guess!'
      : roundScore >= 2500
        ? '👍 Good guess!'
        : roundScore >= 1000
          ? '🤔 Not bad!'
          : '😅 Better luck next time!';

    // Show next / end buttons
    if (currentRound < TOTAL_ROUNDS) {
      nextBtn.classList.add('visible');
    }
    endBtn.classList.add('visible');

    // Animate camera to show the answer
    rotateToPoint(trueLat, trueLon);
  }

  function endGame() {
    if (currentRound >= TOTAL_ROUNDS && phase === 'confirmed') {
      showFinalScore();
    } else {
      resetGame();
    }
  }

  function showFinalScore() {
    phase = 'ended';
    clearRoundObjects();
    hideResult();

    const maxPossible = TOTAL_ROUNDS * MAX_SCORE_PER_ROUND;
    const pct = Math.round((totalScore / maxPossible) * 100);

    let emoji = '🌍';
    if (pct >= 90) emoji = '🏆';
    else if (pct >= 70) emoji = '🥇';
    else if (pct >= 50) emoji = '🥈';
    else if (pct >= 30) emoji = '🥉';

    gameInstruction.innerHTML = `${emoji} Game Over! Final Score: <strong>${totalScore}</strong> / ${maxPossible} (${pct}%)`;

    confirmBtn.classList.remove('visible');
    nextBtn.classList.remove('visible');
    endBtn.classList.remove('visible');

    // Repurpose next as "Play Again" and end as "Exit"
    nextBtn.textContent = '🔄 Play Again';
    nextBtn.classList.add('visible');
    nextBtn.onclick = () => {
      nextBtn.textContent = '▶ Next Round';
      nextBtn.onclick = nextRound;
      startGame();
    };

    endBtn.textContent = '✕ Exit';
    endBtn.classList.add('visible');
    endBtn.onclick = () => {
      endBtn.textContent = '✕ End Game';
      endBtn.onclick = endGame;
      resetGame();
    };

    showScorePopup(totalScore);
  }

  function resetGame() {
    gameActive = false;
    phase = 'idle';
    clearRoundObjects();
    hideResult();

    // Reset button labels and handlers
    nextBtn.textContent = '▶ Next Round';
    nextBtn.onclick = nextRound;
    endBtn.textContent = '✕ End Game';
    endBtn.onclick = endGame;

    // Restore equator line and pole markers
    for (const obj of overlayObjects) obj.visible = true;

    // Hide game UI
    gameHud.classList.remove('visible');
    bottomBar.classList.remove('visible');
    confirmBtn.classList.remove('visible');
    nextBtn.classList.remove('visible');
    endBtn.classList.remove('visible');

    // Show default UI
    playBtn.classList.remove('hidden');
    infoLabel.style.display = '';
  }

  // ── Helpers ──

  function createMarker(lat, lon, radius, color, size) {
    size = size || MARKER_RADIUS;
    const geo = new SphereGeometry(size, 16, 16);
    const mat = new MeshBasicMaterial({ color: color });
    const mesh = new Mesh(geo, mat);
    const pos = helpers.latLonToVec3(lat, lon, radius);
    mesh.position.copy(pos);
    return mesh;
  }

  function drawArc(lat1, lon1, lat2, lon2) {
    if (!Line || !BufferGeometry || !LineBasicMaterial) return; // safety
    const segments = 64;
    const points = [];
    const p1 = helpers.latLonToVec3(lat1, lon1, 1).normalize();
    const p2 = helpers.latLonToVec3(lat2, lon2, 1).normalize();

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const point = slerpVec(p1, p2, t);
      point.multiplyScalar(1.005); // lift slightly above surface
      points.push(point);
    }

    const geo = new BufferGeometry().setFromPoints(points);
    const mat = new LineBasicMaterial({ color: COLOR_ARC, linewidth: 2 });
    arcLine = new Line(geo, mat);
    globe.earthGroup.add(arcLine);
    gameMarkers.push(arcLine);
  }

  function slerpVec(v1, v2, t) {
    const dot = Math.max(-1, Math.min(1, v1.x * v2.x + v1.y * v2.y + v1.z * v2.z));
    const theta = Math.acos(dot);
    if (theta < 0.0001) {
      return new Vector3(
        v1.x + (v2.x - v1.x) * t,
        v1.y + (v2.y - v1.y) * t,
        v1.z + (v2.z - v1.z) * t
      ).normalize();
    }
    const sinTheta = Math.sin(theta);
    const a = Math.sin((1 - t) * theta) / sinTheta;
    const b = Math.sin(t * theta) / sinTheta;
    return new Vector3(
      a * v1.x + b * v2.x,
      a * v1.y + b * v2.y,
      a * v1.z + b * v2.z
    );
  }

  function greatCircleDistance(lat1, lon1, lat2, lon2) {
    const toRad = Math.PI / 180;
    const dLat = (lat2 - lat1) * toRad;
    const dLon = (lon2 - lon1) * toRad;
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(lat1 * toRad) * Math.cos(lat2 * toRad) *
              Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS_KM * c;
  }

  function formatCoord(val, posLabel, negLabel) {
    const dir = val >= 0 ? posLabel : negLabel;
    return `${Math.abs(val).toFixed(2)}° ${dir}`;
  }

  /** Smoothly rotate the camera to face the given lat/lon on the globe. */
  function rotateToPoint(lat, lon) {
    const target = helpers.latLonToVec3(lat, lon, 1).normalize();
    const camDist = globe.camera.position.length();
    const goalPos = target.clone().multiplyScalar(camDist);
    const startPos = globe.camera.position.clone();

    // If already very close, skip animation
    if (startPos.distanceTo(goalPos) < 0.05) return;

    const duration = 900; // ms
    const startTime = performance.now();

    // Temporarily disable OrbitControls damping so it doesn't fight our animation
    const orbitControls = controls.controls;
    const wasDamping = orbitControls.enableDamping;
    orbitControls.enableDamping = false;

    function animate(now) {
      let t = Math.min(1, (now - startTime) / duration);
      // Ease-out cubic
      t = 1 - Math.pow(1 - t, 3);

      const current = slerpVec(
        startPos.clone().normalize(),
        goalPos.clone().normalize(),
        t
      );
      current.multiplyScalar(camDist);
      globe.camera.position.copy(current);
      globe.camera.lookAt(0, 0, 0);
      orbitControls.update();

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        // Restore damping
        orbitControls.enableDamping = wasDamping;
        orbitControls.update();
      }
    }

    requestAnimationFrame(animate);
  }

  // ── UI Updates ──

  function updateHUD() {
    roundNumEl.textContent = Math.min(currentRound, TOTAL_ROUNDS);
    totalScoreEl.textContent = totalScore;
  }

  function showScorePopup(score) {
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.textContent = `+${score}`;
    document.body.appendChild(popup);
    setTimeout(() => popup.classList.add('fade-out'), 1200);
    setTimeout(() => popup.remove(), 1600);
  }

  function showResult(distKm, roundScore, trueLat, trueLon) {
    resultPanel.innerHTML = `
      <div style="margin-bottom:4px;">
        🟠 Challenge: ${formatCoord(challengeLat, 'N', 'S')}, ${formatCoord(challengeLon, 'E', 'W')}
      </div>
      <div style="margin-bottom:4px;">
        🔵 Your guess: ${formatCoord(guessLat, 'N', 'S')}, ${formatCoord(guessLon, 'E', 'W')}
      </div>
      <div style="margin-bottom:4px;">
        🔴 True antipode: ${formatCoord(trueLat, 'N', 'S')}, ${formatCoord(trueLon, 'E', 'W')}
      </div>
      <div style="margin-top:8px; font-size:14px;">
        📏 Distance: <strong>${distKm.toFixed(0)} km</strong> &nbsp;|&nbsp;
        ⭐ Round score: <strong>${roundScore}</strong>
      </div>
    `;
    resultPanel.classList.add('visible');
  }

  function hideResult() {
    resultPanel.classList.remove('visible');
  }

  function clearRoundObjects() {
    for (const obj of gameMarkers) {
      globe.earthGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    }
    gameMarkers = [];
    challengeMarker = null;
    guessMarker = null;
    answerMarker = null;
    arcLine = null;
  }

})();
