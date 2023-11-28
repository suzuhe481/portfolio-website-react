import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

function ApplyTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function Projects() {
  ApplyTitle("Projects");

  return (
    <>
      <Navbar />
      <div>Projects Page</div>
    </>
  );
}

export default Projects;
