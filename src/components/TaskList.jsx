
import TaskItem from "./TaskItem"
import useFilteredTasks from "../hooks/useFilteredTasks";
import { getLoggedInUser } from "../features/userSlice";
import { useSelector } from "react-redux";


function TaskList({searchQuery,priorityFilter,statusFilter}) {
    const tasks = useFilteredTasks(searchQuery, priorityFilter, statusFilter);
    const loggedInUser = useSelector(getLoggedInUser);
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-darkBlue text-2xl font-bold mb-4">{loggedInUser.username.charAt(0).toUpperCase() + loggedInUser.username.slice(1).toLowerCase()}'s  Task List</h2>
        <ul className="space-y-4">
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <TaskItem task={task} key={task.id} />
                ))
            ) : (
                <li className="text-gray-500 text-center">No tasks available</li>
            )}
        </ul>
    </div>
    )
}

export default TaskList
