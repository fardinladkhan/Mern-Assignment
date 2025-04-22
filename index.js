import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import taskRouter from './router/taskRouter.js'



const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/api/v1/assign',taskRouter)
app.listen(process.env.PORT || 5000, console.log(`server is open ${process.env.PORT || 5000}`) )