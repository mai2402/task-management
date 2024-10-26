import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  getAuthError, getUsers, isAuthenticatedUser, login } from "../features/userSlice";
import ErrorMessage from "../ui/ErrorMessage";
import { useEffect } from "react";




function Login() {
  
    const {register,handleSubmit,formState:{errors}} = useForm()
    const isAuthenticated = useSelector(isAuthenticatedUser);
    const error = useSelector(getAuthError)
    const users = useSelector(getUsers)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(()=>{

        if (isAuthenticated) navigate("/");
        console.log(users)
     },[isAuthenticated,navigate])
     
  function formSubmit(data){

        dispatch(login(data))
       

    }
    return (
        <div onSubmit={handleSubmit(formSubmit)} className="flex items-center justify-center min-h-screen bg-lightGray">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="p-2 border rounded"
                        required
                        {...register("username")}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 border rounded"
                        required
                        {...register("password")}
                    />
                    {error ? <ErrorMessage message={error}/>:" "}
                    <button type="submit" className="bg-darkBlue text-white p-2 rounded font-bold">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;

