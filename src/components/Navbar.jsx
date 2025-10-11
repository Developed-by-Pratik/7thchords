import React from "react";
import logoImage from "../assets/logo1.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 sticky top-0 z-50 bg-black backdrop-blur-md border-b-0 border-white/20 shadow-md scroll-smooth">
      <div className="flex items-center gap-4">
        <img src={logoImage} alt="Logo" className="h-16 w-16 object-contain" />
        <h1 className="text-2xl font-bold tracking-wide text-white">7th Chords Music Academy</h1>
      </div>
      <ul className="flex items-center gap-6 scroll-smooth">
        <li><a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a></li>
        <li><a href="#courses" className="text-white hover:text-gray-300 transition-colors">Courses</a></li>
        <li><a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
