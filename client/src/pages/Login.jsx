import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container">
      <h2 className="page-header">Login</h2>
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
            <button className="btn btn-primary w-100 mb-3">Sign In</button>
            <div className="page-header">
              Dont have an Account? <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Login;
