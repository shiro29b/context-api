import React, { useState } from 'react'

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit=()=>{

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' />
        <input type="text" placeholder='password' />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login