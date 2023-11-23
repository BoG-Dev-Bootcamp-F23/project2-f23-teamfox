import style from '../styles/CreateAccount.module.css';

export default function CreateAccount() {
    return (
        <div>
            <h1>Create Account</h1>
            <input type="text" id="fullName" placeholder="Full Name"></input>
            <input type="text" id="email" placeholder="Email"></input>
            <input type="text" id="password" placeholder="Password"></input>
            <input type="text" id="confirmPassword" placeholder="Confirm Password"></input>
            <input type="checkbox" id="adminAccess"></input>
            <button>Sign up</button>
            <p>Already have an account? Sign in</p>
        </div>
    );
}