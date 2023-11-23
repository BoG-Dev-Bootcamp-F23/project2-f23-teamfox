import style from '../Login.module.css';

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <input type="text" id="email" placeholder="Email"></input>
            <input type="text" id="password" placeholder="Password"></input>
            <button>Log in</button>
            <p>Don't have an account? Sign up</p>
        </div>
    );
}