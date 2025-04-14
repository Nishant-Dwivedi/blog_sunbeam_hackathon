import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const onLogin = async () =>{
    if(user.email.length == 0){
      toast.warn("Please Enter Email");
    }
    else if(user.password.length == 0){
      toast.warn("Please Enter Password");
    }
    else{
      const {email, password} = user;
      const result = await loginUser(email, password);
      if(result.status == 'success'){
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
            <button onClick={onLogin} className="btn btn-primary w-100 mb-3">Sign In</button>
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
