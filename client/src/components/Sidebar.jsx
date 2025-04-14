import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <Link className="link" to="/my-blogs">My Blogs</Link>
      <Link className="link" to="/all-blogs">All Blogs</Link>
      <Link className="link" to="/category">Category</Link>
      <Link className="link" to="/add-blog">Add Blog</Link>
      <Link className="link" to="/search-blog">Search Blog</Link>
    </div>
  );
}

export default Sidebar;
