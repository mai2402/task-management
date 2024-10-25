// Initialize state for search, priority, and status filters in Tasks component

import { useState } from "react"
import TaskList from "../components/TaskList"
import Filter from "../ui/Filter"
import SearchBar from "../ui/SearchBar"
import { Link } from "react-router-dom"


function Tasks() {
    const [searchQuery, setSearchQuery] = useState("")
    const [priorityFilter, setPriorityFilter] = useState("") 
    const [statusFilter, setStatusFilter] = useState("") 

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
         
            <div className="flex items-center justify-between space-x-4 mb-6">
                {/* Pass filter setter functions to Filter component */}
                <Filter setPriorityFilter={setPriorityFilter} setStatusFilter={setStatusFilter} />
                
                {/* Pass searchQuery state and setter to SearchBar component */}
                <div className="flex justify-end items-center gap-2">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <Link  to="/tasks/new" className="bg-green text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  New Task
                </Link>
                </div>
            </div>

            {/* Pass search, priority, and status filters to TaskList component */}
            <TaskList searchQuery={searchQuery} priorityFilter={priorityFilter} statusFilter={statusFilter} />
        </div>
    )
}

export default Tasks

