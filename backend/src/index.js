import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/appRoutes.js"
import auth from "./routes/authRoutes.js"
import dbConnection from "./config/dbConnect.js"

dotenv.config()
dbConnection()

const app = express()

const corsOptions = {
    origin: "http://localhost:3001",
    credentials: true,
}
app.use(cors(corsOptions))
app.use(express.json())

app.use("/api", router)
app.use("/api", auth)

const PORT = process.env.PORT || 3001
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`)
})