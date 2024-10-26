
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaTasks, FaFilter } from 'react-icons/fa';
import { HiHomeModern } from 'react-icons/hi2';

function Sidebar() {
    return (
        <aside className="bg-white w-64 h-full p-4 shadow-md">
            <nav className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center text-darkBlue hover:text-primary">
                    <HiHomeModern className="mr-2" />
                    Home
                </Link>
                <Link to="/tasks" className="flex items-center text-darkBlue hover:text-primary">
                    <FaTasks className="mr-2" />
                    My Tasks
                </Link>
            </nav>
        </aside>
    );
}

export default Sidebar;

