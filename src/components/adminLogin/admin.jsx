import './adminLogin.css'
import {useState, useEffect} from "react";
import {Link, Router, Route} from "react-router-dom";
import Homepage from "../../pages/homePage/Homepage.jsx";

export default function AdminLoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(false);


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
            setUser((user) => user);
            return (
                <Router>
                    <Route exact path="/" element={<Homepage/>}/>
                </Router>
            )
        } else {
            setUser((user) => !user);
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
                />
                <label htmlFor="password" className="loginLabel">Password</label>
                <input
                    className="loginInput"
                    type="password"
                    name="password"
                    id="inputPassword"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    user ? (<Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                        <button type="submit" className="loginButton">Login</button>
                    </Link>) : alert("Wrong Username or password!")
                }
            </form>
        </div>
    )
}