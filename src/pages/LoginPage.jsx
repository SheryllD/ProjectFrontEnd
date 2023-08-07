import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleSubmit = () => {
        //
    }
    return (
        <>
        <div className="login-container">
        <h1> test </h1>
             <form onSubmit={handleSubmit} className= "login-form">
               
                    <label>

                    </label>
                </form>
            
        </div>
        </>
    )
}

export default LoginPage