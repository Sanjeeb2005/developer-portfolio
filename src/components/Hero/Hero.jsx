import "./Hero.css";
import profile from "../../assets/images/profile.png";

function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
                <p className="greeting">
                    👋 Hello, I'm
                </p>
                <h1 className="hero-name">Sanjeeb Batriya</h1>
                <h2 className="hero-role">FullStack Developer</h2>
                <p className="hero-description">I build modern web applications that solve real-world problems.</p>
                <div className="hero-buttons">
                    <button className="primary-btn">View Project</button>
                    <button className="secondary-btn">Download CV</button>
                </div>
            </div>
            <div className="hero-image">
                <img src={profile}alt="Profile" />
            </div>
        </section>
    );
}

export default Hero;