import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import { useState } from "react";
import "./App.css";

function App(){
  const [isDarkMode, setIsDarkMode] = useState(false);
  return(
    <>
  <NavBar isDarkMode={isDarkMode}
  toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
  />
  </>
  )
  
}
export default App