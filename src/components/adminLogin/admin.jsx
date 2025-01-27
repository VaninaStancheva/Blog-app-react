import './adminLogin.css'
import {useState, useEffect} from "react";

export default function AdminLoginComponent () {
    const [username, setUsername] = useState('T.Klasnakov');
    const [password, setPassword] = useState('1234567890');


    useEffect(() => {
        let adminData = {
            username: 'T.Klasnakov',
            password: '1234567890',
        }
        localStorage.setItem('adminData', JSON.stringify(adminData));
    },[password, username]);


    return (
        <div className="adminLogin">
            <h1>Admin Login</h1>
            <form className="adminLoginForm">
                <label htmlFor="username" className="loginLabel">Username</label>
                <input className="loginInput" type="text" name="username" id="inputUsername" placeholder="Username" />
                <label htmlFor="password" className="loginLabel">Password</label>
                <input className="loginInput" type="password" name="password" id="inputPassword" placeholder="Password" />
                <button type="submit" className="loginButton">Login</button>
            </form>
        </div>
    )
}