import {Router} from 'express' // Import express library for creating a router
import { createTask, tasklist,task,deleteTask,updateTask} from '../controller/taskController.js'

const router = Router() // Create a new router instance

router.route('/').get(tasklist).post(createTask)
router.route('/:id').get(task).patch(updateTask).delete(deleteTask)


// Export the router instance for use in the index.js main file
export default router