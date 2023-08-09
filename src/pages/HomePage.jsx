import React from "react"; 
import "../App.css"; 
import {Link, useNavigate} from "react-router-dom"; 

export const HomePage = (props) => {
  return (
    <>
    <div className="HomepageContainer">
      <h1>Welcome user</h1>
      <div>
        <Link to="/todo">
        <button> Tasks </button>
        </Link>
      </div>
      <div>
        <Link to="/journal">
        <button> Journal </button>
        </Link>
      </div>
      <div>
        <Link to="/energylevel">
        <button> Energy Level </button>
        </Link>
      </div>
      <div>
        <Link to="/sleepquality">
        <button> Sleep Quality </button>
        </Link>
      </div>
      <div>
        <Link to="/statistic">
        <button> Dashboard </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default HomePage;