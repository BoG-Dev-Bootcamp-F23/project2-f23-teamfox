import styles from '../styles/Login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    async function login() {
        const result = await fetch('/api/user/verify', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input type="text" 
                    id="email" 
                    placeholder="Email"
                    pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+"
                    onChange={(e) => setEmail(e.target.value)} 
                    required></input>
                <input type="text" 
                    id="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                    required></input>
                <button>Log in</button>
            </form>
            <p>Don't have an account? Sign up</p>
        </div>
    );
}