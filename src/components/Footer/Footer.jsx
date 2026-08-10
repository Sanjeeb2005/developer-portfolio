import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <h2>Sanjeeb Batriya</h2>

            <p>Full-Stack Developer</p>

            <div className="footer-links">

                <a
                    href="https://github.com/Sanjeeb2005"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/sanjeeb-batriya-46a635359"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>

                <a href="mailto:kitutech479@gmail.com">
                    Email
                </a>

            </div>

            <p className="copyright">
                © 2026 Sanjeeb Batriya. All rights reserved.
            </p>

        </footer>
    );
}

export default Footer;