import mongoose from "mongoose"
import dotenv from 'dotenv'


dotenv.config()


const connectDB = (async (req , res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB)
        console.log(`MongoDB is Connected:`)
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
})()


export default connectDB