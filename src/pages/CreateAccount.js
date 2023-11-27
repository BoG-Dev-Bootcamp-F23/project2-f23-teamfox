import styles from '../styles/CreateAccount.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateAccount() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [admin, setAdmin] = useState(false);
    // const navigate = useNavigate();

    const handleBlur = (event) => {
        if (event.target.validity.patternMismatch) {
            // error handling
        }
    }

    async function createUser() {
        try {
            // check if an account with this email already exists

            if (password !== confirm) {
                // error handling
            }
            console.log("hihi")
            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({ fullName, email, password, admin })
            })
        } catch (e) {

        }
    }

    return (
        <div >
            <h1>Create Account</h1>
            <form onSubmit={createUser}>
                <input type="text" 
                    id="fullName" 
                    placeholder="Full Name"
                    pattern="^[a-zA-Z]+(\s[a-zA-Z]+)+"
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={handleBlur}
                    required></input>
                <input type="text" 
                    id="email" 
                    placeholder="Email"
                    pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+"
                    onChange={(e) => setEmail(e.target.value)} 
                    onBlur={handleBlur}
                    required></input>
                <input type="text" 
                    id="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                    required></input>
                <input type="text" 
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirm(e.target.value)} 
                    required></input>
                <input type="checkbox" 
                    id="adminAccess"
                    onChange={(e) => setAdmin(!admin)}></input>
                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account? Sign in</p>
        </div>
    );
}