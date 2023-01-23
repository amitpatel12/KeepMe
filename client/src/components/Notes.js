import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import NotesModal from "./NotesModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notes = ({ update, filter, search,getCounts }) => {
  let [notes, setNotes] = useState([]);
  const [Node, setNode] = useState()
  const id = JSON.parse(localStorage.getItem("user"))._id;

  const [edit, setEdit] = useState(false)

  useEffect(() => {
    getNotes();
    getCounts()
  }, [update, filter, edit]);

  const getNotes = async () => {
    let result = await fetch(
      `http://localhost:4000/notes/${id}/${filter}`
    );
    result = await result.json();
    setNotes(result);
  };


  const handleDelete = async (id) => {
    // console.log(id)
    let result = await fetch(`http://localhost:4000/delete/${id}`,{
      method: 'DELETE'
    })
    result = await result.json()
    // console.log(result)
    if(result.result.acknowledged){
      getNotes()
      getCounts()
      notifyError('Deleted successfully')
    }
  }

  const handleClick = () =>{
    setEdit(!edit);
  }

  function handleEdit(id,item){
    // console.log(id,item)
    setNode(item)
    handleClick()
  }

  const handleEditData = () =>{
    setEdit(!edit)
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

 

  const colors = [
    "#a2d9d0",
    "#e3bbed",
    "#cbcccd",
    "#c2f7c6",
    "#68f4db",
    "#eae591",
    "#e0fde1",
    "#2af080",
    "#c7ba2b",
  ];

  const tagColors = [
    "#ed3149",
    "#6e150a",
    "#d713ea",
    "#411872",
    "#5d6b50",
    "#fe648e",
    "#1a5538",
    "#0d47f5",
  ];

//  notes = notes.reverse()
  let found = false;

  // arr.slice().reverse().forEach(x => console.log(x))
  return (
    <div className="notes">
      {notes.length > 0 ? (
        notes.map((item, index) => {
          // console.log(item);
          if (item.title.toLowerCase().includes(search.toLowerCase())) {
            found = true;
            return (
              <div
                className="notesdetails"
                style={{ backgroundColor: colors[index % colors.length] }}
                key={index}
              >
                <div className="note-top">
                  <div className="note-title">{item.title}</div>
                  <div
                    className="note-tag"
                    style={{
                      backgroundColor: tagColors[index % tagColors.length],
                    }}
                  >
                    {item.tag}
                  </div>
                </div>
                <div className="note-data">{item.data}</div>
                <div className="note-bottom">
                  <div className="notetime">{item.time}</div>
                  <div className="notedate">{item.date}</div>
                </div>
                <div className="note-bottom">
                  <button className="editbtn" onClick={()=> handleEdit(item._id,item)}>Edit</button>
                  <button className="deletebtn" onClick={()=> handleDelete(item._id)}>Delete</button>
                </div>
              </div>
            );
          }else{
            found && <h1>No Record Found!</h1>
          }
        })
      ) : (
        <h1>No Record Found!</h1>
      )}
{
      edit ?  <NotesModal handleClick = {handleClick} Node = {Node} notifySuccess = {notifySuccess}/> : null
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
  );
};

export default Notes;
