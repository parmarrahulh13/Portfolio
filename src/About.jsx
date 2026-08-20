import "./About.css";
import Aboutimg from "./assets/About-img.png";

function About() {
  
    const Achievements = [
      { id: 1, name: "Projects", icon:"10+" },
      { id: 2, name: "Growing Every Day", icon: "∞"},
      { id: 3, name: "Full-Stack Focus", icon: "FS"},
    
    ];
  return (
    <section className="About"style={{ backgroundImage: `url(${Aboutimg})` }} >
      <div className="About-content">
        <h1>More than just code.</h1>

        <p className="About-description">
          I'm a Full-Stack Developer focused on creating fast, responsive, and
          user-friendly web applications. I enjoy turning ideas into real
          products — from the first line of frontend code to the backend API
          that powers it.
        </p>
        <hr />
        <div className="Achievements">
          {Achievements.map((Achievement) => (
            <div className="Achievement" key={Achievement.id}>
              <span className="icon">{Achievement.icon}</span>

              <span className="name">{Achievement.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
