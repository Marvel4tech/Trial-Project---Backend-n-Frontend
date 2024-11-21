export const register = async (req, res) => {
    res.status(200).json({ message: "Welcome to register page" })
}

export const login = async (req, res) => {
    res.status(200).json({ message: "login page" })
}

export const authStatus = async (req, res) => {
    res.status(200).json({ message: "AUTH Status" })
}