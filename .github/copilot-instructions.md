# Copilot Instructions for AI Agents

## Project Overview
This is a personal web portfolio project built with Express.js. The codebase is organized for clarity and modularity, focusing on routing and controller separation.

## Architecture & Structure
- **Entry Point:** `index.js` initializes the Express app, sets up static file serving, and registers routes.
- **Routes:**
  - Defined in `routes/` (`homeRoutes.js`, `contactRoutes.js`).
  - Each route file is imported and registered in `index.js`.
- **Controllers:**
  - Business logic for each route is in `controllers/` (`homeController.js`, `contactController.js`).
- **Static Files:**
  - Served from the `public/` directory (create if missing).

## Patterns & Conventions
- **Route Registration:**
  - Use `app.get("/route", routeHandler)` in `index.js`.
  - Avoid duplicate route definitions (see `/contact` example).
- **Controller Usage:**
  - Route files should import and delegate to controller functions.
- **Module Aliases:**
  - Uses `module-alias/register.js` for path aliasing (ensure correct config if using aliases).
- **Language:**
  - ES Modules syntax (`import ... from ...`).

## Developer Workflows
- **Start Server:**
  - Run with `node index.js` or `npm start` (if a start script is defined in `package.json`).
- **Debugging:**
  - Console logs are used for basic debugging (see `index.js`).
- **No Tests:**
  - No test framework or scripts are present.

## Integration Points
- **Express.js:**
  - Main dependency for server and routing.
- **No Database:**
  - No database integration detected.
- **No Frontend Framework:**
  - Static assets only; no React/Vue/Angular.

## Examples
- Registering a new route:
  ```js
  // In routes/aboutRoutes.js
  import express from "express";
  import { aboutController } from "../controllers/aboutController.js";
  const router = express.Router();
  router.get("/about", aboutController);
  export default router;
  // In index.js
  import aboutRoutes from "./routes/aboutRoutes.js";
  app.get("/about", aboutRoutes);
  ```

## Key Files
- `index.js`: App entry, route registration
- `routes/`: Route definitions
- `controllers/`: Route logic
- `public/`: Static assets

---

For questions or unclear patterns, ask for clarification or examples from the user.
