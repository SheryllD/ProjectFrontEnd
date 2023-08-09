import { Link } from "react-router-dom";
import { useContext } from "react";                    
import { AuthContext } from "../context/auth.context";  

//const api_url = import.meta.env.VITE_API_URL;
//import React from 'react'

function NavBar() {
  const { isLoggedIn, User } = useContext(AuthContext); 
  
  return (
    <nav className="top-nav-bar">
      <Link to={"/homepage"}>
        <button>Home</button>
      </Link> 
      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
        <Link to={"/todopage"}>
        <button> Tasks </button>
        </Link>
        <Link to={"/journalpage"}>
        <button> Journal </button>
        </Link>
        <Link to={"/energylevelpage"}>
        <button> Energy Level </button>
        </Link>
        <Link to={"/sleepqualitypage"}>
        <button> Sleep Quality </button>
        </Link>
        <Link to={"/statisticpage"}>
        <button> Dashboard </button>
        </Link>
        <button> logout </button>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default NavBar; 