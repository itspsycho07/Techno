import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/login', {
            username,
            password
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required value={username} onChange={e => setUsername(e.target.value)}/>

                    <FaUser className="icon"/>

                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)}/>

                    <FaLock className="icon"/>
                </div>

                <div className="remember-forget">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forget password?</a>
                </div>

                <button type="submit"> Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
                <div className="line">

                </div>


                <div className="media-option">
                    <a href="" className="field github">
                        <img src="" alt="" className="github-img"/>
                        <span>Login with GitHub</span>
                    </a>
                </div>

                <div className="media-option">
                    <a href="" className="field linkedin">
                        <img src="./components/Assets/google.png" alt="" className="linkedin-img"/>
                        <span>Login with Linkedin</span>
                    </a>
                </div>


            </form>
        </div>
    );
};

export default Login;