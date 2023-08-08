import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const RegisterPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 
//http://http://localhost:5173/registerpage
//handleRegisterSubmit
  
const handleSignup = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:5005/auth/signup", {
      name,
      email,
      password,
    });
    navigate("/loginpage");
  } catch (error) {
    console.log(error);
  }
};

    return (
      <>
      <div className='register-container'>
        <h1>Sign up</h1>
        <form onSubmit={handleSignup} className='register-form'> 
        <label>Name:</label>
        <input 
        type="name"
        placeholder='Full Name'
        name='name'
        value={name}
        onChange={(e) => {setName(e.target.value);
        }}
        />
      <label>E-mail:</label>
      <input 
      type="email" 
      placeholder='youremail@gmail.com' 
      name='email' 
      id='email' 
      value={email}
      required
      onChange={(e) => {setEmail(e.target.value);
      }} 
      />
      <label>Password:</label>
      <input type="password" 
      placeholder="*******" 
      id='password' 
      name='password' 
      value={password}
      required
      onChange={(e) => {setPassword(e.target.value);
      }} 
      /> 
      <button className="done-btn" type="submit">Done </button>      
        </form>  
 <button className="link-btn" onClick={() => props.onFormSwitch('/loginpage')}>Already have an account? Login here.</button>
 </div>

 

      </>
    );
  };

export default RegisterPage; 