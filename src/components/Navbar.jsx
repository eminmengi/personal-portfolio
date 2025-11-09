import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isTurkish, setIsTurkish] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 fixed w-full top-0 z-50 bg-light/70 dark:bg-dark/80 backdrop-blur-md shadow-sm">
      <h1 className="text-xl font-bold text-accent">almila</h1>

      <div className="flex items-center gap-4 text-sm font-medium">
        <button
          onClick={() => setIsTurkish(!isTurkish)}
          className="text-gray-800 dark:text-gray-200 hover:text-accent"
        >
          {isTurkish ? "ENGLISH" : "TÜRKÇE’YE GEÇ"}
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs">{darkMode ? "DARK" : "LIGHT"} MODE</span>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                darkMode ? "translate-x-5" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
