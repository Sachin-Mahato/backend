import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// DB is another continent
const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
       console.log(`mongoDB connect !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error)  
        process.exit(1)
    }
}

export default connectDB;