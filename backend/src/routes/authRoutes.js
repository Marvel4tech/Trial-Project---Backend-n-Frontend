import { Router } from "express"
import { authStatus, login, register } from "../controllers/authController.js";

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/authStatus", authStatus)

export default router;