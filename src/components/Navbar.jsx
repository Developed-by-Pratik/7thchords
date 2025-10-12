import React, { useState } from "react";
import logoImage from "../assets/main_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-w-[375px] fixed">
      <nav className="flex items-center justify-between bg-black/90 backdrop-blur-sm px-8 py-4 sticky">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="h-12 w-full" />
        </div>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transform transition-transform duration-200 
              ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transform transition-transform duration-200 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-black border-t border-white/10 shadow-lg md:hidden animate-slideDown">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#courses"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
