import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Sections/Intro/Intro";
import About from "../../components/Sections/About/About";
import ProjectsSection from "../../components/Sections/ProjectsSection/ProjectsSection";
import Contact from "../../components/Sections/Contact/Contact";

import "./App.scss";

function App() {
  return (
    <div className="page__app">
      <Navbar />
      <Intro />
      <About />
      <ProjectsSection />
      <Contact />
    </div>
  );
}

export default App;
