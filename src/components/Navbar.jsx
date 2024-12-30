import "./Navbar.css";
import React, { useState } from "react";
// import React, { useState } from "react";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle between themes
  
 
  };

  function color() {}
  return (
    <div className="nav">
      <h1 className="navv">Top Courses</h1>
      
    </div>
  );
}
export default Navbar;


