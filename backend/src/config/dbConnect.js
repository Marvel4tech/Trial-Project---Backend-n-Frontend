import { connect } from "mongoose"

const dbConnection = async () => {
    try {
        const db = await connect(process.env.CONNECTION_STRING)
        console.log(`Database is connected : ${db.connection.host}, ${db.connection.name}`)
    } catch (error) {
        console.log("db failed to connect")
    }
}

export default dbConnection;