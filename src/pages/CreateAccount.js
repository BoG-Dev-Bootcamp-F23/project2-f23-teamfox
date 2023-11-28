import styles from '../styles/createaccount.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateAccount() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [admin, setAdmin] = useState(false);
    const router = useRouter();

    const handleBlur = (event) => {
        if (event.target.validity.patternMismatch) {
            // error handling
        }
    }

    async function handleSubmit() {
        try {
            await createUser()
            router.push('/login')
        } catch (e) {

        }
    }

    async function createUser() {
        if (password !== confirm) {
            // error handling
        }
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ fullName, email, password, admin })
        })

        if (response.status === 'Failed to create because user exists already') {
            console.log("user exists already")
        } else if (response.status === 'Failed to create because external issues') {
            // what do I do here?
        } else {
            // router.push({
            //     pathname: '/login',
            //     query: {
            //         userID: response.userID,
            //         admin: response.admin
            //     }
            // })
        }
    }

    return (
        <div className={styles.flexbox}>
            <h1 className={styles.title}>Create Account</h1>
            <form className={styles.form}>
                <input type="text" 
                    className={styles.input}
                    id="fullName" 
                    placeholder="Full Name"
                    pattern="^[a-zA-Z]+(\s[a-zA-Z]+)+"
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={handleBlur}
                    required></input>
                <input type="email" 
                    className={styles.input}
                    id="email" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} 
                    onBlur={handleBlur}
                    required></input>
                <input type="password" 
                    className={styles.input}
                    id="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                    required></input>
                <input type="password" 
                    className={styles.input}
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirm(e.target.value)} 
                    required></input>
                <label className={styles.adminText}><input type="checkbox" 
                    className={styles.input}
                    onChange={(e) => setAdmin(!admin)}></input>
                    Admin access</label>
                <button className={styles.button} onClick={() => {
                    handleSubmit();
                }}>Sign up</button>
            </form>
            <p className={styles.bottomNote}>Already have an account? <a className={styles.click} onClick={() => {
                router.push('/login')
            }}>Sign in</a></p>
        </div>
    );
}