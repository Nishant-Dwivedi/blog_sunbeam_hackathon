import React, { useState, createContext } from "react";
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

export const AuthContext = createContext();
export const categoryContext = createContext();
function App() {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  return (
    <div>
      <AuthContext.Provider value={{ user, setUser }}>
        <categoryContext.Provider value={{categories, setCategories}}>
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
        </categoryContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
