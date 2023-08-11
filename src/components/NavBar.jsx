import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

//const api_url = import.meta.env.VITE_API_URL;
//import React from 'react'

function NavBar() {
  const { isLoggedIn, User, logoutUser } = useContext(AuthContext);

  return (
    <nav className="top-nav-bar">
      <Link to={"/homepage"}>
        <button>Home</button>
      </Link>
      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to={"/todo"}>
            <button> Tasks </button>
          </Link>
          <Link to={"/journal"}>
            <button> Journal </button>
          </Link>
          <Link to={"/energylevel"}>
            <button> Energy Level </button>
          </Link>
          <Link to={"/sleepquality"}>
            <button> Sleep Quality </button>
          </Link>

          <button onClick={logoutUser}> logout </button>
          <span>{User && User.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/register">
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;
