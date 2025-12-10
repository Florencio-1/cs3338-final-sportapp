import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

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
