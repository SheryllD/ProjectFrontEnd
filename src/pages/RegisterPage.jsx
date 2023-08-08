import axios from 'axios';
import React, {useState} from 'react'
import { Link,  useNavigate } from 'react-router-dom';

function RegisterPage (props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined); 

  const navigate = useNavigate(); 

  const handleEmail = (e) => setEmail(e.target.value);
 // const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  
const handleSignupSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${api_url}/auth/signup`, {
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
        <form onSubmit={handleSignupSubmit} className='register-form'> 
        <label>Name:</label>
        <input 
        type="name"
        placeholder='Full Name'
        name='name'
        value={name}
        onChange={handleName}
       /* onChange={(e) => {setName(e.target.value);
        }} */
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
      /*onChange={(e) => {setEmail(e.target.value);
      }}*/ 
      />
      <label>Password:</label>
      <input type="password" 
      placeholder="*******" 
      id='password' 
      name='password' 
      value={password}
      required
      onChange={handlePassword}
      /*onChange={(e) => {setPassword(e.target.value);
      }} */
      /> 
      <button className="done-btn" type="submit"> Done </button>      
        </form>  
 {/*<button className="link-btn" onClick={() => props.onFormSwitch('/loginpage')}>Already have an account? Login here.</button> */}
 <p>Already have account?</p>
      <Link to={"/loginpage"}> Login</Link>
 </div>
      </>
    );
  };

export default RegisterPage; 