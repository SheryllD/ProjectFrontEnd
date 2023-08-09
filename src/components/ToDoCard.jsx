import { Link } from "react-router-dom";

function ToDoCard ( { title, description, _id } ) {
  
  return (
    <div className="To-Do-Card">
      <Link to={`/todos/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default ToDoCard;