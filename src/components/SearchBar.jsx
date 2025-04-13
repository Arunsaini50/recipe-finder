import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    
      <div className="flex justify-center my-6">
      <div className="flex items-center bg-white rounded-full shadow-lg px-4 py-2 w-80">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-grow outline-none text-gray-700"
          placeholder="Search recipes..."
        />
        <button 
          onClick={handleSearch} 
          className="text-pink-500 text-xl hover:text-pink-600">
          <FaSearch />
        </button>
      </div>
    </div>

  )
}

export default SearchBar
