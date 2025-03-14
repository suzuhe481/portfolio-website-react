import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

import "./ProjectsSection.scss";

// Array of projects containing project's name, live demo link, and GitHub link
const projectsData = [
  {
    title: "Blogga",
    demo: "https://www.myblogga.com/",
    github: "https://github.com/suzuhe481/blogga-frontend",
  },
  {
    title: "Typeshift Game",
    demo: "https://typeshift.hectorsuazo.com/",
    github: "https://github.com/suzuhe481/typeshift",
  },
  {
    title: "Video Game Inventory",
    demo: "https://video-game-inventory.glitch.me/inventory",
    github: "https://github.com/suzuhe481/inventory-management",
  },
  {
    title: "Secret Posts",
    demo: "secret-posts.glitch.me",
    github: "https://github.com/suzuhe481/secret-posts",
  },
  {
    title: "Battleship",
    demo: "https://battleship.hectorsuazo.com/",
    github: "https://github.com/suzuhe481/battleship",
  },
  {
    title: "Documentation: React Quick Start Guide",
    demo: "https://github.com/suzuhe481/react-quick-start-guide",
    github: "https://github.com/suzuhe481/react-quick-start-guide",
  },
  {
    title: "Documentation: Node.js/Express Quick Start Guide",
    demo: "https://github.com/suzuhe481/node-express-quick-start-guide",
    github: "https://github.com/suzuhe481/node-express-quick-start-guide",
  },

  {
    title: "Japanese Cuisine Memory Game",
    demo: "https://cuisine-game.hectorsuazo.com",
    github: "https://github.com/suzuhe481/japanese-cuisine-memory-match-game",
  },
  {
    title: "Yard Sale Shopping Cart",
    demo: "https://yardsale.hectorsuazo.com",
    github: "https://github.com/suzuhe481/yard-sale-shopping-cart",
  },
  {
    title: "CV App Creator",
    demo: "https://cv-app.hectorsuazo.com/",
    github: "https://github.com/suzuhe481/cv-app-creator",
  },
];

const ProjectsCards = projectsData.map((project) => {
  return (
    <ScrollAnimation key={project.title} animateIn="fadeIn" animateOnce={true}>
      <div className="projects-container__card">
        <div className="projects-container__card__title">{project.title}</div>
        <div className="projects-container__card__links">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </ScrollAnimation>
  );
});

const ProjectsSection = () => {
  return (
    <section className="projects">
      <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
        <div className="projects__title">Projects</div>
      </ScrollAnimation>
      <div className="projects-container">{ProjectsCards}</div>
    </section>
  );
};

export default ProjectsSection;
