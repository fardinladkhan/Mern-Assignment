import express from 'express' //import express for creating server
import cors from 'cors' // Import cors library for handling cross-origin resource sharing
import dotenv from 'dotenv' // Import dotenv library for loading environment variables from .env file
import connectDB from './db/connect.js' // Import connectDB function from db/connect.js file
import taskRouter from './router/taskRouter.js' // Import the taskRouter for use task routes



const app = express() // Create an instance of the express application
dotenv.config() // implement Load environment variables

// Middleware
app.use(cors()) // Use cors middleware to allow all routes requests
app.use(express.json()) // Use express.json middleware to JSON in requests

//declare routes
app.use('/api/v1/assign',taskRouter) // render the taskRouter module

// starting server
app.listen(process.env.PORT || 5000, console.log(`server is open ${process.env.PORT || 5000}`) )