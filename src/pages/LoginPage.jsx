import React, {useState} from "react"; 
import axios from "axios";
import { Link } from "react-router-dom";

const handleLoginSubmit = async (event) => {
    event.preventDefault()

}

export const LoginPage = (props) => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        console.log(email)
    }
    return (
        <>
        <div className="login-container">
        <h2>The simplest way to record your day</h2>
            <h3> with (NAME OF APP) you can record your day with a few taps!</h3>
            <h1> Sign in </h1>
             <form onSubmit={handleLoginSubmit} className= "login-form">
             <label htmlFor="email"> E-mail: </label>
             <input 
             type="email" 
             placeholder="youremail@gmail.com" 
             name="email" 
             id="email" 
             value={email}
             onChange={(e) => setEmail(e.target.value)}/>
          
           <label htmlFor="Password">Password:</label>
           <input 
           type="password" 
           placeholder="*******" 
           id="password" 
           name="password" 
           value={password}
           onChange={(e) => setPassword(e.target.value)} />          
          <button type="submit">Log in</button>
           </form>
           <button className="link-button" onClick={() => props.onFormSwitch('/registerpage')}>Don't have an account? Register here.</button> 
        </div>
        </>
    )
}

export default LoginPage