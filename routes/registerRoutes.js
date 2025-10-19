import express from "express"
import { getRegisterPage } from "../controllers/registerController.js"
const router = express.Router()

router.get("/register", getRegisterPage)

export default router