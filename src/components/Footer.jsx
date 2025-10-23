import React from "react";
import { Instagram, Phone, MessageCircleHeart, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Logo and Academy Name */}
        <div className="flex items-center space-x-3 mb-4">
          <img src="/small_logo.png" alt="7th Chords Logo" className="h-12 w-12" />
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wider">
              7th CHORDS
            </h3>
            <p className="text-yellow-400 text-sm sm:text-base tracking-wide">
              Music & SkilLearn Academy
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-300 text-base sm:text-lg italic mb-6">
          "Music brings melody to the world !"
        </p>

        {/* Social Media/Contact Icons */}
        <div className="flex space-x-6 mb-8">
          <a
            href="https://www.instagram.com/7th_chords_music_academy/#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={30} strokeWidth={1.5} />
          </a>
          <a
            href="tel:+917775077248"
            className="relative group text-yellow-400 hover:text-white transition-colors duration-300"
            aria-label="Call"
          >
            {/* Tooltip */}
            <div className="absolute hidden md:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Call +91 77750 77248
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></div>
            </div>
            <Phone size={30} strokeWidth={1.5} />
          </a>
          <a
            href="https://wa.me/917775077248?text=Hello%2C%20I%20want%20to%20know%20more%20about%207th%20Chords%20Academy%20%21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircleHeart size={30} strokeWidth={1.5} />
          </a>
        </div>

        {/* Copyright and Contact Info */}
        <div className="text-gray-400 text-sm flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <p>
            © 2018 7th Chords Music & SkilLearn Academy. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="hidden sm:inline mx-2">|</span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-1">
              {/* This part contains the city names and map pin */}
              <div className="flex items-center justify-center">
                <span>Pune City & Chh. Sambhajinagar:</span>
              </div>

              {/* This part contains the phone numbers */}
              <div className="mt-1 sm:mt-0 flex items-center justify-center">
                <MapPin className="text-red-500 mx-1.5" size={16} />
                <a
                  href="tel:+917775077248"
                  className="hover:text-white transition-colors duration-300"
                >
                  7775077248
                </a>
                <span className="mx-1">|</span>
                <a
                  href="tel:+919595618414"
                  className="hover:text-white transition-colors duration-300"
                >
                  9595618414
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;