import React, { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  };

  return (
    <header className="flex justify-between items-center p-4 shadow-[0px_2px_4px_0px_#0000000E] mt-5 rounded-md w-full max-w-screen-xl mx-auto">
      <h1 className="text-xl font-bold">Where in the world?</h1>
      <div className="flex items-center space-x-2">
        <button
          className={`flex items-center space-x-2 px-5 py-2 text-sm font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 ${
            isDarkMode
              ? "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600"
              : "bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:shadow-lg focus:ring-blue-500 focus:ring-opacity-50"
          }`}
          onClick={toggleDarkMode}
          aria-pressed={isDarkMode}
        >
          {isDarkMode ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3v1M12 20v1M4.22 4.22l.71.71M18.36 18.36l.71.71M1 12h1M22 12h1M4.22 19.78l.71-.71M18.36 5.64l.71-.71M6 12a6 6 0 1112 0 6 6 0 01-12 0z"></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path>
            </svg>
          )}
          <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
