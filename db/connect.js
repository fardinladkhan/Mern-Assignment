import mongoose from "mongoose" //import this library for connect the MongoDB 
import dotenv from 'dotenv' // Import dotenv library for loading environment variables from .env file


dotenv.config() // Load environment variables


const connectDB = (async (req , res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB) // connect the database
        // provide the refrence in the .env variable
        console.log(`MongoDB is Connected:`)
    } catch (error) {
        console.error(error.message) 
        process.exit(1)
    }
})()


export default connectDB