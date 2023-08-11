import axios from "axios";
import { useEffect, useState } from "react";
const api_url = "http://localhost:5005";

function JournalPage() {
  const [notes, setNotes] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [updateNote, setUpdateNote] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleSubmitEdit = async (todoId) => {
    axios
      .post(`${api_url}/notes/edit/${todoId}`, { updateNote })
      .then((response) => {
        console.log("here is a response", response);
        setNotes(response.data.AllNotes);
        setShowInput(false);
        setUpdateNote("");
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
        console.log("here are all the notes", data);
        setNotes(data);
      })
      .catch((err) => console.error("Error: ", err));
  };

  const completeNote = async (id) => {
    const data = await fetch(api_url + "/notes/complete/" + id).then((res) =>
      res.json()
    );

    setNotes((notes) =>
      notes.map((note) => {
        if (note._id === data._id) {
          todo.complete = data.complete;
        }

        return note;
      })
    );
  };

  const addNote = async () => {
    const token = localStorage.getItem("authToken");
    const data = await fetch(api_url + "/notes/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        text: newNote,
      }),
    }).then((res) => res.json());

    setNotes([...notes, data]);

    setPopupActive(false);
    setNewNote("");
  };

  const deleteNotes = (id) => {
    fetch(api_url + "/notes/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((parsed) => setNotes(notes.filter((notes) => notes._id !== id)))
      .catch((err) => console.error("Error: ", err));

    //setTodos(todos => todos.filter(todos => todos._id !== data.result._id));
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h4>Notes: </h4>

      <div className="Notes">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note._id}>
              <div
                className={"note" + (note.complete ? " is-complete" : "")}
                //onClick={() => completeTodo(todo._id)}
              >
                <div className="checkbox"></div>
                <div className="text">{note.text}</div>

                <button
                  className="edit"
                  onClick={() => setShowInput(!showInput)}
                >
                  Edit
                </button>

                <div className="delete" onClick={() => deleteNotes(note._id)}>
                  x
                </div>
              </div>

              {showInput ? (
                <div>
                  <input
                    value={updateNote}
                    onChange={(e) => setUpdateNote(e.target.value)}
                  />
                  <button
                    className="edit"
                    onClick={() => {
                      handleSubmitEdit(note._id);
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
          <p> Start Journaling Today!</p>
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
            <h3>Thought of Today </h3>
            <input
              type="text"
              className="add-input"
              onChange={(e) => setNewNote(e.target.value)}
              value={newNote}
            />
            <br></br>
            <div className="button" onClick={addNote}>
              Create
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
