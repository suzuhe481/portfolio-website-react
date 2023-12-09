import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Sections/Intro/Intro";
import About from "../../components/Sections/About/About";
import ProjectsSection from "../../components/Sections/ProjectsSection/ProjectsSection";

import "./App.scss";

function App() {
  return (
    <div className="page__app">
      <Navbar />
      <Intro />
      <About />
      <ProjectsSection />
    </div>
  );
}

export default App;
