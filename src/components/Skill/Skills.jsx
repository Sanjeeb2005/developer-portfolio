import "./Skills.css";
import skills from "../../data/skills";

function Skills(){
    return(
        <div className="skills-container">
            <h1>My Skills</h1>
            {
                skills.map((skill)=>(
                    <div key={skill.id} className="skill-card">
                        <p>{skill.name}</p>
                        <p>{skill.category}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Skills;