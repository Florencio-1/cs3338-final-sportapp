# cs3338-final-sportapp

CS3338 Final Project – **SportHub**, a multi-sport scores & favorites tracker.

## Course Info

- Course: **CS3338 – Software Engineering Tools**
- Instructor: 
- Semester: Fall 2025

## Project Overview

SportHub is a web-based sports application that lets users:

- View upcoming and recent games for multiple sports (NBA, NFL, soccer, MLB).
- Filter games by **sport** and **date**.
- Create a fan account and mark teams as **favorites**.
- View a **“My Favorites”** page showing upcoming games for their favorite teams.
- (Admin) Manage teams and games in the schedule.

The main focus of this project is planning, documentation, and tooling
(GitHub, Jira, TestRail, Docker, LaTeX).

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
- Other source folders (frontend/backend code) as the implementation is developed.

## How to View the Documents

1. Clone this repository from GitHub.
2. Open the `docs/` folder.
3. Compile the `.tex` files (for example with `pdflatex`) to generate the PDFs
   for SRS, SDD, User Manual, Design Spec, and Snapshot Objectives.

## Snapshots

The project is organized into four snapshots:

1. **Snapshot 1 – Start:** initial architecture, basic schedule view, first drafts of all docs.
2. **Snapshot 2 – Checkpoint 1:** favorites feature and updated SRS/SDD/User Manual.
3. **Snapshot 3 – Checkpoint 2:** filters and multi-sport support, more tests and docs.
4. **Snapshot 4 – Final:** polishing, final documentation, and future work.


### Jira

Sprint board for SportHub:

https://calstatela-team4.atlassian.net/jira/software/projects/ST/boards/68?sprintStarted=true

**TestRail project / runs:**  
  <https://cs3338grooup4.testrail.io/index.php?/dashboard>

## Team 4

- **Miguel** – SDD lead, Jira setup  
- **Oscar** – SRS lead, backend structure  
- **Florencio** – User Manual & frontend UI  
- **Jesus** – Design Spec & TestRail
