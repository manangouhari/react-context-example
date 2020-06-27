import React, { useContext } from "react";
import Sun from "../icons/Sun";
import Moon from "../icons/Moon";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <button
      className={`theme-btn ${theme}`}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;
