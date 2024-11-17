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
        res.status(200).json({ message: "Note is added successfully" })
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