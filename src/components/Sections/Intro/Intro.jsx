import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

import "./Intro.scss";

const Intro = () => {
  return (
    <div>
      <section className="intro">
        <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
          <h2>Hi! My name is</h2>
          <div className="intro__name">
            <h1>Hector Suazo</h1>
          </div>
          <h2>Software Developer</h2>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default Intro;
