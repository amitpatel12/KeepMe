import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Category from "./Category";
import MobileCategory from "./MobileCategory";
import Navbar from "./Navbar";
import Notes from "./Notes";
import LogIn from "./LogIn";

const NoteUI = ({ handleDarkMode, dark }) => {
  const [update, setUpdate] = useState(false);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState({all:0,Video:0,Wishlist:0,Assignment:0,Projects:0,Work:0,Study:0});
  const [mobileShow, setMobileShow] = useState(false);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");


  useEffect(() => {
    const auth = localStorage.getItem("user");
    console.log(auth)
    console.log("hello");
    if (!auth) {
      navigate("/login");
    }
  });

  


  const getCounts = async () => {
    let id = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch(`http://localhost:4000/count/${id}`);
    result = await result.json();
    console.log(result)
    setCount(result);
  };

  const handleMobileshow = () => {
    setMobileShow(!mobileShow)
  }
  return (
    <div>
      { user ?(
        <>
      <Navbar
        setUpdate={setUpdate}
        update={update}
        setFilter={setFilter}
        setSearch={setSearch}
        handleDarkMode={handleDarkMode}
        dark={dark}
        getCounts={getCounts}
        handleMobileshow={handleMobileshow}
      />
      <Category setFilter={setFilter} count={count} />
      {

      mobileShow ? (
        <MobileCategory setFilter={setFilter} count={count} handleMobileshow={handleMobileshow}/>
      ) : null
      
      }
      <Notes
        update={update}
        filter={filter}
        search={search}
        getCounts={getCounts}
      />
      </>
      )
      
    : <LogIn/>
    }
    </div>
  );
};

export default NoteUI;
