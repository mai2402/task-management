function Filter({setStatusFilter,setPriorityFilter}) {

    return (
        <div className="flex items-center space-x-4">
            <select className="border border-mediumGray p-2 rounded-md"
                    onChange={(e)=>setStatusFilter(e.target.value)}>
                <option value="">All Statuses</option>
                <option value="todo">Status: To Do</option>
                <option value="doing">Status: Doing</option>
                <option value="done">Status: Done</option>
            </select>
            <select className="border border-mediumGray p-2 rounded-md"
                      onChange={(e)=>setPriorityFilter(e.target.value)}>
                <option value="">All Priorities</option>
                <option value="low">Priority: Low</option>
                <option value="medium">Priority: Medium</option>
                <option value="high">Priority: High</option>
            </select>
        </div>
    )
}

export default Filter;

