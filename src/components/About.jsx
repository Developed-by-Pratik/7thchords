import React from "react";

function About() {
  return (
    <section id="about" className="text-center py-12 px-4 sm:px-6 md:py-16 bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        About Our Academy
      </h2>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg leading-relaxed md:max-w-3xl mx-auto text-gray-700">
        At 7th Chords Music & Skillearn Academy, we believe every person has the power to create and perform. 
        Our programs in music, acting, and dance are designed to develop skills, boost confidence, and ignite creativity.
        With experienced instructors and modern facilities, we provide hands-on learning and personalized guidance for every student.
        <br /><br />
        Whether you are a beginner or an advanced performer, we help you discover your potential and shine on stage.
        <br /><br />
        Located in Pune and Chh. Sambhajinagar, we have been shaping talented individuals into confident artists — 
        ready to take on any stage with passion and skill. Join us and turn your love for the arts into real performance excellence.
      </p>

      {/* Cards Container */}
      <div className="mt-10 mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-3xl">
        
        {/* Card 1 */}
        <div className="bg-white w-[45%] sm:w-[45%] md:w-[45%] lg:w-[40%] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-[2px]">
          <div className="mb-2">
            <span className="text-3xl sm:text-4xl text-yellow-500">🎵</span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1">Expert Training</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Professional instructors with years of industry experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-[45%] sm:w-[45%] md:w-[45%] lg:w-[40%] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-[2px]">
          <div className="mb-2">
            <span className="text-3xl sm:text-4xl text-blue-500">🤝</span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1">Community</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Join a vibrant community of passionate artists.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;