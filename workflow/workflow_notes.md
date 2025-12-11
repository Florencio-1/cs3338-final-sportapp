## Snapshot 3 – Favorites workflow

- Run backend locally (dev): `npm install` then `npm start` inside `backend/` (serves `/games` on port 4000 with CORS; extend with favorites endpoints when ready).
- Run frontend locally (static): open `frontend/index.html` or host via nginx container from `docker/Dockerfile.frontend` (exposes port 80). Favorites are stored client-side for this snapshot.
- Docker builds: `docker build -f docker/Dockerfile.backend -t sporthub-backend .` and `docker build -f docker/Dockerfile.frontend -t sporthub-frontend .`.
- Manual tests: execute TestRail cases covering favorite/unfavorite and My Favorites view; add evidence to the Snapshot 3 report in `testrail/`.
- Documentation updates: reflect Favorites feature in snapshot objectives, SRS, SDD, design spec, and user manual.
