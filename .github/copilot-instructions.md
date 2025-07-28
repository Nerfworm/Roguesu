# Copilot Custom Instructions for Roguesu

## Project Overview
Roguesu is a minimalist webapp that creates a roguelike gamemode for osu! (the rhythm game). The user enters their osu! username, and the app fetches their profile data from the osu! API. It then generates a node-based map, where each node is a recommended beatmap based on the user's stats. Each level has requirements (accuracy, mods, etc.) and a health system. The player downloads the beatmap, plays it in their osu! client, and the app tracks progress via recent plays.

## Coding Style & General Guidance
- Prioritize minimalist, readable code.
- Use clear, descriptive variable and function names.
- Prefer functional components and hooks in React.
- Avoid unnecessary abstractions and boilerplate.
- Keep UI clean and simple; use Tailwind CSS for styling.
- Keep components small and focused.
- Use comments to explain non-obvious logic.
- Structure code for easy future expansion (e.g., session saving).
- Use async/await for API calls.
- Prefer simplicity over cleverness.
- **Linter/Formatter**: This project uses **ESLint** and **Prettier**. All code must pass these checks before being committed.

## Commit Message Style
All commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- Use types like `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, and `chore:`.
- Example: `feat: Add user input form for osu! username`

## Branching Strategy
- `main`: This branch is for stable, production-ready code only. Direct pushes are disabled.
- `develop`: This is the primary development branch. All feature branches are merged into `develop`.
- `feat/<feature-name>`: All new features should be developed in a dedicated feature branch created from `develop`.
- `fix/<issue-name>`: All bug fixes should be in a dedicated fix branch.

## Tech Stack
- Frontend: React + Vite + TypeScript
- Styling: Tailwind CSS
- State: React hooks or Zustand
- API: osu! public API (fetch directly from frontend)
- No backend or session saving yet; design code so these can be added later.

## Features to Focus On
- Home page: Input osu! username, fetch profile.
- Node-based map: Generate recommended beatmaps as nodes.
- Level requirements: Accuracy, mods, health system.
- Beatmap links: Provide direct links for download.
- Progress tracking: Use osu! API to fetch recent plays.

## Features to Avoid (for now)
- Do not implement session saving or persistent storage.
- Avoid complex backend logic.
- No authentication beyond osu! API requirements.

## Example File Structure
```
README.md
.github/
  copilot-instructions.md
.gitignore
.env                # Store secrets here, do NOT commit
src/
  components/      # Reusable React components
  pages/           # Page-level React components (routes)
  utils/           # Utility/helper functions
  hooks/           # Custom React hooks
  state/           # State management (e.g., Zustand stores)
  api/             # API functions (osu! and future backend)
  assets/          # Images, icons, etc.
  App.tsx
  main.tsx
  index.css
public/
  # Static files (favicon, manifest, etc.)
backend/           # (Add later) Backend code, e.g., Express server
  controllers/
  models/
  routes/
  utils/
  index.ts
```

## References
- [osu! API docs](https://osu.ppy.sh/docs/index.html)
- [Copilot custom instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- [Copilot customization](https://code.visualstudio.com/docs/copilot/copilot-customization)