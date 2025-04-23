import Task from '../model/task.js' // import task form task.js in the model folder


// Export the createTask function that takes request and response objects as parameters
export const createTask = async (req,res) => {
    try {
      //Create a new task using the request body data
        const task = await Task.create(req.body) 
        res.status(201).json(task) // all the task as a json format
    } catch (error) {
        res.status(400).json({message:error}) // If database query fails, return 500 status
    }
}


// Export the tasklist function that takes request and response objects as parameters
export const tasklist = async (req, res) => {
    try {
        const task = await Task.find()  // Use the Task model to find all tasks in the database
        res.status(201).json(task) // Return all tasks with 200 status code
    } catch (error) {
        res.status(400).json({message: error.message}) // If database query fails, return 500 status
    }
}



// Export the task function that takes request and response objects as parameters
export const task = async (req,res) => {
    try{
      const task = await Task.findById(req.params.id) // Find a task by ID using the ID parameter
      res.status(201).json({task: task}) // Return the found task with 200 status code
    }catch (error){
      res.status(400).json({message: error.message}) // If database query fails, return 500 status
    }
  }



export const updateTask = async (req,res) => {
    try{

      // new: true returns the updated document of the original
    // runValidators: true ensures update operation validates in schema
      const task = await Task.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true })
      res.status(201).json({task: task}) // Return the updated task with 200 status code
    }catch (error){
      res.status(400).json({message: error.message}) // If database query fails, return 500 status
    }
  }
  
  export const deleteTask = async (req,res) => {
    try{
      // new: true returns the updated document of the original
    // runValidators: true ensures update operation validates in schema
      const task = await Task.findByIdAndDelete(req.params.id,req.body,{ new: true, runValidators: true })  // Find and delete a task by ID using the ID parameter
      res.status(201).json({task: task}) //Return the deleted task with 200 status code
    }catch (error){
      res.status(400).json({message: error.message}) // If database query fails, return 500 status
    }
  }