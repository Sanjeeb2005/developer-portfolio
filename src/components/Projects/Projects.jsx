import "./Projects.css"
import projects from "../../data/projects"
import ProjectCard from "../ProjectCard/ProjectCard"

function Projects(){
    return (
        <div className="projects">
            <h1 className="project-heading">Feature Project</h1>
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