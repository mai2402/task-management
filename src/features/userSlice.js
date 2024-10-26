import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            userID: '123',
            password: "test123",
            username: 'mai',
           
        },
        {
            userID: '3123',
            password: "test123",
            username: 'mohamed',
         
        }
    ],
    isAuthenticated: false,
    loggedInUser: null,
    error: null,
};

const userSlice = createSlice({
    name: "userSlice", 
    initialState,
    reducers: {
        login(state, action) {
            const { username, password } = action.payload;
            const isUserFound = state.users.find(user => user.username === username);
            
            if (isUserFound && isUserFound.password === password) {
                state.loggedInUser = isUserFound; 
                state.isAuthenticated = true;
                state.error = null;
            } else {
                state.loggedInUser = null;
                state.isAuthenticated = false;
                state.error = "Invalid username or password"; 
            }
        },
        logout(state) {
            state.loggedInUser = null;
            state.isAuthenticated = false; 
            state.error = null; 
    }
}});

export const getLoggedInUser = state => state.userSlice.loggedInUser; 
export const getUsers = state => state.userSlice.users; 
export const getUserId = id => state => state.userSlice.users.find(user => user.userID === id); 
export const isAuthenticatedUser = state => state.userSlice.isAuthenticated;
export const getAuthError = state => state.userSlice.error; 

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
