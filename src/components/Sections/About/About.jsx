import Technologies from "./Technologies/Technologies";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
        <div className="about__title">About Me</div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
        <ul className="about__list">
          <li>Computer Science, B.S.</li>
          <li>AWS Certified Cloud Practitioner Certification</li>
          <li>Continuously Self-Educated</li>
          <li>Committed to Innovation in Software Engineering</li>
        </ul>
      </ScrollAnimation>
      <Technologies />
    </section>
  );
};

export default About;
