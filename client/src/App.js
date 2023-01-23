import React, {useState,useEffect} from 'react';
import './App.css';
import LogIn from './components/LogIn';
import Register from './components/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NoteUI from './components/NoteUI';


function App() {

  const [dark,setDark] = useState(false);


  const handleDarkMode = () => {
    setDark(!dark);
  }
  
 


  return (
    <BrowserRouter>
    <div className={dark ? "dark" : "App"}>
      <Routes>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<NoteUI handleDarkMode = {handleDarkMode} dark = {dark}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
