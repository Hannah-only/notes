import Note from "../model/note.model.js";
import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";


export const createNote = async (req, res, next) => {
    const userId = req.user.id;
    console.log(userId);
    const {title, description, imageUrl, tags } =  req.body;
    try {
        if (!title && !description && !imageUrl &&!tags)
       { 
        throw createHttpError(400, "from field cannot be empty")
    }

    const note = await Note.create({
        userId: userId,
        title,
        description,
        imageUrl,
        tags,
    });
    res.status(201).json(note);

    } catch (error) {
        next(error);
    }
};


//get user note

export const getUserNote = async(req, res, next) => {
    const userId = req.user.id;
    try {
        const note = await Note.find({userId: userId}).sort({_id: -1});
    res.status(200).json(note);
    } catch (error) {
        next(error)
    }
};

// get a single note/document
export const getASingleNote = async(req, res, next) => {
    const noteId = req.params.noteId //find note by its id
    const userId = req.user.id;  //find the user that created the note
    try {
        if(!isValidObjectId(noteId)) {
            throw createHttpError(400, "invalid note id");
        }
        const note = await Note.findById(noteId);
        if (!note.userId.equals(userId)) {
            throw createHttpError(401, "You cannot view this note");
        }
        if(!note) {
            throw createHttpError(404, "Note not found");
        }
        res.status(200).json(note);
    } catch (error) {
        
    }
    };
    
    export const deleteANote = async(req, res, next) => {
        const noteId = req.params.noteId;
        const userId = req.user.id;
        try {
            if (!isValidObjectId(noteId)) {
                throw createHttpError(400, "Invalid note id");
            }
    
            const note = await note.findByIdAndDelete(noteId);
            if (!note.userId.equals(userId)) {
                throw createHttpError(401, "You cannot view this note");
            }
            if (!note) {
                throw createHttpError(404, "Note not found");
            }
            res.status(200).send("Note deleted successfully");
        } catch (error) {
            next(error);
        }   
    };
    
    export const updateANote = async(req, res, next) => {
        const noteId = req.params.noteId;
        const userId = req.user.id;
        try {
            if (!isValidObjectId(noteId)) {
                throw createHttpError(400, "invalid note id");
            }
            const note = await note.findById(noteId);
            if (!note.userId.equals(userId)) {
                throw createHttpError(401, "You cannot view this note");
            } 
            if (!note) {
                throw createHttpError(404, "Note not found");
            }
            
            note.title = title;
            note.description = description;
            note.imageUrl = imageUrl;
            note.tags = tags;
            
        } catch (error) {
            next(error);
            
        }
    }
