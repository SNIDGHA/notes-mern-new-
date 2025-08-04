import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="dark-toggle"
      onClick={() => setDarkMode(!darkMode)}
      style={{ marginBottom: '16px', float: 'right' }}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;