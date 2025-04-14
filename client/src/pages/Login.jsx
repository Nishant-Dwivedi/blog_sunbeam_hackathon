import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { loginUser } from "../services/user";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const onLogin = async () =>{
    const {email, password} = user;

    if(email.length == 0){
      toast.warn("Please Enter Email");
    }
    else if(password.length == 0){
      toast.warn("Please Enter Password");
    }
    else{
      const result = await loginUser(email, password);
      if(result.status == 200){
        toast.success("Welcome the the Blog");
        const {token, name} = result.data;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('name', name);

        navigate('/my-blogs')
      }
    }
  }
  return (
    <div className="container">
      <h2 className="page-header">Login</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor=""> Email Address</label>
            <input type="email" className="form-control"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }} />
          </div>
          <div className="mb-3">
            <label htmlFor=""> Password</label>
            <input type="password" className="form-control" 
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            />
          </div>
          <div className="mb-3">
            <button onClick={onLogin} className="btn btn-primary w-100 mb-3">Sign In</button>
            <div className="page-header">
              Dont have an Account? <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
