import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./components/Sidebar";
import MyBlogs from "./pages/MyBlogs";
import AllBlogs from "./pages/AllBlogs";
import AddBlog from "./pages/AddBlog";
import SearchBlog from "./pages/SearchBlog";
import Category from "./pages/Category";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/category" element={<Category />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/search-blog" element={<SearchBlog />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
