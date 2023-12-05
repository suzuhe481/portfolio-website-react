import Technologies from "./Technologies/Technologies";

import "./About.scss";

const About = () => {
  return (
    <div>
      <section className="about">
        <ul>
          <li>Computer Science, B.S.</li>
          <li>AWS Certified Cloud Practitioner Certification</li>
          <li>Continuously Self-Educated</li>
          <li>Committed to Innovation in Software Engineering</li>
        </ul>
        <Technologies />
      </section>
    </div>
  );
};

export default About;
