import express from "express";
import * as NoteController from "../controller/note.js";
import { verifyToken } from "../middleware/verifyAuth.js";

const router = express.Router();

router.post('/create', verifyToken, NoteController.createNote);
router.get('/', verifyToken, NoteController.getUserNote);
router.get('/:noteId', verifyToken, NoteController.getASingleNote);  //params must begin with a colon
router.delete("/:noteId", verifyToken, NoteController.deleteANote);  //delete a note

export default router;