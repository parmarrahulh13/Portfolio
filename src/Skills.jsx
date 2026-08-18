import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiC,
} from "react-icons/si";

function Skills() {
  const Skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt /> },
    { id: 3, name: "JavaScript", icon: <FaJs /> },
    { id: 4, name: "React", icon: <FaReact /> },
    { id: 5, name: "Node.js", icon: <FaNodeJs /> },
    { id: 6, name: "Express.js", icon: <SiExpress /> },
    { id: 7, name: "MongoDB", icon: <SiMongodb /> },
    { id: 8, name: "MySQL", icon: <SiMysql /> },
    { id: 9, name: "Git", icon: <FaGitAlt /> },
    { id: 10, name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section className="skills-section">
      <h3>TECHNOLOGIES I WORK WITH</h3>

      <div className="skills">
        {Skills.map((skill) => (
          <div className="tech" key={skill.id}>
            <span className="tech-icon">
              {skill.icon}
            </span>

            <span className="tech-name">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;