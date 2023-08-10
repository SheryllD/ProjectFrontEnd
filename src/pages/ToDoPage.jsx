//import AddToDo from "../components/addtodo";
//import ToDoCard from "../components/ToDoCard";

import { useEffect, useState } from 'react'
const api_url = "http://localhost:5005"; 

function ToDoPage() {
	const [todos, setTodos] = useState([]);
	const [popupActive, setPopupActive] = useState(false);
	const [newTodo, setNewTodo] = useState("");
console.log ("something")

  const handleSubmit = (e) => {
    e.preventDefault(); 

  }
	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_url + '/todos')
			.then(res => res.json())
			.then(data => { 
        console.log("here are all your todos", data)
        setTodos(data)})
			.catch((err) => console.error("Error: ", err));
	}

	const completeTodo = async id => {
		const data = await fetch(api_url + '/todo/complete/' + id).then(res => res.json());

		setTodos(todos => todos.map(todo => {
			if (todo._id === data._id) {
				todo.complete = data.complete;
			}

			return todo;
		}));
		
	}

	const addTodo = async () => {
    const token = localStorage.getItem("authToken");
		const data = await fetch(api_url + "/todos/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json", 
        "authorization": `Bearer ${token}`
			},
			body: JSON.stringify({
				text: newTodo
			})
		}).then(res => res.json());

		setTodos([...todos, data]);

		setPopupActive(false);
		setNewTodo("");
	}

	const deleteTodo = async id => {
		const data = await fetch(api_url + '/todo/delete/' + id, { method: "DELETE" }).then(res => res.json());

		setTodos(todos => todos.filter(todo => todo._id !== data.result._id));
	}

	return (
		<div className="App">
			<h1>Welcome</h1>
			<h4>Your tasks</h4>

			<div className="todos">
				{todos.length > 0 ? todos.map(todo => (
					<div className={
						"todo" + (todo.complete ? " is-complete" : "")
					} key={todo._id} onClick={() => completeTodo(todo._id)}>
						<div className="checkbox"></div>
						<div className="text">{todo.text}</div>
						<div className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</div>
					</div>
				)) : (
					<p>You currently have no todo's</p>
				)}
			</div>
			<div className="addPopup" onClick={() => setPopupActive(true)}>+</div>
			{popupActive ? (
				<div className="popup">
					<div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
					<div className="content">
						<h3>Add Task</h3>
						<input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
						<div className="button" onClick={addTodo}>Create Todo</div>
					</div>
				</div>
			) : ''}
		</div>
	);
}

export default ToDoPage; 


/*
function ToDoPage() {
  const [todos, setTodos] = useState([]); 
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null); 
  const [editingText, setEditingText] = useState(""); 
  
  useEffect (() => {
    const json = localStorage.getItem("todos"); 
    const loadedTodos = JSON.parse(json); 
    if (loadedTodos) {
      setTodos (loadedTodos); 
    }
  }, []); 

  useEffect(() => {
    const json = JSON.stringify(todos); 
    localStorage.setItem("todos", json); 
  }, [todos]); 

  function handleTodoSumbit(e){
    e.preventdefault(); 

    const newTodo = {
      id: new Date().getTime(), 
      text: todo, 
      completed: false, 
    }; 
    setTodos([... todos].concat(newTodo)); 
    setTodo("");
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id); 
    setTodos(updatedTodos); 
  }

  function toggleComplete(id) {
    const updatedTodos = [ ...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed; 
      }
      return todo; 
    }); 
    setTodos(updatedTodos); 
  }

  function handleSubmitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editText; 
      }
      return todo; 
    }); 
    setTodos(updatedTodos); 
    setTodoEditing(null); 
  }

  return (
  <div id="todo-list">
  <h1>Todo List</h1>
  <form onSubmit={handleTodoSumbit}>
  <input
   type="text"
   onChange={(e) => setTodo(e.target.value)}
   value={todo}
   />
   <button type="submit">Add Todo</button>
   </form>
   {todos.map((todo) => (
     <div key={todo.id} className="todo">
     <div className="todo-text">
     <input
     type="checkbox"
     id="completed"
     checked={todo.completed}
     onChange={() => toggleComplete(todo.id)}
     />
     
     {todo.id === todoEditing ? (
     <input
      type="text"
      onChange={(e) => setEditingText(e.target.value)}
      />
      ) : (
      <div>{todo.text}</div>     
       )}
      </div>
      <div className="todo-actions">
      {todo.id === todoEditing ? (
      <button onClick={() => handleSubmitEdits(todo.id)}>Submit Edits</button>
      ) : (
      <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
       )}

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoPage;
*/