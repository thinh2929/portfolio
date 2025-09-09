import express from "express";
import { getProjectPage } from "../controllers/projectController.js";
const router = express.Router();

router.get("/project", getProjectPage);

export default router;