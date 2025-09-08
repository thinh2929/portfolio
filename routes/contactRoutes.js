import express from "express"
import { getContactPage } from "../controllers/contactController.js"

const route = express.Router()

route.get("/contact", getContactPage)

export default route