import React from 'react';
import Abhijit from '../assets/profile/abhijit.png';
import Sachine from '../assets/profile/sachin.png';
import Pratik from '../assets/profile/pratik.png';
import Aniket from '../assets/profile/aniket.png';
import Chinmay from '../assets/profile/chinmay.png';

function Instructors() {
  const instructors = [
    {
      id: 1,
      name: 'Aniket Gadekar',
      specialty: 'Founder & Guitar Specialist',
      description: 'With over 15 years of mastery, Aniket teaches Western, Classical, and Contemporary guitar to students of all skill levels.',
      image: Aniket, 
    },
    {
      id: 2,
      name: 'Abhijeet D. Gadekar',
      specialty: 'Direction & Cinematography',
      description: 'Abhijeet combines his deep understanding of music with professional videography, creating compelling visual stories.',
      image: Abhijit, 
    },
    {
      id: 3,
      name: 'Sachin Bhalerao',
      specialty: 'Acting',
      description: 'A seasoned actor and producer, Sachin shares invaluable industry insights to help students perfect their craft.',
      image: Sachine, 
    },
    {
      id: 4,
      name: 'Chinmay Naik',
      specialty: 'Keyboard And Piano',
      description: 'Chinmay is a versatile keyboardist who excels at making complex musical theory both accessible and fun for every student.',
      image: Chinmay,
    },
    {
      id: 5,
      name: 'Pratik Kakade',
      specialty: 'Guitarist',
      description: 'Specializing in modern rock and pop, Pratik helps students develop strong technique and find their own unique sound.',
      image: Pratik,
    }
  ];

  return (
    <section id="instructors" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Instructors</h2>
          <p className="text-xl text-gray-600 mb-12 sm:mb-16">
            Expert musicians and performers dedicated to your growth
          </p>
        </div>

        {/* --- Responsive Instructors Container --- */}
        {/* Default: Horizontal scroll with flexbox */}
        {/* lg (large screens): Switches to a 5-column grid */}
        <div className="flex overflow-x-auto space-x-6 pb-4 lg:grid lg:grid-cols-5 lg:gap-8 lg:space-x-0">
          {instructors.map((instructor) => (
            <div 
              key={instructor.id} 
              // Default: Fixed width for scrolling
              // lg: Auto width to fit the grid column
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center w-64 flex-shrink-0 lg:w-auto"
            >
              {/* Instructor Image */}
              <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden mb-5 flex items-center justify-center">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Instructor Details */}
              <h3 className="text-lg font-bold text-gray-800 mb-1">{instructor.name}</h3>
              <p className="text-amber-500 font-semibold text-sm mb-3">{instructor.specialty}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{instructor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructors;