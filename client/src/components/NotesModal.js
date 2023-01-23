

import React, {useState} from 'react'

const NotesModal = (props) => {

    const [title,setTitle] = useState(props.Node.title)
    const [tag, setTag] = useState(props.Node.tag)
    const [data, setData] = useState(props.Node.data)

    console.log(props.Node)

    const handleEditData = async () => {
        let result = await fetch(`http://localhost:4000/update/${props.Node._id}`,{
            method: 'PUT',
            headers: { 'content-type':'application/json'},
            body: JSON.stringify({title,tag,data})
        })
        result = await result.json()
        console.log(result)
        props.notifySuccess("Note Update Successfully")

        props.handleClick()
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
          <select id='select' value={tag} onChange={(e)=>{setTag(e.target.value)}}>
            <option value='Video'>Video</option>
            <option value='Wishlist'>Wishlist</option>
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
          value={data}
          onChange={(e)=>{setData(e.target.value)}}
          />
        </div>

          <div className='button'>
              <button type='submit' onClick={handleEditData}>Edit</button>
          </div>

          <div className='button cancel'>
              <button onClick ={props.handleClick}>Cancel</button>
          </div>
      </div>
    </div>
  )
}

export default NotesModal
