import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticatedUser } from "../features/userSlice";



function ProtectedRoute({children}) {

 const isAuthenticated = useSelector(isAuthenticatedUser);
  return isAuthenticated ? children : <Navigate to="/login"/>


    
}

export default ProtectedRoute
