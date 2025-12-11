# cs3338-final-sportapp

CS3338 Final Project – **SportHub**, a multi-sport scores & favorites tracker.

---

## Course Info

- Course: **CS3338 – Software Engineering Tools**
- Instructor: Mohamed Saleh
- Semester: **Fall 2025**
- Team: **Team 4**

---

## Jira & TestRail Links

- **Jira Sprint Board (SportHub):**  
  <https://calstatela-team4.atlassian.net/jira/software/projects/ST/boards/68?sprintStarted=true>

- **TestRail Project / Runs:**  
  <https://cs3338grooup4.testrail.io/index.php?/dashboard>

---

## Project Overview

**SportHub** is a web-based sports application that helps fans track games across
multiple sports from a single place. The app lets users:

- View upcoming and recent games for multiple sports (NBA, NFL, soccer, MLB).
- Filter games by **sport** and **date**.
- Create a fan account and mark teams as **favorites**.
- View a **My Favorites** page showing upcoming games for their favorite teams.
- (Admin – planned) Manage teams and games in the schedule.

The project emphasizes planning, documentation, and tooling:
**GitHub, Jira, TestRail, Docker, and LaTeX**, as required by CS3338.

---

## Formal Objectives

1. **Unified Schedule View**  
   Provide a single web interface where users can view schedules for multiple
   sports without switching between different apps or websites.

2. **Personalized Favorites**  
   Let fans mark teams as favorites and quickly see upcoming games for those
   teams on a dedicated **My Favorites** page.

3. **Full Toolchain Demonstration**  
   Use professional tools (GitHub, Jira, TestRail, Docker, LaTeX) to model a
   small but complete software engineering workflow: requirements, design,
   implementation, testing, and deployment.

4. **Extendable Architecture**  
   Design the system so that live sports APIs, richer stats, or notifications
   can be added later without rewriting the whole app.

---

## Why SportHub Matters

There are many sports sources online, but casual fans often just want to know:

> *“When do my teams play next?”*

SportHub:

- Centralizes schedules from multiple sports into one simple interface.
- Lets users focus on **their** teams via favorites instead of browsing full
  league schedules.
- Serves as a teaching example of how to design, document, test, and deploy a
  small web system using modern tools and good engineering practices.

---

## Tech Stack & Architecture (High-Level)

- **Frontend:** React single-page application (Home / All Games, Teams, My Favorites, Login/Register).
- **Backend:** Node.js + Express REST API.
- **Database:** PostgreSQL (users, teams, games, favorites).
- **Containerization:** `docker-compose.yml` managing:
  - `frontend` service
  - `backend` service
  - `db` service (PostgreSQL)
  - optional `nginx` reverse proxy
- **Documentation:** All main documents written in LaTeX and stored under `docs/`.

---

## Repository Contents

- `docs/`
  - `SRS.tex` – Software Requirements Specification  
  - `SDD.tex` – Software Design Document  
  - `user_manual.tex` – User Manual  
  - `design_spec.tex` – Design Specification  
  - `snapshot_objectives.tex` – Snapshot goals and reflections
- `testrail/`
  - Snapshot 2, 3, and 4 test run reports (PDF exports from TestRail)
- `jira/`
  - Screenshots/exports of the Jira board, backlog, and sprint
- `docker-compose.yml`
  - Defines the services (frontend, backend, database, nginx) used by SportHub
- Application source folders (e.g., `frontend/`, `backend/`).

---

## How to Download and Run SportHub

### Option 1 – Using Docker (recommended)

**Prerequisites**

- Docker Desktop (Windows/macOS) or Docker Engine (Linux).
- Docker Compose support.

**Steps**

1. Clone the repository:

   ```bash
   git clone https://github.com/uchiha1121/cs3338-final-sportapp.git
   cd cs3338-final-sportapp
