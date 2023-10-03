import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  // State variable to track the current mode (true for dark mode, false for light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="icon">
        <img src="/images/x_large.webp" alt="" />
      </div>
      <div className="input searchbar">
        <input type="text" placeholder="Search by Name or Username..." />
      </div>
      <div className="links">
        {/* Conditionally render dark mode and light mode icons */}
        {isDarkMode ? (
          <i className="bi bi-sun-fill" onClick={toggleDarkMode}></i>
        ) : (
          <i className="bi bi-moon-fill" onClick={toggleDarkMode}></i>
        )}
        <i className="bi bi-twitter-x"></i>
        <i className="bi bi-github"></i>
        <i className="bi bi-discord"></i>
        <p>Contribute ⭐</p>
      </div>
    </div>
  );
}
