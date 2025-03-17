/*import React from "react";

const Projects = () => {
  return <h1>My Projects</h1>;
};

export default Projects;*/

import React from "react";
import "../styles.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-card">
        <h2>Project 1</h2>
        <p>A web application built using React.js and Firebase.</p>
      </div>
      <div className="project-card">
        <h2>Project 2</h2>
        <p>An e-commerce website built with React and Node.js.</p>
      </div>
    </div>
  );
};

export default Projects;