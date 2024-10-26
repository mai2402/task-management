import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    tasks:[
     { id: 1, title: 'Task 1', description: 'Description for Task 1', priority: 'high', state: 'todo', ownerId: '123', employeeId: '3123'},
     { id: 2, title: 'Task 2', description: 'Description for Task 2', priority: 'medium', state: 'doing', ownerId: '123', employeeId: '3123' },
     { id: 3, title: 'Task 3', description: 'Description for Task 3', priority: 'low', state: 'done', ownerId: '3123', employeeId: '123'},
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