import React from "react";
import Mastery from "../assets/avators/mastery.png";
import Zumba from "../assets/avators/zumba.png";
import {
  Music,
  Guitar,
  Piano,
  Drum,
  Wind,
  Hand,
  Drama,
  MicVocal,
  Video,
  AudioLines,
  UserCog,
  Zap,
  Heart,
  Star,
  CircleDot,
  Flame,
  Mic,
  Clapperboard,
  FilePlay
} from "lucide-react";

const coursesData = [
  {
    MainIcon: Music,
    title: "Music",
    items: [
      { Icon: Guitar, text: "Guitar (Primary Focus)" },
      { Icon: Piano, text: "Keyboard/Piano" },
      { Icon: Mic, text: "Vocals And Singing" },
      { Icon: Hand, text: "Tabla, Harmonium" },
      { Icon: Drum, text: "Drums" },
      { Icon: Wind, text: "Flute" }
    ],
  },
  {
    MainIcon: Drama,
    title: "Acting",
    items: [
      { Icon: MicVocal, text: "Stage Performance" },
      { Icon: Video, text: "Screen Acting" },
      { Icon: AudioLines, text: "Voice Modulation" },
      { Icon: UserCog, text: "Character Development" },
      { Icon: Clapperboard, text: "Cinematography" },
      { Icon: FilePlay, text: "Video Editing" },
    ],
  },
  {
    MainIcon: Flame,
    title: "Dance",
    items: [
      { Icon: Heart, text: "Bollywood Dance" },
      { Icon: CircleDot, text: "Contemporary" },
      { Icon: Zap, text: "Hip Hop" },
      { Icon: Mastery, text: "Yoga" },
      { Icon: Zumba, text: "Zumba" },
    ],
  },
];

const CourseCard = ({ MainIcon, title, items }) => {
  const handleClick = () => {
    const phoneNumber = "919595618414";
    const message = `Hello, I want to join the ${title} course!\nName : \nCity : `;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-all duration-300 scale-[1.02] hover:-translate-y-[2px]">
      <div className="bg-yellow-100 rounded-full p-4 mb-4">
        <MainIcon className="h-8 w-8 text-yellow-600" strokeWidth={2} />
      </div>
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
        {title}
      </h3>
      <ul className="text-left w-full space-y-3 mb-8 text-gray-600">
        {items.map((item, index) => {
          const isImage = typeof item.Icon === "string";

          return (
          <li key={index} className="flex items-center gap-3">
              {isImage ? (
                <img src={item.Icon} alt={item.text} className="h-5 w-5 text-yellow-500" />
              ) : (
                <item.Icon
                  className="h-5 w-5 text-yellow-500"
                  strokeWidth={2.5}
                />
              )}
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={handleClick}
        className="mt-auto bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg w-full hover:bg-yellow-500 transition-colors duration-300"
      >
        Enroll Now
      </button>
    </div>
  );
};

function Courses() {
  return (
    <section id="courses" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
        Courses Offered
      </h2>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our comprehensive range of artistic programs
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course, index) => (
          <CourseCard
            key={index}
            MainIcon={course.MainIcon}
            title={course.title}
            items={course.items}
          />
        ))}
      </div>
    </section>
  );
}

export default Courses;