import axios from 'axios';
import { useState } from 'react';

import React from 'react'

function AddToDo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleToDoSubmit = (e) => {
      e.preventDefault(); 
  
      // We need the project id when creating the new task
      const { toDoId } = props;
      // Create an object representing the body of the POST request
      const requestBody = { title, description, toDoId };
  
      // Get the token from the localStorage
      const Token = localStorage.getItem('Token');
  
      // Send the token through the request "Authorization" Headers   
      axios.post(
          `${api_}/api/todo`,
          requestBody,
          { headers: { Authorization: `Bearer ${Token}` } }        
        )
        .then((response) => {
          // Reset the state to clear the inputs
          setTitle("");
          setDescription("");
        
          // Invoke the callback function coming through the props
          // from the ProjectDetailsPage, to refresh the project details
          props.refreshtoDo();
        })
        .catch((error) => console.log(error));
    };

 return (
        <div className="AddToDo">
          <h3>To DO:</h3>
          
          <form onSubmit={handletoDOSubmit}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
    
            <label>Description:</label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
    
            <button type="submit">Add Task</button>
          </form>
        </div>
      );
    }
    
export default AddToDo;
/*
const API_URL = "http://localhost:5005";

function AddToDo(props) {
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState(""); 

    const handleToDoSubmit = (e) => {
        e.preventDefault(); 
        //To do ID
        const {toDoId} = props; 

    const requestBody = { title, description, toDoId}; 

    //token 
    const storedToken = localStorage.getItem('authToken'); 

    //send to the Auth headers
    axios.post(`${api_url}/api/tasks`, 
    requestBody, 
    {headers: {Authorization: `Bearer ${storedToken}`}}
    )
    .then((res) => {
        setTitle(""); 
        setDescription(""); 
        props.refreshtoDo(); 
    })
    .catch ((err) => console.log(err)); 
    }; 

  return (
    <div className='AddToDO'>
        <h3>Add ToDo's</h3>
        <form onSubmit={handleToDoSubmit}>
            <label>Title: </label>
            <input
            type = "text"
            name = "title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            
            <label>Description: </label>
            <input
            type = "text"
            name = "Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <button type ="submit">Add To Do</button>
        </form>
    </div>
  )
}

export default AddToDo; 
*/