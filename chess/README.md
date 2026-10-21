# Club Scacchi

Static site, no backend and no build step: Elo leaderboard, game log and a mobile chess clock.

- `index.html`: leaderboard, games, player pages; admin area to add/remove games.
- `clock.html`: chess clock only. Works offline; every phone runs its own independent clock.
- `js/firebase-config.js`: Firebase project config and admin account email.
- `firestore.rules`: database rules (public read, admin-only write).

## How games are stored

Games live in a free Firebase Firestore database (Spark plan: no card, never paused).

- **Everyone** reads the games live: when the admin publishes or deletes a game, every open leaderboard updates within a second, without reloading.
- **Only the admin** can write. The admin is a single Firebase account (`ADMIN_EMAIL` in `js/firebase-config.js`); its password is the admin password (`Carlsen123`). The password is checked by Firebase and is not in the site code. `firestore.rules` rejects writes from anyone else.
- On weak signal, a published game is saved on the phone at once (shown "In invio…") and synced as soon as the connection is back.

## Setup (one time, about 5 minutes)

1. <https://console.firebase.google.com> → **Add project** (Google Analytics not needed).
2. **Build → Authentication → Get started → Email/Password** → enable → Save.
3. **Authentication → Users → Add user**: email `admin@scacchi.com`, password `Carlsen123`.
4. **Build → Firestore Database → Create database** → location `eur3 (europe-west)` → start in **production mode**.
5. **Firestore → Rules**: paste the content of `firestore.rules` → **Publish**.
6. **Project settings (gear) → General → Your apps → Web (`</>`)**: register an app (no hosting), then copy `apiKey`, `authDomain`, `projectId`, `appId` into `js/firebase-config.js`.
7. **Authentication → Settings → Authorized domains**: add `www.nicolavanoli.com` (`localhost` is already there).

To change the admin password later: Authentication → Users → the admin user → ⋮ → Reset password is email-based, so the simplest way is to delete the user and add it again with the new password.

The Firebase web `apiKey` is public by design (rules decide who can write), but a secret scanner such as gitleaks may flag it; add it to `.gitleaksignore` if so.

## Elo

Never stored: recomputed from every game in date order. Start 1200, K=40 for the first 10 games (provisional, shown with `?`), then K=20.

## Clock

Tap your own half to end your turn. Whoever taps first is Black (it starts White's clock). Presets from 1+0 to 90+30, custom times, handicap (different time per side), increment, sound/vibration, keeps the screen on, comes back paused after an accidental reload. The pause menu has: resume, restart, change time, **interrupt and go back to the home page**. Destructive actions ask for a second tap while a game is running. The clock does not record games.

## Local preview

From the repository root:

```sh
python3 -m http.server 8000
```

- On the computer: <http://localhost:8000/chess/>
- On a phone on the same Wi-Fi: `http://<computer IP>:8000/chess/` (IP from `ipconfig getifaddr en0`). Over plain http on a LAN address the browser disables the "keep screen on" lock and offline mode; everything else works.

Opening `index.html` directly as a file does not work: the page needs a server. The local preview uses the real database, so games published from it are live for everyone.

## Subdomain (optional)

Once pushed, the site is at `https://www.nicolavanoli.com/chess/`. For `scacchi.nicolavanoli.com`: create a new repo with the contents of this folder at its root, add a `CNAME` file with `scacchi.nicolavanoli.com`, enable Pages, and add a DNS `CNAME` record `scacchi` → `nicolavanoli.github.io`.
