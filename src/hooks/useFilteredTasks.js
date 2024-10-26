
import { useSelector } from "react-redux";
import { selectAllTasks } from "../features/taskSlice";
import { getLoggedInUser } from "../features/userSlice";
import { ROLE_CONSTANTS } from "../constants/roleConstants";


function useFilteredTasks(searchQuery, priorityFilter, statusFilter) {
    const tasksSelector = useSelector(selectAllTasks);
    const loggedInUser = useSelector(getLoggedInUser);

    const filteredTasks = tasksSelector
        .filter((task) => {
            const authorized = task.ownerId === loggedInUser.userID || task.employeeId === loggedInUser.userID;
            const search = task.title?.toLowerCase().trim().includes(searchQuery.toLowerCase().trim());

            if (!!priorityFilter || !!statusFilter) {
                const matchedPriorityFilter = priorityFilter && priorityFilter === task.priority;
                const matchedStatusFilter = statusFilter && statusFilter === task.state;
                return authorized && search && (matchedStatusFilter || matchedPriorityFilter);
            }

            return authorized && search;
        })
        .map((task) => ({
            ...task,
            role: task.ownerId === loggedInUser.userID ? ROLE_CONSTANTS.owner : ROLE_CONSTANTS.employee,
        }));

    return filteredTasks;

};

export default useFilteredTasks
