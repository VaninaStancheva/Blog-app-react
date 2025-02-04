import './adminLogin.css'
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function AdminLoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        let adminData = {
            username: 'Klasnakov',
            password: '1234567890'
        };
        localStorage.setItem('adminData', JSON.stringify(adminData));
    }, []);


    const submitLogin = (e) => {
        e.preventDefault();
        const getLoginData = JSON.parse(localStorage.getItem("adminData"));
        if (getLoginData.username === username && getLoginData.password === password) {
            navigate("/");
        } else {
            alert("Invalid username or password!");
        }
    }


    return (
        <div className="adminLogin">
            <h1>Admin Login</h1>
            <form onSubmit={submitLogin} className="adminLoginForm">
                <label htmlFor="username" className="loginLabel">Username</label>
                <input className="loginInput"
                       type="text"
                       name="username"
                       id="inputUsername"
                       placeholder="Username"
                       onChange={(e) => setUsername(e.target.value)}
                       value={username}
                />
                <label htmlFor="password" className="loginLabel">Password</label>
                <input
                    className="loginInput"
                    type="password"
                    name="password"
                    id="inputPassword"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type="submit" className="loginButton">Login</button>
            </form>
        </div>
    )
}