import "./About.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  gsap.registerPlugin(ScrollTrigger);
  const aboutRef = useRef(null);
    useEffect(()=>{
      const left = aboutRef.current.querySelector(".about-left");
      const right = aboutRef.current.querySelector(".about-right");
      const cards = aboutRef.current.querySelector(".info-card");
      gsap.set(left, {
        opacity: 0,
        x: -50
    });
    gsap.set(right, {
      opacity: 0,
      x: 50
    });

    gsap.to(left, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            once: true
        }
    });
    gsap.to(right, {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        once: true
      }
    });
    gsap.set(cards, {
      opacity: 0,
      y: 30
    });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        once: true
      }
    });
    }, []);
    return (
    <section className="about" id="about" ref={aboutRef}>

      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        <div className="about-left">
          <img
            src="https://placehold.co/350x400"
            alt="About"
          />
        </div>

        <div className="about-right">

          <h3>Who Am I?</h3>

          <p>
            I'm a Full Stack Developer passionate about creating modern,
            responsive and user-friendly web applications. I enjoy solving
            real-world problems through technology and continuously learning
            new skills.
          </p>

          <div className="about-info">

            <div className="info-card">
              <h4>Experience</h4>
              <p>IT Engineer</p>
            </div>

            <div className="info-card">
              <h4>Education</h4>
              <p>Bachelor of Technology</p>
            </div>

            <div className="info-card">
              <h4>Location</h4>
              <p>Odisha, India</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;