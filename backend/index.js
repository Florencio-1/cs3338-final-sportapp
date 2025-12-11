import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Fancy welcome route for the root URL
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>SportHub – Multi-Sport Scores & Favorites</title>
      <style>
        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: linear-gradient(135deg, #111827, #1f2937);
          color: #f9fafb;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        .card {
          background: rgba(15, 23, 42, 0.95);
          border-radius: 16px;
          padding: 32px 40px;
          max-width: 650px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          text-align: center;
          border: 1px solid rgba(148, 163, 184, 0.4);
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #38bdf8;
        }
        h2 {
          font-size: 1.1rem;
          font-weight: 500;
          margin-top: 0;
          margin-bottom: 1.5rem;
          color: #e5e7eb;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .tag {
          font-size: 0.85rem;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(55, 65, 81, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.7);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .tag span.emoji {
          font-size: 1.1rem;
        }
        p {
          font-size: 0.95rem;
          color: #d1d5db;
          margin-bottom: 1.2rem;
        }
        .btn-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 0.5rem;
        }
        a.btn {
          text-decoration: none;
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid transparent;
          transition: all 0.16s ease;
          display: inline-block;
        }
        a.btn-primary {
          background: #22c55e;
          color: #022c22;
        }
        a.btn-primary:hover {
          background: #16a34a;
        }
        a.btn-ghost {
          background: transparent;
          color: #e5e7eb;
          border-color: rgba(148, 163, 184, 0.7);
        }
        a.btn-ghost:hover {
          background: rgba(31, 41, 55, 0.9);
        }
        .footer {
          margin-top: 1.5rem;
          font-size: 0.8rem;
          color: #9ca3af;
        }
        .footer span {
          color: #38bdf8;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Welcome to <span style="color:#22c55e;">SportHub</span> 🏆</h1>
        <h2>Your hub for NBA, NFL, Soccer & MLB matchups</h2>

        <div class="tags">
          <div class="tag"><span class="emoji">🏀</span><span>NBA games & schedules</span></div>
          <div class="tag"><span class="emoji">🏈</span><span>NFL matchups</span></div>
          <div class="tag"><span class="emoji">⚽</span><span>Soccer fixtures</span></div>
          <div class="tag"><span class="emoji">⚾</span><span>MLB series</span></div>
        </div>

        <p>
          SportHub lets fans quickly see upcoming games and keep track of the
          matchups that matter most across multiple leagues.
        </p>

        <div class="btn-row">
          <a href="/games" class="btn btn-primary">View sample games API</a>
          <a href="http://localhost:3000" class="btn btn-ghost">Open frontend (port 3000)</a>
        </div>

        <div class="footer">
          Backend: <span>http://localhost:4000</span> · Frontend: <span>http://localhost:3000</span>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Hard-coded games for Snapshot 2
const games = [
  {
    id: 1,
    sport: "NBA",
    home: "Lakers",
    away: "Clippers",
    date: "2025-01-10",
    time: "19:00"
  },
  {
    id: 2,
    sport: "NFL",
    home: "Rams",
    away: "49ers",
    date: "2025-01-12",
    time: "13:25"
  },
  {
    id: 3,
    sport: "MLB",
    home: "Dodgers",
    away: "Giants",
    date: "2025-04-03",
    time: "19:10"
  },
  {
    id: 4,
    sport: "NBA",
    home: "Celtics",
    away: "Bulls",
    date: "2025-01-11",
    time: "18:30"
  }
];

// GET /games : return all games (later you can add filters)
app.get("/games", (req, res) => {
  res.json(games);
});

app.listen(PORT, () => {
  console.log(`SportHub backend running on http://localhost:${PORT}`);
});
