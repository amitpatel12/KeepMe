import React, { useEffect, useState } from "react";
import logo from "../components/images/logo.png";
import { json, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const notifySuccess = (message) => toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const notifyError = (message) => toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  const handleData = async () => {
    // console.log(email,password)

    let result = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });

    result = await result.json();
    console.log(result);

    if (result.user) {
      localStorage.setItem("user", JSON.stringify(result.user));
      notifySuccess(result.message)
      setTimeout(() =>{
        navigate("/");
      },3000)
      
    } else {
      notifyError(result.message)
    }
  };
  return (
    <div className="container login">
      <div className="login-page">
        <div className="welcome">
          <h1>Welcome to Keepme</h1>
          <p>Please Enter Your Details</p>
        </div>

        <div className="login-details">
          <div className="left">
            <img src={logo} />
          </div>
          <div className="right">
            <div className="message">
              <h1>LogIn</h1>
            </div>

            <div className="email inputs ">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                placeholder="Email address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password inputs">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="submit">
              <button type="submit" onClick={handleData}>
                LogIn
              </button>
            </div>

            <div className="login-register">
              <div>Don't Have Account ?</div>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          </div>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </div>
    </div>
  );
};

export default LogIn;
