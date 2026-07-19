import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('theme', theme);
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const getIcon = () => {
    return theme === 'light' ? <Sun size={18} /> : <Moon size={18} />;
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="btn-secondary theme-toggle-btn" 
      style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      title={`Current Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
    >
      {getIcon()}
    </button>
  );
}

export default ThemeToggle;
