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
    res.status(200).json({ message: "login page" })
}

export const authStatus = async (req, res) => {
    res.status(200).json({ message: "AUTH Status" })
}