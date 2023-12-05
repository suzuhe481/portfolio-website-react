import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Imports of Font Awesome icons
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

import "./Technologies.scss";

const techData = [
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3 },
  { name: "JavaScript", icon: faJs },
];

const TechCards = techData.map((tech) => {
  return (
    <div key={tech.name} className="technologies-container__card">
      <FontAwesomeIcon
        icon={tech.icon}
        className="technologies-container__card__icon"
      />
      <div className="technologies-container__card__name">{tech.name}</div>
    </div>
  );
});

const Technologies = () => {
  return (
    <section className="technologies">
      <div className="technologies-container">{TechCards}</div>
    </section>
  );
};

export default Technologies;
