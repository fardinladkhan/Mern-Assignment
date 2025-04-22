import Task from '../model/task.js'

export const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch (error) {
        res.status(400).json({message:error})
    }
}

export const tasklist = async (req, res) => {
    try {
        const task = await Task.find()
        res.status(201).json(task)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const task = async (req,res) => {
    try{
      const task = await Task.findById(req.params.id)
      res.status(201).json({task: task})
    }catch (error){
      res.status(400).json({message: error.message})
    }
  }



export const updateTask = async (req,res) => {
    try{
      const task = await Task.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true })
      res.status(201).json({task: task})
    }catch (error){
      res.status(400).json({message: error.message})
    }
  }
  
  export const deleteTask = async (req,res) => {
    try{
      const task = await Task.findByIdAndDelete(req.params.id,req.body,{ new: true, runValidators: true })
      res.status(201).json({task: task})
    }catch (error){
      res.status(400).json({message: error.message})
    }
  }