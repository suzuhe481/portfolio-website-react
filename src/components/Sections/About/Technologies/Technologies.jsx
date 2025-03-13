import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Imports of Font Awesome icons
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
// import { faFileCode } from "@fortawesome/free-solid-svg-icons";
// import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

import "./Technologies.scss";

const techData = [
  { name: "HTML", icon: faHtml5, color: "#f06529" },
  { name: "CSS", icon: faCss3, color: "#2965f1" },
  { name: "JavaScript", icon: faJs, color: "#f0db4f" },
  { name: "SCSS", icon: faSass, color: "#cc6699" },
  { name: "React", icon: faReact, color: "#00d8ff" },
  { name: "Node.js", icon: faNode, color: "#3c873a" },
  { name: "Tailwind", icon: faPalette, color: "#a5f3fc" },
  { name: "MongoDB", icon: faDatabase, color: "#589636" },
  { name: "Git", icon: faGitAlt, color: "#F1502F" },
  { name: "GitHub", icon: faGithub, color: "#707070" },
  { name: "Python", icon: faPython, color: "#ffde57" },
  { name: "SQL", icon: faDatabase, color: "#ffffff" },
  { name: "npm", icon: faNpm, color: "#cb3837" },
  { name: "Linux", icon: faLinux, color: "#ee7f53" },
];

const TechCards = techData.map((tech) => {
  // Box shadow for each card in their color.
  const boxShadowStyle = { boxShadow: `4px 4px 5px ${tech.color}` };

  return (
    <ScrollAnimation
      key={tech.name}
      animateIn="fadeIn"
      animateOnce={true}
      duration={2}
    >
      <div className="technologies-container__card" style={boxShadowStyle}>
        <FontAwesomeIcon
          icon={tech.icon}
          className="technologies-container__card__icon"
          style={{ color: tech.color }}
        />
        <div className="technologies-container__card__name">{tech.name}</div>
      </div>
    </ScrollAnimation>
  );
});

const Technologies = () => {
  return (
    <section className="technologies">
      <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
        <div className="technologies__title">Technologies</div>
      </ScrollAnimation>

      <div className="technologies-container">{TechCards}</div>
    </section>
  );
};

export default Technologies;
