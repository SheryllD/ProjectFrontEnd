import axios from "axios";
import { useEffect, useState } from "react";
const api_url = "http://localhost:5005";

function ToDoPage() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [updateTodo, setUpdateTodo] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleSubmitEdit = async (todoId) => {
    axios
      .post(`${api_url}/todos/edit/${todoId}`, { updateTodo })
      .then((response) => {
        console.log("here is a response", response);
        setTodos(response.data.AlltoDos);
        setShowInput(false);
        setUpdateTodo("");
        // navigate("/todo");
      })
      .catch((err) => console.error("Error: ", err));
    //await fetch(api_url + "/todo/edit/" + id).then((res) => res.json());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    GetTodos();
  }, []);

  const GetTodos = () => {
    fetch(api_url + "/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("here are all your todos", data);
        setTodos(data);
      })
      .catch((err) => console.error("Error: ", err));
  };

  const completeTodo = async (id) => {
    const data = await fetch(api_url + "/todos/complete/" + id).then((res) =>
      res.json()
    );

    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.complete = data.complete;
        }

        return todo;
      })
    );
  };

  const addTodo = async () => {
    const token = localStorage.getItem("authToken");
    const data = await fetch(api_url + "/todos/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        text: newTodo,
      }),
    }).then((res) => res.json());

    setTodos([...todos, data]);

    setPopupActive(false);
    setNewTodo("");
  };

  const deleteTodos = (id) => {
    fetch(api_url + "/todos/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((parsed) => setTodos(todos.filter((todos) => todos._id !== id)))
      .catch((err) => console.error("Error: ", err));

    //setTodos(todos => todos.filter(todos => todos._id !== data.result._id));
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h4>Things To Do Today:</h4>

      <div className="todo">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo._id}>
              <div
                className={"todo" + (todo.complete ? " is-complete" : "")}
                //onClick={() => completeTodo(todo._id)}
              >
                <div className="checkbox"></div>
                <div className="text">{todo.text}</div>

                <button
                  className="edit"
                  onClick={() => setShowInput(!showInput)}
                >
                  Edit
                </button>

                <div className="delete" onClick={() => deleteTodos(todo._id)}>
                  x
                </div>
              </div>

              {showInput ? (
                <div>
                  <input
                    value={updateTodo}
                    onChange={(e) => setUpdateTodo(e.target.value)}
                  />
                  <button
                    className="edit"
                    onClick={() => {
                      handleSubmitEdit(todo._id);
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
          <p> My Daily Tasks</p>
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
            <h3>Tasks for today:</h3>
            <input
              type="text"
              className="add-input"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <div className="button" onClick={addTodo}>
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

export default ToDoPage;
