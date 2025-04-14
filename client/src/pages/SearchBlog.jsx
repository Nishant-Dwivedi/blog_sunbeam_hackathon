import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

function SearchBlog() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <SearchBar />
        <table className="table table-stripped w-75 mx-auto">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchBlog;
