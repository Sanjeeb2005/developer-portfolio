import "./Hero.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProfileImage from "../../assets/images/profile.png";
import { MdOpacity } from "react-icons/md";

function handleViewProjects(){
    const projectsSection = document.getElementById('projects');
    if(projectsSection){
        projectsSection.scrollIntoView({behavior: "smooth"});
    }
}

function handleDownloadCV(){
    const link = document.createElement('a');
    link.href = '/Sanjeeb_Batriya_Resume.pdf';
    link.download = 'Sanjeeb_Batriya_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function Hero(){
    const heroRef = useRef(null);
    useEffect(()=>{
        const elements = heroRef.current.children;
        gsap.set(elements, {
            opacity: 0,
            y: 30
        });
        gsap.to(elements,{
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
        const image = heroRef.current.querySelector(".hero-image img");
        gsap.set(image,{
            scale: 0.8,
            opacity: 0
        });
        gsap.to(image,{
            scale: 1,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            ease: "power2.out"
        });
    }, []);
    return(
        <section className="hero" id="hero" ref={heroRef}>
            <div className="hero-content">
                <p className="greeting">
                    👋 Hello, I'm
                </p>
                <h1 className="hero-name">Sanjeeb Batriya</h1>
                <h2 className="hero-role">Full-Stack Developer</h2>
                <p className="hero-description">I build modern web applications that solve real-world problems.</p>
                <div className="hero-buttons">
                    <button className="primary-btn" onClick={handleViewProjects}>View Project</button>
                    <button className="secondary-btn" onClick={handleDownloadCV}>Download CV</button>
                </div>
            </div>
            <div className="hero-image">
                <img src={ProfileImage}alt="Profile" />
            </div>
        </section>
    );
}


export default Hero;