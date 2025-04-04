import React, { useState, useEffect } from 'react';

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark-mode');
      window.localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark-mode');
      window.localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label htmlFor="theme-switch" style={{ marginRight: '8px' }}>
        {isDarkMode ? '🌙' : '☀️'}
      </label>
      <input
        id="theme-switch"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ThemeSwitch;

// Asegúrate de añadir las clases CSS correspondientes:
// .dark-mode {
//   background-color: #121212;
//   color: #ffffff;
// }
// 
// body {
//   background-color: #ffffff;
//   color: #000000;
// }
