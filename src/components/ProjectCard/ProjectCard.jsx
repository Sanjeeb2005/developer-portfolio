import "./ProjectCard.css";

function ProjectCard({project}){
    return (
        <div className="project-card">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <button>Live Demo</button>
        <button>GitHub</button>
        </div>
    );
}

export default ProjectCard;