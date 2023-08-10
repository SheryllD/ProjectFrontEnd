import axios from 'axios';
import { useState, useEffect } from 'react';
import JournalCard from '../components/journalcard';
import AddNote from '../components/AddNote';

const API_URL = "http://localhost:5005";

function JournalPage() {
  const [notes, setNotes] = useState([]);

  const getAllNotes = () => {
    // Get the token from the localStorage
    const Token = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios.get(`${api_url}/api/notes`, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((response) => setNotes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {getAllNotes();
  }, []);

  return (
    <div className="NotesListPage">
      <AddNote refreshNotes={getAllNotes} />

      {notes.map((note) => (
        <JournalCard key={note._id} {...note} />
      ))}
    </div>
  );
}

export default JournalPage;
