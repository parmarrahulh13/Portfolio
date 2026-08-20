import "./Home.css";
import heroimg from "./assets/hero-img.png";

function Home() {
  return (
    <section className="Home" style={{ backgroundImage: `url(${heroimg})` }}>
      <div className="Home-content">
        <p className="Home-label">
          <span>●</span> FULL-STACK DEVELOPER
        </p>

        <h1>
          Building digital
          <span> experiences </span>
          that actually work.
        </h1>

        <p className="Home-description">
          I build modern, responsive web applications with React, Node.js,
          Express, and MongoDB — from beautiful interfaces to powerful backend
          systems.
        </p>

        <div className="Home-buttons">
          <button>View My Work →</button>
          <button className="secondary-btn">Let's Talk</button>
        </div>

        <p className="availability">
          <span>●</span> Available for opportunities
        </p>
      </div>
    </section>
  );
}

export default Home;
