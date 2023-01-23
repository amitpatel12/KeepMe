import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../components/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const notifyWarn = (message) => toast.warn(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
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
    })

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
    // console.log(name,email,password)

    if(password.length <4){
      let message = "Passwod size greate than 4"
      notifyWarn(message)
    }
   
    else if (name && email && password) {
      // let message = "Account Creating..."
      //   notify2(message)
    
     
        let result = await fetch("http://localhost:4000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
  
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result.result));
        console.log(result.message);

        if(result.result._id){
          notifySuccess(result.message)
          setTimeout(() => {
            if (result) {
              navigate("/");
            }
          }, 3000);
        }
        else{
          notifyError(result.message)
        }
    } else{
      let message = "Please Enter all sections"
        notifyWarn(message)
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
              <h1>Register</h1>
            </div>

            <div className="email inputs ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                id="name"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="email inputs ">
              <label htmlhtmlFor="email">E-Mail</label>
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                required
                placeholder="Email address"
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
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="submit">
              <button type="submit" onClick={handleData}>
                Register
              </button>
            </div>

            <div className="login-register">
              <div>Already Have Account ?</div>
              <Link to="/login">
                <button>Login</button>
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

export default Register;
