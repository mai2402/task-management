

import { Outlet } from "react-router-dom";
import Header from "./Header";

import SideBar from "./SideBar";

function AppLayout() {
    return ( 
        <div className="min-h-screen bg-lightGray flex flex-col">
            <Header />
            <div className="flex flex-grow mt-2 ">
                <div className="min-h-screen ">
                <SideBar />

                </div>
                <main className="flex-grow p-8">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default AppLayout;


