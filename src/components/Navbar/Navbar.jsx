import "./Navbar.css";
import { useEffect,useRef,useState } from "react";
import gsap from "gsap";

function Navbar() {
    const navRef = useRef(null);
    useEffect(() => {

    gsap.set(navRef.current, {
        opacity: 0,
        y: -30
    });

    gsap.to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });

}, []);
    const [menuOpen, setMenuOpen] = useState(false);

    function downloadResume() {
        const resume = document.createElement("a");
        resume.href = "/Sanjeeb_Batriya.pdf";
        resume.download = "Sanjeeb_Batriya.pdf";
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
        <nav className="navBar" ref={navRef}>

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