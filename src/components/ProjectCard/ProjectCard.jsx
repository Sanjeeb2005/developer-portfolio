import "./ProjectCard.css";
import  {FiExternalLink}  from "react-icons/fi";

function ProjectCard({data}) {
  return (
    <div className="project-card">
      <div>
        <img src={data.image} className="project-image"/>
        <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button className="project-buttons">
      <a href={data.live} target="_blank" rel="noreferrer">
      Live Demo
      </a>
      <a href={data.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
      </button>
      </div>
    </div>
  );
}

export default ProjectCard;