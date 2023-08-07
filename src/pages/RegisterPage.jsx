import React, {useState} from 'react'

import React from 'react'

export const RegisterPage = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const handleRegisterSubmit = (e) => {
      e.preventDefault(); 
      console.log(email); 

  return (
    <div>RegisterPage</div>
  )
}
}