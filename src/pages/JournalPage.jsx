import axios from "axios";
import { useEffect, useState } from "react";
const api_url = "http://localhost:5005";

function JournalPage() {
  const [notes, setNotes] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newNotes, setNewNotes] = useState("");
  const [updateNotes, setUpdateNotes] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleSubmitEdit = async (notesId) => {
    axios
      .post(`${api_url}/notes/edit/${notesId}`, { updateNotes })
      .then((response) => {
        console.log("here is a response", response);
        setNotes(response.data.Allnotes);
        setShowInput(false);
        setUpdateNotes("");
      })
      .catch((err) => console.error("Error: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    GetNotes();
  }, []);

  const GetNotes = () => {
    fetch(api_url + "/notes")
      .then((res) => res.json())
      .then((data) => {
        console.log("here are all your notes", data);
        setNotes(data);
      })
      .catch((err) => console.error("Error: ", err));
  };

  const completenotes = async (id) => {
    const data = await fetch(api_url + "/notes/complete/" + id).then((res) =>
      res.json()
    );

    setNotes((notes) =>
      notes.map((notes) => {
        if (notes._id === data._id) {
          notes.complete = data.complete;
        }

        return notes;
      })
    );
  };

  const addnotes = async () => {
    const token = localStorage.getItem("authToken");
    const data = await fetch(api_url + "/notes/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        text: newNotes,
      }),
    }).then((res) => res.json());

    setNotes([...notes, data]);

    setPopupActive(false);
    setNewNotes("");
  };

  const deleteNotes = (id) => {
    fetch(api_url + "/notes/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((parsed) => setNotes(notes.filter((notes) => notes._id !== id)))
      .catch((err) => console.error("Error: ", err));
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h4>Your tasks</h4>

      <div className="notes">
        {notes.length > 0 ? (
          notes.map((notes) => (
            <div key={notes._id}>
              <div className={"notes" + (notes.complete ? " is-complete" : "")}>
                <div className="checkbox"></div>
                <div className="text">{notes.text}</div>

                <button onClick={() => setShowInput(!showInput)}>Edit</button>

                <div
                  className="delete-notes"
                  onClick={() => deleteNotes(notes._id)}
                >
                  x
                </div>
              </div>

              {showInput ? (
                <div>
                  <input
                    value={updateNotes}
                    onChange={(e) => setUpdateNotes(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      handleSubmitEdit(notes._id);
                    }}
                  >
                    {" "}
                    Edit{" "}
                  </button>{" "}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <p> Start Journaling</p>
        )}
      </div>
      <div className="addPopup" onClick={() => setPopupActive(true)}>
        +
      </div>
      {popupActive ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>
            X
          </div>
          <div className="content">
            <h3>Add Task</h3>
            <input
              type="text"
              className="add-notes-input"
              onChange={(e) => setNewNotes(e.target.value)}
              value={newNotes}
            />
            <div className="button" onClick={addnotes}>
              Create notes
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default JournalPage;
