import './navbar.css'

export default function NavBar (){
    return (
        <div className="navbar">
            <div className="navLeft">
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
                <input className="searchInput" type="text" placeholder="Search" />
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">WRITE</li>
                    <li className="navListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="navRight">
                <img className='navImg' src="../../../public/envato-labs-ai-93cd669d-a337-49b7-bae2-16597d5cc558.jpg"
                     alt="profile-img"/>
            </div>
        </div>
    )
}