import Technologies from "./Technologies/Technologies";

import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about__title">About Me</div>

      <ul className="about__list">
        <li>Computer Science, B.S.</li>
        <li>AWS Certified Cloud Practitioner Certification</li>
        <li>Continuously Self-Educated</li>
        <li>Committed to Innovation in Software Engineering</li>
      </ul>
      <Technologies />
    </section>
  );
};

export default About;
