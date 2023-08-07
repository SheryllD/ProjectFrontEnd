import React, {useState} from "react"; 
import axios from "axios";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(email)
    }
    return (
        <>
        <div className="login-container">
        <h1> Sign in </h1>
             <form onSubmit={handleSubmit} className= "login-form">
                    <label> E-mail: </label>
                    <input
                    type="email" 
                    placeholder="youremail@gmail.com"
                    name="email"
                    id="email" 
                    value={email}
                    onChange={(event) => {setEmail(event.taget.value)}}/>
                
                <label>Password:</label>
                <input
                type="password"
                placeholder="*******"
                id="password"
                name="password"
                value={password}
                onChange={(event) => {setPassword(event.target.value)}} />
                <button type="submit">Log in</button>
                </form>
                <button>Don't have an account? Register here.</button>
               
        </div>
        </>
    )
}

export default LoginPage