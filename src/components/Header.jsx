import React, { useContext } from "react";
import { FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full max-w-xs ml-9 bg-white mt-6 dark:bg-[#10141E] rounded">
      <div className="relative flex items-center">
        <FaSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
          aria-label="Search Icon"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full pl-10 bg-gray-100 text-gray-800 dark:bg-[#10141E] dark:text-white outline-none"
          aria-label="Search Input"
        />
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
          aria-label={
            isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
}

export default Header;
