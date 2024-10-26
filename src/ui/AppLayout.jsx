

import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import ProtectedRoute from "../components/ProtectedRoute";



function AppLayout() {
    
    return ( 
        <div className="min-h-screen bg-lightGray flex flex-col">
            <Header />
            <div className="flex flex-grow mt-2 ">
                <div className="min-h-screen ">
                <SideBar />

                </div>
                <main className="flex-grow p-8">
                    <ProtectedRoute>
                    <Outlet/>
                    </ProtectedRoute>
                </main>
            </div>
        </div>
    );
}

export default AppLayout;


