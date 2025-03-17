import React from "react";
import "../styles.css";
import Priyaa from '../assests/resume.jpg' 

const Resume = () => {
  return (
    <div className="section-box">
      <h1>My Resume</h1>
      <center>
      <img src={Priyaa} alt="Profile" width={300} height={300} />
      </center>
    </div>
  );
};

export default Resume;