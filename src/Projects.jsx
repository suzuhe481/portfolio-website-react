import { useEffect } from "react";

function ApplyTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function Projects() {
  ApplyTitle("Projects");

  return <div>Projects Page</div>;
}

export default Projects;
