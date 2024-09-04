import React from "react";
import Logo from "../assets/Movie.svg";
import Avatar from "../assets/Avatar.svg";
import Shape from "../assets/Shape.svg";
import Shape2 from "../assets/Shape2.svg";
import Tv from "../assets/tv.svg";
import Book from "../assets/Bookmark.svg";

const navItems = [
  { href: "#", imgSrc: Shape, alt: "shape icon" },
  { href: "#", imgSrc: Shape2, alt: "shape2 icon" },
  { href: "#", imgSrc: Tv, alt: "tv icon" },
  { href: "/save", imgSrc: Book, alt: "book icon" },
];

function Nav() {
  return (
    <div className="w-24 h-[960px] bg-gray-800 text-white flex flex-col mt-8 ml-8 rounded">
      <div className="flex items-center justify-center h-16">
        <span className="text-2xl font-bold">
          <a href="/">
            <img src={Logo} alt="logo icon" />
          </a>
        </span>
      </div>
      <nav className="flex flex-col items-center mt-6 gap-3">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center justify-center px-6 py-3 hover:bg-gray-700 rounded"
          >
            <img src={item.imgSrc} alt={item.alt} className="text-lg mr-3" />
          </a>
        ))}
      </nav>
      <a href="#">
        <img src={Avatar} alt="avatar icon" className="mt-[550px] mx-auto" />
      </a>
    </div>
  );
}

export default Nav;
