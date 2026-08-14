import "./Skills.css";
import skills from "../../data/skills";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Skills(){
    gsap.registerPlugin(ScrollTrigger);
    const skillsRef = useRef(null);
    useEffect(()=>{
        const cardskill = skillsRef.current.querySelectorAll(".skill-card");
        gsap.set(cardskill, {
            opacity: 0,
            y: 40
        });
        gsap.to(cardskill, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            once: true
    }
});
    },[]);
    return(
        <div className="skills-container" id="skills" ref={skillsRef}>
            <h1>My Skills</h1>
            <div className="skills-grid">
            {
                skills.map((skill)=>(
                    <div key={skill.id} className="skill-card">
                        <p>{skill.name}</p>
                        <p>{skill.category}</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default Skills;