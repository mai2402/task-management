import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    tasks:[
     { id: 1, title: 'Task 1', description: 'Description for Task 1', priority: 'High', state: 'todo' },
     { id: 2, title: 'Task 2', description: 'Description for Task 2', priority: 'Medium', state: 'doing' },
     { id: 3, title: 'Task 3', description: 'Description for Task 3', priority: 'Low', state: 'done'},
],

    loading: "false"

}

const taskSlice = createSlice({

     name:"tasks",
     initialState,
     reducers:{
        loading(state){
              state.loading= "true"
        },
        addTask(state, action){
                 state.tasks.push(action.payload)
        },
        deleteTask(state,action){
             state.tasks = state.tasks.filter((task)=> task.id !==  action.payload)
        }
     }


})

export const {loading,deleteTask,addTask} = taskSlice.actions;

export default taskSlice.reducer;