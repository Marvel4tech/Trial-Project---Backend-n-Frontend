import { Router } from "express";
import { homePage, addNote, updateNote, deleteNote } from "../controllers/appController.js";

const router = Router()

router.get("/", homePage)
router.post("/", addNote)
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)

export default router;