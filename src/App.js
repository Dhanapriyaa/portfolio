/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import Resume1 from "./Components/Resume1";
import Blog from "./Components/Blog";
import FloatingScreen from "./Components/FloatingScreen";



const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
        
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Resume1" element={<Resume1 />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/FloatingScreen" element={<FloatingScreen />} />                
      </Routes>

      <div>
      <FloatingScreen />
      <h1>My Portfolio</h1>
      <p>Welcome to my website.</p>
    </div>
    </Router>
  );
};


export default App;



