# Roguesu

Roguesu is a minimalist webapp that creates a roguelike gamemode for osu! (the rhythm game). The app generates a node-based map of recommended beatmaps tailored to each user's osu! profile, with level requirements and a health system. Progress is tracked via recent plays on the osu! API.

## Features
- Enter your osu! username to fetch your profile
- Node-based map: Each node is a recommended beatmap based on your stats
- Level requirements: Accuracy, mods, health system
- Direct beatmap download links
- Progress tracking via osu! API recent plays

## Tech Stack
- Frontend: React + Vite + TypeScript
- Styling: Tailwind CSS
- State: React hooks or Zustand
- API: osu! public API (fetch directly from frontend)
- No backend yet; designed for easy future expansion

## Getting Started
1. Clone the repository:
   ```sh
   git clone https://github.com/Nerfworm/Roguesu.git
   ```
2. Install dependencies:
   ```sh
   cd Roguesu
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser at `http://localhost:5173` (default Vite port)

## Development Workflow
- Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages
- Use feature branches for new features (`feat/<feature-name>`) and fix branches for bug fixes (`fix/<issue-name>`)
- All code must pass ESLint and Prettier checks before being committed

## Future Plans
- Add backend for session saving, leaderboards, and multiplayer features
- Expand node-based map logic and UI
- Add more advanced recommendation algorithms