import "./Footer.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Footer() {
    gsap.registerPlugin(ScrollTrigger);
    const footerRef = useRef(null);
    useEffect(() => {

    gsap.set(footerRef.current, {
        opacity: 0
    });

    gsap.to(footerRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            once: true
        }
    });

}, []);
    return (
        <footer className="footer" ref={footerRef}>

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