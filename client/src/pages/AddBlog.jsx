import React from "react";
import Sidebar from "../components/Sidebar";

function AddBlog() {
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
              <input type="text" className="form-control" />
            </div>
            {/* Content TExtarea */}
            <div className="mb-3">
              <label htmlFor="">Contents</label>
              <textarea type="text" rows={10} className="form-control" />
            </div>
            {/* Select Category Options */}
            <div className="mb-3 form-floating">
              <select name="" id="floatingSelect" className="form-select ">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
              <label htmlFor="floatingSelect">Category</label>
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-success">Create</button>
              <button className="btn btn-danger">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
