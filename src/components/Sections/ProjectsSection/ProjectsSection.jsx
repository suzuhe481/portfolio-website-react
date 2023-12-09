import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./ProjectsSection.scss";

// Array of projects containing project's name, live demo link, and GitHub link
const projectsData = [
  {
    title: "Battleship",
    demo: "https://battleship.hectorsuazo.com/",
    github: "https://github.com/suzuhe481/battleship",
  },
  {
    title: "CV App Creator",
    demo: "https://cv-app.hectorsuazo.com/",
    github: "https://github.com/suzuhe481/cv-app-creator",
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
];

const ProjectsCards = projectsData.map((project) => {
  return (
    <div key={project.title} className="projects-container__card">
      <div className="projects-container__card__title">{project.title}</div>
      <div className="projects-container__card__links">
        <a href={project.demo}>
          <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
        </a>
        <a href={project.github}>
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
});

const ProjectsSection = () => {
  return (
    <section className="projects">
      <div className="projects__title">Projects</div>
      <div className="projects-container">{ProjectsCards}</div>
    </section>
  );
};

export default ProjectsSection;
