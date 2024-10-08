// src/components/header/Header.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className={darkMode ? 'dark' : 'light'}>
      <h1>Weather App</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
