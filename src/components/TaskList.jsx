import { useSelector } from "react-redux"
import TaskItem from "./TaskItem"
import { selectAllTasks } from "../features/taskslice";
import { getLoggedInUser } from "../features/userSlice";



function TaskList({searchQuery,priorityFilter,statusFilter}) {
    const tasksSelector = useSelector(selectAllTasks)
    const loggedInUser = useSelector(getLoggedInUser);
    
    const tasks = tasksSelector.filter((task)=>{
       const authorized = task.userId === loggedInUser.userID;
       const search= task.title?.toLowerCase().trim().includes(searchQuery.toLowerCase().trim());
       // in case there is a filter to be applied
       if (!!priorityFilter || !!statusFilter) {
        const matchedPriorityFilter = priorityFilter && priorityFilter === task.priority;
        const matchedStatusFilter =  statusFilter && statusFilter === task.state;
        return (authorized && search && (matchedStatusFilter || matchedPriorityFilter)) 
       }
       return (authorized && search);
    }
    )
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-darkBlue text-2xl font-bold mb-4">{loggedInUser.username.charAt(0).toUpperCase() + loggedInUser.username.slice(1).toLowerCase()}'s  Task List</h2>
        <ul className="space-y-4">
            {tasksSelector.length > 0 ? (
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
