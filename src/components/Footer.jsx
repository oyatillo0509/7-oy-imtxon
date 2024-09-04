import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#facebook"
            className="hover:text-gray-400"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#twitter"
            className="hover:text-gray-400"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#linkedin"
            className="hover:text-gray-400"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
