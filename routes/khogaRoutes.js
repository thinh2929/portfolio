import express from "express"
import { getkhogaPage } from "../controllers/khogaController.js"

const router = express.Router()

router.get("/khogamixi", getkhogaPage)

export default router