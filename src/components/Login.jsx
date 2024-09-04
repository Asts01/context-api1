import React, { useState, useContext } from 'react';
import userContext from '../context/UserContext';

function Login() {
    const [user, setUser] = useContext(userContext); // Corrected destructuring
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password }); // send data to the context
        console.log(userName);
        console.log(password);

        setPassword("");
        setUserName("");
    };

    return (
        <div className='bg-pink-400'>
            <h2>Login</h2>
            <input
                className='bg-slate-300 gap-3 m-2'
                type="text" placeholder='UserName'
                value={userName}
                onChange={(e) => setUserName(e.target.value)} 
            />
            <input
                className='bg-slate-300'
                type='password' placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button className='bg-green-500 gap-3 m-2 rounded-mdh' onClick={handleSubmit}>
                Submit-credentials
            </button>
        </div>
    );
}

export default Login;

