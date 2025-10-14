import React from 'react';

// Data for the "Genres Covered" section
const genres = [
  {
    icon: 'ॐ',
    title: 'Hindustani Classical',
    description: 'Traditional Indian classical music forms',
    iconColor: 'text-orange-400',
  },
  {
    icon: '🎵',
    title: 'Western Classical',
    description: 'European classical music traditions',
    iconColor: 'text-yellow-400',
  },
  {
    icon: '🎸',
    title: 'Contemporary & Popular',
    description: 'Modern music styles and genres',
    iconColor: 'text-yellow-400',
  },
];

// Data for the "Learning Modes" section
const learningModes = [
  {
    icon: '🏢',
    title: 'Offline Classes',
    description: 'In-person instruction at our academy',
    iconColor: 'text-red-400',
  },
  {
    icon: '🌐',
    title: 'Online Sessions',
    description: 'Live virtual classes from anywhere',
    iconColor: 'text-blue-400',
  },
  {
    icon: '⭐',
    title: 'Private Coaching',
    description: 'One-on-one personalized instruction',
    iconColor: 'text-yellow-400',
  },
];

// A reusable Card component - it has no fixed width so it can be flexible.
const InfoCard = ({ icon, title, description, iconColor }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-[2px]">
      <div className={`text-3xl mb-4 ${iconColor}`}>{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};


function Learning() {
  return (
    <div className="bg-slate-900 min-h-screen w-full text-center py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      
      {/* This container controls the overall width of the content area */}
      <div className="w-full max-w-5xl lg:max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          
          {/* Genres Column */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-gray-300">Genres Covered</h2>
            {genres.map((item, index) => (
              <InfoCard 
                key={index} 
                icon={item.icon}
                title={item.title}
                description={item.description}
                iconColor={item.iconColor}
              />
            ))}
          </div>

          {/* Learning Modes Column */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-gray-300">Learning Modes</h2>
            {learningModes.map((item, index) => (
              <InfoCard 
                key={index} 
                icon={item.icon}
                title={item.title}
                description={item.description}
                iconColor={item.iconColor}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Learning;