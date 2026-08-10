import "./Navbar.css";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function downloadResume() {
        const resume = document.createElement("a");
        resume.href = "/Sanjeeb_Batriya_Resume.pdf";
        resume.download = "Sanjeeb_Batriya_Resume.pdf";
        document.body.appendChild(resume);
        resume.click();
        document.body.removeChild(resume);
    }

    function scrollToSection(id) {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

        setMenuOpen(false);
    }

    return (
        <nav className="navBar">

            <div className="logo">
                Portfolio
            </div>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <ul className={`nav-Links ${menuOpen ? "active" : ""}`}>
                <li onClick={() => scrollToSection("hero")}>
                    Home
                </li>

                <li onClick={() => scrollToSection("about")}>
                    About
                </li>

                <li onClick={() => scrollToSection("skills")}>
                    Skills
                </li>

                <li onClick={() => scrollToSection("projects")}>
                    Projects
                </li>

                <li onClick={() => scrollToSection("contacts")}>
                    Contacts
                </li>

                <li>
                    <button
                        className="mobile-resume-btn"
                        onClick={downloadResume}
                    >
                        Resume
                    </button>
                </li>
            </ul>

            <button
                className="resume-btn"
                onClick={downloadResume}
            >
                Resume
            </button>

        </nav>
    );
}

export default Navbar;