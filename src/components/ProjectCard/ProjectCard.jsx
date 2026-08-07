import "./ProjectCard.css";

function ProjectCard({data}) {
  return (
    <div className="project-card">
      <div>
        <img src={data.image} className="project-image"/>
        <h2>{data.title}</h2>
        <p>{data.featured &&(
          <span>⭐ Featured</span>
        )}</p>
      <p>{data.description}</p>
      <div className="tech-stack">
          {data.technologies.map((technology, index)=>(
            <p key={index}>{technology}</p>
          ))}
      </div>
      <button className="project-buttons">
      {data.live &&(
        <a href={data.live} target="_blank" rel="noreferrer">
      Live Demo
      </a>
      )}
      <a href={data.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
      </button>
      </div>
    </div>
  );
}

export default ProjectCard;