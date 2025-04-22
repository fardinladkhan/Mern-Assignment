import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, enum: ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"] }
  })

const Task = mongoose.model('Task', TaskSchema)
  
export default Task