import axios from 'axios';
import { useState } from 'react';

import React from 'react'

export default function addtodo() {
  return (
    <div>addtodo</div>
  )
}


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