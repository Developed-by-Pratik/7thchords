import React, { useState } from "react";
import { Instagram } from "lucide-react";
import logoImage from "../assets/main_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "919595618414";
  const message = "Hi, I would like to enquire about courses and batches. \nName : \nCity : \nCourse : ";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-black/80 backdrop-blur-sm px-8 py-4 z-50 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-12">
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
              href="#instructors"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Instructors
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transform transition-transform duration-200 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
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

        {/* Interactive Buttons */}
        <div className="hidden md:flex items-center justify-center gap-4">
          <button className="text-white hover:text-gray-300 transition-colors">
            <a
              href="https://www.instagram.com/7th_chords_music_academy/#"
              target="_blank"
            >
              <Instagram />
            </a>
          </button>
          <button onClick={handleClick}
            className="px-6 py-2 rounded-full text-white 
        backdrop-blur-xl bg-white/10 border border-white/30 hover:bg-white/20 
        hover:scale-101 transition-all duration-500 ease-in-out"
          >
            Enquire Now
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-[72px] left-0 w-full bg-black border-t border-white/10 shadow-lg md:hidden animate-slideDown z-40">
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
                href="#instructors"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300"
              >
                Instructors
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

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="pt-[72px]" />
    </>
  );
}

export default Navbar;
