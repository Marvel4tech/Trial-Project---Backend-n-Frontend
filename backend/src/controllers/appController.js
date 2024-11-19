import Note from "../models/noteModel.js"

export const homePage = async (req, res) => {
    try {
        const allNotes = await Note.find();
        res.status(200).json(allNotes)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const addNote = async (req, res) => {
    const { text } = req.body
    try {
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
    const { id } = req.params;
    const { text } = req.body;
    try {
        const updatedNote = await Note.findByIdAndUpdate(id, { text }, { new: true })
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" })
        }
        res.status(200).json({ message: "Note is updated successfully", updatedNote })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "An error occurred while updating the note" })
    }
}

export const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedNote = await Note.findByIdAndDelete(id)
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" })
        }
        res.status(200).json({ message: "Note is deleted successfully", deletedNote })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "failed to delete", error })
    }
}