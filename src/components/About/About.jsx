import "./About.css";

function About() {
  return (
    <section className="about" id="about">

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