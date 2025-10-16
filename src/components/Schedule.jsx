import React from "react";
import details from "../assets/details.jpeg";

function Schedule() {
  return (
    <section className="bg-gray-50 min-h-[90vh] p-8 sm:p-20">
      {/* Main container for the side-by-side layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">
        {/* Column 1: Levels of Learning */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Levels of Learning
          </h2>
          <div className="space-y-6">
            {/* Beginner Card */}
            <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">Beginner</h3>
                <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
                  Level 1
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Foundation building and basic techniques
              </p>
              <div className="w-full bg-green-100 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "33%" }}
                ></div>
              </div>
            </div>
            {/* Intermediate Card */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  Intermediate
                </h3>
                <span className="bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
                  Level 2
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Skill development and performance preparation
              </p>
              <div className="w-full bg-yellow-100 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "66%" }}
                ></div>
              </div>
            </div>
            {/* Advanced Card */}
            <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">Advanced</h3>
                <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
                  Level 3
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Mastery techniques and professional performance
              </p>
              <div className="w-full bg-red-100 rounded-full h-2.5">
                <div
                  className="bg-red-500 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Class Schedule */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Class Schedule
          </h2>
          <div className="text-center">
            <div className="bg-amber-50 rounded-2xl shadow-lg p-8 sm:p-12">
              <div className="flex flex-col items-center">
                <div className="bg-yellow-400 p-3 rounded-lg inline-block mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Weekly Batches
                </h3>
                <p className="text-gray-600 mt-1 mb-6">
                  Structured learning with consistent progress
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 w-full justify-center">
                  <div className="bg-white rounded-lg p-4 w-full sm:w-1/3 shadow-sm border">
                    <p className="font-semibold text-gray-700">Mon To Wed</p>
                    <p className="text-gray-500">6:00 PM</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 w-full sm:w-1/3 shadow-sm border">
                    <p className="font-semibold text-gray-700">Thur To Fri</p>
                    <p className="text-gray-500">6:00 PM</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 w-full sm:w-1/3 shadow-sm border">
                    <p className="font-semibold text-gray-700">Sat And Sun</p>
                    <p className="text-gray-500">6:00 PM</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-8">
                  Flexible timings available for private coaching
                </p>
                <a
                  href={details}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md transition duration-300 inline-block"
                >
                  View Detailed Syllabus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
