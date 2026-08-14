import "./Projects.css"
import projects from "../../data/projects"
import ProjectCard from "../ProjectCard/ProjectCard"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Projects(){
    gsap.registerPlugin(ScrollTrigger);
    const projectsRef = useRef(null);
    useEffect(()=>{
        const cards = projectsRef.current.querySelectorAll(".project-card");
        gsap.set(cards, {
            opacity: 0,
            y: 40
        });
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            once: true
    }
});
    },[])
    return (
        <div className="projects" id="projects" ref={projectsRef}>
            <h1 className="project-heading">Feature Projects</h1>
            <div className="project-container">
            {
                projects.map((item)=>(
                    <ProjectCard key = {item.id} data = {item}/>
                ))
            }
            </div>
        </div>
    );
}

export default Projects;