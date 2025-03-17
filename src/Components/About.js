import React from "react";
import "../styles.css";
import Priyaa from '../assests/photo.jpeg.jpg' 
const About = () => {
  return (
    <div className="about-container">
      <h1><ul>About Me</ul></h1>
      <img src={Priyaa} alt="Profile" width={300} height={300} />

      <p>
      "I am an aspiring Cloud Engineer with a global certification in Azure, passionate about cloud computing and innovative solutions.
      
      Currently, I am exploring frontend development with React.js to build dynamic and interactive web experiences.
     
       I am also working on a resume categorizer using Python to enhance HR and recruitment processes
       
       . With a strong enthusiasm for learning and problem-solving, I am eager to apply my skills and gain hands-on experience through internship opportunities. 
      
       My goal is to grow in the tech industry by leveraging cloud technologies and development to create impactful solutions."
      </p>
    </div>
  );
};

export default About;