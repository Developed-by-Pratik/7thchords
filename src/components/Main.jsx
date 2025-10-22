import React, {useEffect} from "react";
import BgImage from "../assets/club_playing_small.jpg";
import { Guitar, Phone, GraduationCap, Music4, Star } from "lucide-react";

function Main() {

  const phoneNumber = "919595618414";
  const message =
    "Hello, I want to join the course !\n Name :\n City : \n Course : ";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center md:justify-start px-6 md:px-20 py-12 text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl space-y-5 text-center md:text-left animate-fadeSlide">
        {/* Logo/Icon + Heading */}
        <div className="flex items-center justify-center md:justify-start gap-1">
          <img src="/small_logo.png" className="h-[2.6rem]" alt="7th Chords Logo"></img>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            7th{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              CHORDS
            </span>
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
          Music & SkilLearn Academy
        </h2>

        <p className="text-lg font-medium text-gray-300">
          Music brings melody to the world !
        </p>

        <p className="text-sm md:text-lg text-gray-400 leading-relaxed">
          Discover your musical journey with expert instruction in Guitar,
          Keyboard, Drums, and more. Plus Acting and Dance programs to unleash
          your artistic potential.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
          <button
            onClick={handleClick}
            className="flex items-center gap-2 bg-gradient-to-r from-[#f8b400] to-[#e4a300] hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 text-black font-bold px-6 py-3 rounded-full transition-all duration-300"
          >
            <Music4 size={20} />
            Book Your Spot Now
          </button>

          <a
            href="tel:+917775077248"
            className="group relative flex items-center gap-2 bg-black/20 border border-gray-600 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 backdrop-blur-sm"
          >
            <Phone size={18} />
            Call Now

            {/* Tooltip */}
            <div className="absolute hidden md:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Call +91 77750 77248
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></div>
            </div>
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 pt-6 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <GraduationCap size={20} className="text-yellow-400" /> 2500+
            Students
          </div>
          <div className="flex items-center gap-2">
            <Guitar size={20} className="text-yellow-400" /> Expert Instructors
          </div>
          <div className="flex items-center gap-2">
            <Star size={20} className="text-yellow-400" /> 5-Star Rated
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;