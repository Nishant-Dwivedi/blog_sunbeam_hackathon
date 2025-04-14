import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { toast } from "react-toastify";
import {
  getCategories,
  deleteCategory,
  addCategory,
} from "../services/category";
function Category() {
  // State => Category
  const [category, setCategory] = useState({
    title: "",
    description: "",
  });

  // State => Categories list
  const [categories, setCategories] = useState([
    {
      title: "Recipes",
      description: "Food Blog",
    },
    {
      title: "Travel Guides",
      description: "Travel Blog",
    },
    {
      title: "Fashion Trends",
      description: "Fashion Blog",
    },
  ]);

  useEffect(() => {
    showCategories();
  }, []);

  const onDelete = async (id) => {
    const result = await deleteCategory(id);
    if (result.status == "success") {
      toast.success("Successfully Deleted the Category");
      showCategories();
    } else {
      toast.error("result.error");
    }
  };

  const showCategories = async () => {
    const result = await getCategories();
    if (result.status == "success") {
      setCategories(result.data);
    } else toast.warn("Unable to get Categories");
  };

  const onAdd = async () => {
    const { title, description } = category;
    if (title.length == 0) toast.warn("Enter Title");
    else if (description.length == 0) toast.warn("Enter Description");
    else {
      const result = await addCategory(title, description);
      if (result.status == "success") {
        toast.success("Successfully added a category");
        showCategories();
      } else toast.error(result.error);
    }
  };
  return (
    <div>
      <Sidebar />
      <div className="content">
        {/* Add category */}
        <div className="input-group w-75 mx-auto m-5">
          <span className="input-group-text">Title & Description</span>
          <input
            type="text"
            aria-label="Title"
            className="form-control"
            onChange={(e) => {
              setCategory({
                ...category,
                title: e.target.value,
              });
            }}
          />
          <input
            type="text"
            aria-label="Description"
            className="form-control"
            onChange={(e) => {
              setCategory({
                ...category,
                description: e.target.value,
              });
            }}
          />
          <button onClick={onAdd} className="btn btn-outline-primary">
            Add Category
          </button>
        </div>
        {/* Show CAtegories */}
        <div className="w-75 mx-auto">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Category</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    <td>{category.title}</td>
                    <td>{category.description}</td>
                    <td>
                      {/* <button className="btn btn-primary btn-sm">Edit</button> */}
                      <button
                        onClick={onDelete}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Category;
