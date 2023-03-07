import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import { useState } from "react";
import "./App.css";

import LandingPage from "./components/LandingPage/LandingPage";

function App(){
  const [isDarkMode, setIsDarkMode] = useState(false);
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
  </div>
  )
  
}
export default App