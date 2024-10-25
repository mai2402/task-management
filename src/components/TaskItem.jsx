import { FaTrash, FaEdit } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';

function TaskItem({ task }) {
    return (
        <li className="flex items-start space-x-4 p-4 border-b border-gray-200">
            <img 
                src={task.image}
                alt={task.title}
                className="w-12 h-12 rounded-full object-cover" 
            />
            <div className="flex-1">
                <h3 className="font-semibold text-lg">{task.title}</h3>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-sm text-gray-500">Priority: {task.priority}</p>
                <p className="text-sm text-gray-500">Status: {task.state}</p>
            </div>
            <div className="flex space-x-2">
              <Link to={`/tasks/edit/${task.id}`} >
               <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700" />
              </Link> 
                <FaTrash className="text-red-500 cursor-pointer hover:text-red-700" />
            </div>
        </li>
    );
}

export default TaskItem;
