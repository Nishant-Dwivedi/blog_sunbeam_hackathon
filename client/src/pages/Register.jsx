import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container">
      <h2 className="page-header">Sign Up</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor=""> Email Address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor=""> Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor=""> Full Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor=""> Phone No.</label>
            <input type="tel" className="form-control" />
          </div>
          <div className="mb-3">
            <button className="btn btn-success w-100 mb-3">Sign up</button>
            <div className="page-header">
              Already have an account? <Link to="/login ">Sign In</Link>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Login;
