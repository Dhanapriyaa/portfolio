import React from "react";
import "../styles.css";
import Priyaa from '../assests/resume.jpg' 

const Resume = () => {
  return (
    <div className="section-box">
      <h1>My Resume</h1>
      <center>
      <img src={Priyaa} alt="Profile" width={600} height={800} />
      </center>
    </div>
  );
};

export default Resume;

