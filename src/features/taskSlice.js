import { createSlice } from "@reduxjs/toolkit";


const initialState ={
     tasks: [
          { id: 1, title: 'Design the homepage', description: 'Create a mockup for the homepage layout.', priority: 'high', state: 'todo', ownerId: '123', employeeId: '4567' },
          { id: 2, title: 'Fix the login bug', description: 'Resolve issues with the user login process.', priority: 'medium', state: 'doing', ownerId: '3123', employeeId: '8910' },
          { id: 3, title: 'Update the API documentation', description: 'Revise the API docs for the latest endpoints.', priority: 'low', state: 'done', ownerId: '4567', employeeId: '1112' },
          { id: 4, title: 'Conduct user testing', description: 'Gather feedback from users on the new features.', priority: 'high', state: 'todo', ownerId: '8910', employeeId: '123' },
          { id: 5, title: 'Develop the checkout process', description: 'Implement the shopping cart and checkout functionalities.', priority: 'high', state: 'doing', ownerId: '123', employeeId: '3123' },
          { id: 6, title: 'Optimize website performance', description: 'Improve loading times for the homepage and product pages.', priority: 'medium', state: 'todo', ownerId: '4567', employeeId: '8910' },
          { id: 7, title: 'Set up database schema', description: 'Design and implement the database structure.', priority: 'high', state: 'done', ownerId: '8910', employeeId: '1112' },
          { id: 8, title: 'Prepare for the project launch', description: 'Create launch plan and marketing materials.', priority: 'medium', state: 'doing', ownerId: '123', employeeId: '4567' },
          { id: 9, title: 'Create user profiles', description: 'Implement user profiles with settings and preferences.', priority: 'low', state: 'todo', ownerId: '3123', employeeId: '123' },
          { id: 10, title: 'Write unit tests', description: 'Develop unit tests for the existing functions.', priority: 'medium', state: 'doing', ownerId: '4567', employeeId: '8910' },
          { id: 11, title: 'Launch the beta version', description: 'Prepare and launch the beta version for users.', priority: 'high', state: 'done', ownerId: '8910', employeeId: '123' },
          { id: 12, title: 'Monitor server uptime', description: 'Ensure the server remains operational with minimal downtime.', priority: 'medium', state: 'todo', ownerId: '123', employeeId: '4567' },
          { id: 13, title: 'Implement user authentication', description: 'Set up secure login and registration processes.', priority: 'high', state: 'doing', ownerId: '3123', employeeId: '1112' },
          { id: 14, title: 'Design promotional banners', description: 'Create eye-catching banners for the website.', priority: 'low', state: 'todo', ownerId: '4567', employeeId: '8910' },
          { id: 15, title: 'Conduct team meeting', description: 'Review progress and set goals for the next sprint.', priority: 'medium', state: 'done', ownerId: '8910', employeeId: '123' },
          { id: 16, title: 'Implement SEO strategies', description: 'Optimize website content for better search rankings.', priority: 'high', state: 'doing', ownerId: '123', employeeId: '4567' },
          { id: 17, title: 'Create a user feedback form', description: 'Design and implement a form to gather user feedback.', priority: 'medium', state: 'todo', ownerId: '3123', employeeId: '1112' },
          { id: 18, title: 'Integrate social media sharing', description: 'Allow users to share content on social media platforms.', priority: 'low', state: 'done', ownerId: '4567', employeeId: '8910' },
          { id: 19, title: 'Perform code review', description: 'Review code submitted by the team for quality assurance.', priority: 'medium', state: 'doing', ownerId: '8910', employeeId: '123' },
          { id: 20, title: 'Prepare financial report', description: 'Compile data for the quarterly financial report.', priority: 'high', state: 'todo', ownerId: '123', employeeId: '3123' }
      ],

}

const taskSlice = createSlice({

     name:"tasks",
     initialState,
     reducers:{
          setTasks(state,action){
              const {ownerId,tasks} = action.payload;
              state.tasksByUser[ownerId]=  tasks;
          },
          addTask(state, action){
                 state.tasks.push(action.payload)
        },
        deleteTask(state,action){
          state.tasks = state.tasks.filter((task)=> task.id !==  action.payload)
        },
        editTask(state,action){
          const {id, updatedTask} = action.payload;
          const taskIndex = state.tasks.findIndex((task)=>task.id === id)
          if (taskIndex !== -1){
               state.tasks[taskIndex] ={...state.tasks[taskIndex], ...updatedTask}
          }
        }

     }


})
export const selectAllTasks = state => state.tasks.tasks;
export const selectTaskById = id => state => state.tasks.tasks.find(task => task.id === id);
export const getEmployeeRole = (loggedInID, taskID) => state => (state.tasks.tasks.find(task => task.id === taskID)?.employeeId) === loggedInID;
export const {loading,deleteTask,addTask,editTask, setRole} = taskSlice.actions;

export default taskSlice.reducer;