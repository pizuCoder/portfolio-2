import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

import NavBar from "./components/Navbar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import Skills from "./components/Skills/SkillSection";
import ProjectPage from "./components/Projects/ProjectPage";
import logo from './components/assets/logo192.png'

function App(){
  const [isDarkMode, setIsDarkMode] = useState(false);
  const footStyle = {
    color: isDarkMode ? "#212529" : "white",
    backgroundColor: isDarkMode ? "white" : "#212529",
    textAlign: "center",
    margin: "2rem auto 0 auto",
    paddingBottom: isDarkMode ? "2rem" : "1rem"
    
  };
  return(
    <div style={{backgroundColor: isDarkMode ? "#fff": "#212529"}}>
      
  <NavBar isDarkMode={isDarkMode}
  toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
  />
  <div
            style={{
              backgroundColor: isDarkMode ? "#B29DF5" : "#322850",
              margin: 0,
            }}
          >
            <LandingPage isDarkMode={isDarkMode} />
            
          </div>
          <div id="skills-section"></div>
          <Skills isDarkMode={isDarkMode} id="skills-section"/>
          <div id="projects-section"></div>
          <ProjectPage isDarkMode={isDarkMode} />
          <div style={footStyle}>
          
            <footer style={footStyle}>
              Made with ❤️ &{" "}
              <i>
                <img
                  src={logo}
                  alt="react logo"
                  style={{ width: "24px", height: "24px", display: "inline" }}
                />
              </i>{" "}
              by Priya Moghe
            </footer>
            </div>
          
  </div>
  )
  
}
export default App