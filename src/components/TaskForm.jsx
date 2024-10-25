



function TaskForm() {
   return (
        <form className="bg-white p-6 rounded shadow-md" >
            <h2 className="text-xl font-bold mb-4">Create New Task</h2>

          
            <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700">Image:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    
                    className="border border-gray-300 p-2 rounded w-full"
                />
            </div>

           
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">Task Title:</label>
                <input
                    type="text"
                    id="title"
                    
                    required
                    className="border border-gray-300 p-2 rounded w-full"
                />
            </div>

          
            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700">Description:</label>
                <textarea
                    id="description"
                    
                    required
                    className="border border-gray-300 p-2 rounded w-full"
                    rows="4"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="priority" className="block text-gray-700">Priority:</label>
                <select
                    id="priority"
                   
                    className="border border-gray-300 p-2 rounded w-full"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700">State:</label>
                <select
                    id="state"
                   
                    className="border border-gray-300 p-2 rounded w-full"
                >
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
            </div>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;
