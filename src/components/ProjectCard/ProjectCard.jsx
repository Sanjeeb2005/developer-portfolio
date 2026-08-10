import "./ProjectCard.css";

function ProjectCard({data}) {
  return (
    <div className="project-card">
      <div>
        <img src={data.image} className="project-image"/>
        <h2>{data.title}</h2>
        <div className="featured">{data.featured &&(
          <span>⭐ Featured</span>
        )}</div>
      <p>{data.description}</p>
      <div className="tech-stack">
          {data.technologies.map((technology, index)=>(
            <p key={index}>{technology}</p>
          ))}
      </div>
      <div className="project-buttons">
      {data.live &&(
        <a href={data.live} target="_blank" rel="noreferrer">
      Live Demo
      </a>
      )}
      <a href={data.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
      </div>
      </div>
    </div>
  );
}

export default ProjectCard;