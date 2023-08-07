import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const RegisterPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
    return (
      <>
      <div className='register-container'>
        <h1>Sign up</h1>
        <form onSubmit={handleRegisterSubmit} className='register-form'> 
        <label>Name:</label>
        <input 
        type="name"
        placeholder='Full Name'
        name='name'
        value={name}
        />
      <label>E-mail:</label>
      <input type="email" placeholder='youremail@gmail.com' name='email' id='email' value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" placeholder="*******" id='password' name='password' value={password}
      onChange={(e) => setPassword(e.target.value)} /> 
      <button className="done-btn" type="submit">Done </button>      
        </form>
 <button className="link-btn" onClick={() => props.onFormSwitch('/loginpage')}>Already have an account? Login here.</button>
 </div>
      </>
    );
  };

export default RegisterPage; 