import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        })
        console.log( "New user : ", newUser )
        res.status(201).json({ message: "User registered successfully", user: newUser })
    } catch (error) {
        res.status(500).json({ error: "Error registering user", message: error })
    }
}

export const login = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Find the user by email
        const user = await User.findOne({ $or: [{ email }, { username }] })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        // Compare the password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        res.status(200).json({ message: "Login successful", token, user: { id: user._id, username: user.username, email: user.email } })
    } catch (error) {
        res.status(500).json({ error: "Error logging in", message: error });
    }
}

export const authStatus = async (req, res) => {
    res.status(200).json({ message: "AUTH Status" })
}