import express from "express"
import { getkhogaPage } from "../controllers/khogaController.js"

const router = express.Router()

router.get("/khoga", getkhogaPage)

export default router