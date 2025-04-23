import mongoose from "mongoose" // // Import mongoose library for load mongoose Schema 


// Define the user schema using mongoose.Schema
const TaskSchema = new mongoose.Schema({

    // title field definition
    title: { type: String, required: true },
    // author field definition
    author: { type: String, required: true },
    // publishedYear field definition
    publishedYear: { type: Number, required: true },
    // genre field definition
    genre: { type: String, enum: ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"] }
  })


  // 'Task' is the collection name in MongoDB
const Task = mongoose.model('Task', TaskSchema)
// Create and export the User model using the schema
export default Task