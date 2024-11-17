import express from "express"
import dotenv from "dotenv"
import router from "./routes/appRoutes.js"
import dbConnection from "./config/dbConnect.js"

dotenv.config()
dbConnection()


const app = express()
app.use(express.json())

app.use("/api", router)

const PORT = process.env.PORT || 3001
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`)
})