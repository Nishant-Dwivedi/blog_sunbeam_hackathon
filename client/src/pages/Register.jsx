import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/user";
import { toast } from "react-toastify";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const navigate = useNavigate();

  const onRegister = async () => {
    const { email, password, name, phone } = user;
    if (email.length == 0) toast.warn("Please Enter Email");
    else if (password.length == 0) toast.warn("Please Enter Password");
    else if (name.length == 0) toast.warn("Please Enter Name");
    else if (phone.length == 0) toast.warn("Please Enter Phone No.");
    else {
      const result = await registerUser(email, password, name, phone);
      if (result == 200) {
        toast.success("User Registered Successfully");
        navigate("/login");
      }
    }
  };

  return (
    <div className="container">
      <h2 className="page-header">Sign Up</h2>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="mb-3">
            <label htmlFor=""> Email Address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor=""> Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor=""> Full Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor=""> Phone No.</label>
            <input
              type="tel"
              className="form-control"
              onChange={(e) => {
                setUser({ ...user, phone: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <button onClick={onRegister} className="btn btn-success w-100 mb-3">
              Sign up
            </button>
            <div className="page-header">
              Already have an account? <Link to="/login ">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
