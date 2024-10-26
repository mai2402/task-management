import { useForm } from "react-hook-form";
import { addTask } from "../features/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import taskYupValidation from "../helpers/taskYupValidation";
import ErrorMessage from "../ui/ErrorMessage";
import { getLoggedInUser } from "../features/userSlice";



function TaskForm() {
    const loggedInUser = useSelector(getLoggedInUser)
   const {register,handleSubmit,formState:{errors}}= useForm({
    resolver : yupResolver(taskYupValidation())
   })
   const dispatch = useDispatch()
   const navigate = useNavigate()
  console.log(loggedInUser.userID,"bsdsdv")
   function formSubmit (data){
        const taskData ={
            ...data,
            id : Date.now(),
            image: URL.createObjectURL(data.image[0]) || "",
            ownerId:loggedInUser.userID,
        }
             dispatch(addTask(taskData))
             navigate("/tasks")

    
   }
   return (
        <form onSubmit={handleSubmit(formSubmit)} className="bg-white p-6 rounded shadow-md" >
            <h2 className="text-xl font-bold mb-4">Create New Task</h2>

          
            <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700">Image:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    {...register("image")}
                    className="border border-gray-300 p-2 rounded w-full"
                />
                <ErrorMessage message={errors.image?.message} />
            </div>

           
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">Task Title:</label>
                <input
                    type="text"
                    id="title"
                    {...register("title")}
                    className="border border-gray-300 p-2 rounded w-full"
                />
                <ErrorMessage message={errors.title?.message} />
            </div>

          
            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700">Description:</label>
                <textarea
                    id="description"
                    {...register("description")}
                    className="border border-gray-300 p-2 rounded w-full"
                    rows="4"
                />
                <ErrorMessage message={errors.description?.message} />
            </div>

            <div className="mb-4">
                <label htmlFor="priority" className="block text-gray-700">Priority:</label>
                <select
                    id="priority"
                    {...register("priority")}
                    className="border border-gray-300 p-2 rounded w-full"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <ErrorMessage message={errors.priority?.message} />
            </div>

            <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700">State:</label>
                <select
                    id="state"
                    {...register("state")}
                    className="border border-gray-300 p-2 rounded w-full"
                >
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                <ErrorMessage message={errors.state?.message} />
                </div>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;
