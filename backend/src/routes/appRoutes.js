import { Router } from "express";
import { homePage, addNote, updateNote, deleteNote } from "../controllers/appController.js";

const router = Router()

router.get("/", homePage)
router.post("/", addNote)
router.put("/", updateNote)
router.delete("/", deleteNote)

export default router;