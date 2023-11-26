import style from '../styles/CreateAccount.module.css';
import {useState} from 'react';

export default function CreateAccount() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [admin, setAdmin] = useState(false);

    async function createUser() {
        let errorExists = false
        let errorString = ''
        try {
        //     if (fullName === '') {
        //         errorExists = true
        //         errorString += " fullName"
        //     }
        //     if (email === '') {
        //         errorExists = true
        //         errorString += " email"
        //     }
        //     if (password === '') {
        //         errorExists = true
        //         errorString += " password"
        //     }
        //     if (confirm === '') {
        //         errorExists = true
        //         errorString += " confirm"
        //     }
            if (password !== confirm) {
                errorExists = true
            }

            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({ fullName, email, password, admin })
            })
        } catch (e) {

        }
    }

    return (
        <div>
            <h1>Create Account</h1>
            <form action={createUser}>
                <input type="text" 
                    id="fullName" 
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                    required></input>
                <input type="text" 
                    id="email" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} 
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
                    onChange={(e) => setAdmin(!admin)}
                    required></input>
                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account? Sign in</p>
        </div>
    );
}