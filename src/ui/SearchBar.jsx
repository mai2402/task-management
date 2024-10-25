

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <div className="flex items-center space-x-4">
        
            <input 
                type="text" 
                value={searchQuery} // Set input value to searchQuery from props
                onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Search tasks..." 
            />
        </div>
    );
}

export default SearchBar
