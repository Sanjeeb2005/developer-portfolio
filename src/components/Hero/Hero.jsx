import "./Hero.css";
import profile from "../../assets/images/profile.png";

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
    link.click();

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function Hero(){
    return(
        <section className="hero" id="hero">
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
                <img src={profile}alt="Profile" />
            </div>
        </section>
    );
}

export default Hero;