import { FaEdit, FaTrash } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { deleteTask } from "../features/taskslice"



function TaskItem({task}) {
       const dispatch = useDispatch()

     function handleDelete (){
        confirm("Do you want to delete this task")
        dispatch(deleteTask(task.id))
     }

    return (
        <li className="flex justify-between items-center p-4 mb-2 bg-white rounded shadow-md hover:shadow-lg transition-shadow">
        <div>
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-sm text-gray-500">Priority: <span className="font-medium">{task.priority}</span></p>
            <p className="text-sm text-gray-500">Status: <span className="font-medium">{task.state}</span></p>
        </div>
        <div className="flex space-x-2">
            <button className="text-blue-500 hover:text-blue-700">
                <FaEdit size={20} />
            </button>
            <button className="text-red-500 hover:text-red-700">
                <FaTrash onClick={handleDelete}  size={20} />
            </button>
        </div>
    </li>
    )
}

export default TaskItem
