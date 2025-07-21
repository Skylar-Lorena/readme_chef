import { useEffect, useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      🍳 README Chef
      <div className="header-tagline">Whisk up beautiful markdowns in minutes</div>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
