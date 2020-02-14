import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('dark', true);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's Sports</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};
export default Navbar;
