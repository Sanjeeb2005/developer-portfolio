import "./Navbar.css";

function Navbar(){
    return (
        <nav className="navBar">
            <div className="logo">
                Portfolio
            </div>

            <ul className="nav-Links">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
            <button className="resume-btn">
                Resume
            </button>
        </nav>
    );
}

export default Navbar;