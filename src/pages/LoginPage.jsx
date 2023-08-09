import React, {useState, createContext} from "react"; 
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const api_url = "http://localhost:5174"; //server url

 function LoginPage () {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [errorMessage, setErrorMessage] = useState(undefined); 
   
    const navigate = useNavigate(); 

    const handleEmail = (e) => setEmail(e.target.value); 
    const handlePassword = (e) => setPassword(e.target.value); 

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(email)
        ///here axios 
    try {
        const res = await axios.post(`${api_url}/auth/login`, { email, password });
        console.log("This is your signup response"); 
        
        navigate("/loginpage"); 
    }    catch (err) {
        console.log(err); 
    }
    }; 
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
             onChange={handleEmail}/>
          
           <label htmlFor="Password">Password:</label>
           <input 
           type="password" 
           placeholder="*******" 
           id="password" 
           name="password" 
           value={password}
           onChange={handlePassword} />        
          <button type="submit">Log in</button>
           </form>
           {errorMessage && <p className="error-message">{errorMessage}</p>}
           </div>
           <div>
           <Link to="/registerpage">
           <button className="link-button"> Create an account.</button> 
           </Link>
        </div>
        </>
    )
}

export default LoginPage; 
