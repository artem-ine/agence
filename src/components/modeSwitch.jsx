import React, { useState, useEffect } from "react";

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <label htmlFor="darkModeSwitch" className="flex items-center">
      <span className="mr-2">Dark Mode:</span>
      <input
        id="darkModeSwitch"
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
    </label>
  );
};

export default DarkModeSwitch;
