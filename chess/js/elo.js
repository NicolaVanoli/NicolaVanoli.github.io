// Elo is never stored: it is replayed from every game, in the order the games were played.
export const START_RATING = 1200;
export const PROVISIONAL_GAMES = 10;

// Higher K while a player is provisional so new players converge quickly.
const kFactor = (gamesPlayed) => (gamesPlayed < PROVISIONAL_GAMES ? 40 : 20);

export const whiteScore = (result) => (result === '1-0' ? 1 : result === '0-1' ? 0 : 0.5);

const expected = (ra, rb) => 1 / (1 + 10 ** ((rb - ra) / 400));

// games: [{ id, white, black, result, playedAtMs }] where white/black are player keys.
export function computeRatings(playerIds, games) {
  const stats = new Map();
  const get = (id) => {
    if (!stats.has(id)) {
      stats.set(id, { rating: START_RATING, peak: START_RATING, games: 0, w: 0, d: 0, l: 0, history: [] });
    }
    return stats.get(id);
  };
  playerIds.forEach(get);

  const deltas = new Map();
  const ordered = [...games].sort((a, b) => a.playedAtMs - b.playedAtMs || a.id.localeCompare(b.id));

  for (const g of ordered) {
    const W = get(g.white);
    const B = get(g.black);
    const sW = whiteScore(g.result);
    const eW = expected(W.rating, B.rating);
    const dW = Math.round(kFactor(W.games) * (sW - eW));
    const dB = Math.round(kFactor(B.games) * ((1 - sW) - (1 - eW)));
    deltas.set(g.id, { white: dW, black: dB });

    for (const [p, d, s] of [[W, dW, sW], [B, dB, 1 - sW]]) {
      p.rating += d;
      p.peak = Math.max(p.peak, p.rating);
      p.games += 1;
      if (s === 1) p.w += 1;
      else if (s === 0) p.l += 1;
      else p.d += 1;
      p.history.push({ id: g.id, t: g.playedAtMs, rating: p.rating, delta: d });
    }
  }
  return { stats, deltas };
}
