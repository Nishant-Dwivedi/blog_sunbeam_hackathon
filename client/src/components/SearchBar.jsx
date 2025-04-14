import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div>
        <div className="row justify-content-center">
          <div class="search-container col-md-6">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search..."
            />
            <FaSearch className='search-icon'/>
          </div>
        </div>
    </div>
  )
}

export default SearchBar