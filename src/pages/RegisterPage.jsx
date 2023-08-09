import axios from 'axios';
import {useState} from 'react'
import { Link,  useNavigate } from 'react-router-dom';
const api_url = "http://localhost:5005"

function RegisterPage (props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined); 

  const navigate = useNavigate(); 

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  
const handleSignupSubmit = (e) => {
  e.preventDefault();
  const requestBody = {email, password, name}; 
    axios.post(`${api_url}/auth/signup`, requestBody)
    .then((response) => {
      navigate("/login");
    })
    .catch ((error) => {
      const errorDescription = error.response.data.message; 
      setErrorMessage(errorDescription);
  })
}; 
    return (
      <>
      <div className='register-container'>
        <h1>Sign up</h1>
        <form onSubmit={handleSignupSubmit} className='register-form'> 
        
        <label>Name:</label>
        <input 
        type="name"
        placeholder='Full Name'
        name='name'
        value={name}
        onChange={handleName}
        />
      
      <label>E-mail:</label>
      <input 
      type="email" 
      placeholder='youremail@gmail.com' 
      name='email' 
      id='email' 
      value={email}
      required
      onChange={handleEmail}
      />

      <label>Password:</label>
      <input type="password" 
      placeholder="*******" 
      id='password' 
      name='password' 
      value={password}
      required
      onChange={handlePassword}
      /> 
      <button className="done-btn" type="submit"> Submit </button>      
        </form>  
        {errorMessage && <p className="error-message">{errorMessage}</p>}
 <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
 </div>
      </>
    );
  };

export default RegisterPage; 