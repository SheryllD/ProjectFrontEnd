import React from "react"; 
import "../App.css"; 
import {Link, useNavigate} from "react-router-dom"; 

export const HomePage = (props) => {
  return (
    <>
    <div className="HomepageContainer">
      <h1>Welcome user</h1>
      <div>
        <Link to="/todopage">
        <button> Tasks </button>
        </Link>
      </div>
      <div>
        <Link to="/journalpage">
        <button> Journal </button>
        </Link>
      </div>
      <div>
        <Link to="/energylevelpage">
        <button> Energy Level </button>
        </Link>
      </div>
      <div>
        <Link to="/sleepqualitypage">
        <button> Sleep Quality </button>
        </Link>
      </div>
      <div>
        <Link to="/statisticpage">
        <button> Dashboard </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default HomePage;