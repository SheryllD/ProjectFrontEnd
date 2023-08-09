import { useState, useEffect } from "react";
import axios from "axios";

import React from 'react'

function ToDoPage() {
  return (
    <div>ToDoPage</div>
  )
}

export default ToDoPage; 

/*
import AddToDo from "../components/AddToDo";
import ProjectCard from "../components/ToDoCard";

const API_URL = "http://localhost:5005";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/projects`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddToDo refreshProjects={getAllProjects} />

      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </div>
  );
}

export default ToDoPage;

*/