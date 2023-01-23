import React,  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Switch from "react-switch";
import DayNightToggle from 'react-day-and-night-toggle'
import logo from '../components/images/logo.png'
import Modal from './Modal'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineAlignLeft } from 'react-icons/ai'


const Navbar = ({setUpdate, update, setFilter, setSearch,handleDarkMode,dark,getCounts,handleMobileshow}) => {
  const [show, setShow] = useState(false);
 
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user.name)

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  const handleClick = () =>{
    setShow(!show);
  }

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


  return (
    <div className='container Navbar'>
      <div className="sideshowbtn" >
        <AiOutlineAlignLeft size={30} onClick={handleMobileshow}/>
        </div>
      <div className='logo'>
         <div> KEEPME</div>
        
      </div>

      <div className='NavbarItem'>

        <div className='search'>
          <input type='text' placeholder='Search Notes' onChange={(e) => setSearch(e.target.value)}/>
        </div>

        <div className='mode'>
        
        {/* <Switch onChange={handleDarkMode} checked={dark} />*/}
        <DayNightToggle
          onChange={handleDarkMode}
          checked={dark}
          shadows = {false}
          className = 'day-night'
          animationInactive	= {false}
          startInactive = {true}
          size={26}
        />
        </div>

        <div className='addbtn'>
          <button onClick={handleClick}>Add New Notes</button>
        </div>

        <div className="dropdown">
  <button className="dropbtn">Profile</button>
  <div className="dropdown-content">
    <div>{user.name}</div>
    <div onClick={handleLogout}>Logout</div>
  </div>
</div>

      
      </div>
        {
      // show ? <Modal handleClick = {handleshow}/>: null
      show ? <Modal handleClick = {handleClick} setUpdate = {setUpdate} update={update} getCounts={getCounts} notifySuccess={notifySuccess}/>: null
    }

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
  )
}

export default Navbar
