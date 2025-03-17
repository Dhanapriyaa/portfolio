import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">🎗️About</Link></li>
        <li><Link to="/projects">💻Projects</Link></li>
        <li><Link to="/contact">📞Contact</Link></li>
        <li><Link to="/Resume1">📃Resume</Link></li>
        <li><Link to="/Blog">📂Blog</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;