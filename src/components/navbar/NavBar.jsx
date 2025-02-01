import './navbar.css'
import {Link} from "react-router-dom";

export default function NavBar () {
    const user = true;
    return (
        <div className="navbar">
            <div className="navLeft">
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
                <input className="searchInput" type="text" placeholder="Search" />
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">
                        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
                    </li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    {
                        user ? (
                            <>
                                <li className="navListItem">
                                    <Link to="/write" style={{textDecoration: "none", color: "inherit"}}>WRITE</Link>
                                </li>
                                <li className="navListItem">LOGOUT</li>
                            </>
                        ) : null
                    }
                </ul>
            </div>
            <div className="navRight">
                {
                    user ? (
                        <Link to="/settings">
                            <img className='navImg'
                                 src="../../../public/envato-labs-ai-93cd669d-a337-49b7-bae2-16597d5cc558.jpg"
                                 alt="profile-img"/>
                        </Link>
                    ) : <img className='navImg'
                             src="../../../public/envato-labs-ai-93cd669d-a337-49b7-bae2-16597d5cc558.jpg"
                             alt="profile-img"/>
                }
            </div>
        </div>
    )
}