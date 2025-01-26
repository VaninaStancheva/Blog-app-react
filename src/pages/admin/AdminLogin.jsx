import './adminLogin.css'

export default function AdminLogin() {
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