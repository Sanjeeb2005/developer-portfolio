import "./Navbar.css";

function downloadResume(){
    const resume = document.createElement('a');
    resume.href = '../../../public/Sanjeeb_Batriya_Resume.pdf';
    resume.download = 'Sanjeeb_Batriya_Resume.pdf';
    resume.click();

    resume.body.appendChild(resume);
    resume.click();
    resume.body.removeChild(resume);
}

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
            <button className="resume-btn" onClick={downloadResume}>
                Resume
            </button>
        </nav>
    );
}

export default Navbar;