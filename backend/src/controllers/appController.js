import Note from "../models/noteModel.js"

export const homePage = async (req, res) => {
    try {
        console.log("Welcome to homepage")
        res.status(200).json({ message: "Welcome to homepage" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const addNote = async (req, res) => {
    try {
        const { text } = req.body

        //METHOD 2 (TO SAVE DOCUMENT TO DATABASE ALSO)
        //const newNote = new Note({ text })
        //await newNote.save()

        const newNote = await Note.create({ text })
        res.status(200).json({ message: "Note is added successfully", note: newNote })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const updateNote = async (req, res) => {
    try {
        res.status(200).json({ message: "Note is updated successfully" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const deleteNote = async (req, res) => {
    try {
        res.status(200).json({ message: "Note is deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}