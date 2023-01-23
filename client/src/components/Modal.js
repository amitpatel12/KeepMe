import React, {useState} from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const Modal = (props) => {
  const userId = JSON.parse(localStorage.getItem('user'))._id
  const navigate = useNavigate()


  const [title,setTitle] = useState('')
  const [tag, setTag] = useState('Wishlist')
  const [data, setData] = useState('')

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const handleData = async () => {
    // console.log(title,data,tag,userId)
    
    const d = new Date();
    let date = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
    let time = d.toLocaleTimeString()
    // console.log(time,date)

    if(title && data){
      let result = await fetch('http://localhost:4000/add-notes',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({title,tag,data,userId,time,date})
    })

    result = await result.json()
    if(result){
      props.setUpdate(!props.update);
      props.getCounts()
      props.notifySuccess("Notes added successfully")
    }
    props.handleClick()
    }else{
      alert('Please Fill all required fields')
    }
    
  }



  return (
    <div className='container modal'>
      <div className='modal-data'>
        <div className='title'>
          <label htmlFor='title'>Title</label>
          <input type='text' 
          id='title' 
          value={title} 
          placeholder='Title' 
          onChange={(e)=>{setTitle(e.target.value)}}
          />
    </div>
        <div className='taged title'>
        <label htmlFor='select'>Tag</label>
          <select id='select' onChange={(e)=>{setTag(e.target.value)}}>
            <option value='Video'>Video</option>
            <option value='Wishlist' selected>Wishlist</option>
            <option value='Assignment'>Assignment</option>
            <option value='Project'>Project</option>
            <option value='Work'>Work</option>
            <option value='Study'>Study</option>
          </select>
        </div>

        <div className='data'>
        <label HtmlFor='Data'>Notes Data</label>
          <textarea name='title' 
          id='Data' 
          rows= "5" 
          cols="20"
          onChange={(e)=>{setData(e.target.value)}}
          />
        </div>

          <div className='button'>
              <button type='submit' onClick={handleData}>Add Note</button>
          </div>

          <div className='button cancel'>
              <button onClick ={props.handleClick}>Cancel</button>
          </div>
      </div>
    </div>
  )
}

export default Modal
