import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { addBlog } from "../services/blog";
// import { AuthContext, categoryContext } from "../App";
import { getCategories } from "../services/category";

function AddBlog() {
  // const { categories, setCategories } = useContext(categoryContext);

  const [blog, setBlog] = useState({
    title: "",
    contents: "",
  });

  const [categories, setCategories] = useState([])

  const updateCategories = async ()=> {
    const result = await getCategories();
        if (result.status == 200) {
          setCategories(result.data);
        } else toast.warn("Unable to get Categories");
  }

  useEffect(() => {
    updateCategories();
  }, [])
  

  const onAddBlog = async () => {
    const { title, contents, category } = blog;
    if (title.length == 0) toast.warn("Please Enter Title");
    else if (contents.length == 0)
      toast.warn("Please enter contents of the blog");
    else {
      const result = await addBlog(title, contents);
      if (result == 200) {
        toast.success("New Blog added");
        Navigate("/my-blogs");
      }
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        <h2 className="page-header">Edit/ Create Blog</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {/* Title Input Field */}
            <div className="mb-3">
              <label htmlFor="">Title</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setBlog({ ...blog, title: e.target.value });
                }}
              />
            </div>
            {/* Content TExtarea */}
            <div className="mb-3">
              <label htmlFor="">Contents</label>
              <textarea
                type="text"
                rows={10}
                className="form-control"
                onChange={(e) => {
                  setBlog({ ...blog, contents: e.target.value });
                }}
              />
            </div>
            {/* Select Category Options */}
            <div className="mb-3 form-floating">
              <select name="" id="floatingSelect" className="form-select ">
                {categories.map((category, index) => {
                  return <option value="index">{category.title}</option>;
                })}
                {/* <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option> */}
              </select>
              <label htmlFor="floatingSelect">Category</label>
            </div>
            <div className="d-flex justify-content-between">
              <button onClick={onAddBlog} className="btn btn-success">
                Create
              </button>
              <button className="btn btn-danger">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
