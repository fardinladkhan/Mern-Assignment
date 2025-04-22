import {Router} from 'express'
import { createTask, tasklist,task,deleteTask,updateTask} from '../controller/taskController.js'

const router = Router()

router.route('/').get(tasklist).post(createTask)
router.route('/:id').get(task).patch(updateTask).delete(deleteTask)


export default router