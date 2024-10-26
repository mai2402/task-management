import { useSelector } from "react-redux"
import { getLoggedInUser } from "../features/userSlice"
import useFilteredTasks from "../hooks/useFilteredTasks"
import TaskItem from "../components/TaskItem"

function Home() {
    const user = useSelector(getLoggedInUser)
    const EMPTY_FLAG = "";
    const tasks = useFilteredTasks(EMPTY_FLAG,EMPTY_FLAG,"todo")

    return (
        <div>
         <p className=" text-darkBlue text-4xl p-8 font-bold">Welcome, {user.username}</p>
           <h2 className="text-darkBlue text-2xl p-8 font-bold">Your To Do Tasks</h2>
         <div>
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
            
        </div>
    )
}

export default Home

