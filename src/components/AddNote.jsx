import { useState } from "react";
import axios from "axios";

function AddNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    // Get the token from the localStorage
    const Token = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios.post(`${API_URL}/api/journal`,
        requestBody,
        { headers: { Authorization: `Bearer ${Token}` } }
      )
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        props.refreshJournal();
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div className="AddNote">
    <h3>Add Project</h3>
    <form onSubmit={handleNoteSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />

      <label>Description:</label>
      <textarea
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}

export default AddNote; 