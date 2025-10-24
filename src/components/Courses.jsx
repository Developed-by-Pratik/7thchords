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
  CircleDot,
  Flame,
  Mic,
  Clapperboard,
  FilePlay,
  ListCheck,
} from "lucide-react";

import GuitarImg from "../assets/avators/instruments/1.png";
import KeyboardImg from "../assets/avators/instruments/2.png";
import DrumsetImg from "../assets/avators/instruments/3.png";
import TablaImg from "../assets/avators/instruments/4.png";
import HarmoniumImg from "../assets/avators/instruments/5.png";
import FluteImg from "../assets/avators/instruments/6.png";
import ActingImg from "../assets/avators/instruments/7.png";
import CinematographyImg from "../assets/avators/instruments/8.png";
import RecordingImg from "../assets/avators/instruments/9.png";
import DanceImg from "../assets/avators/instruments/10.png";
import NewZumbaImg from "../assets/avators/instruments/11.png";
import NewYogaImg from "../assets/avators/instruments/12.png";

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
      { Icon: Wind, text: "Flute" },
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

const detailedSkillsData = [
  {
    image: GuitarImg,
    name: "Guitar",
    points: [
      "Learn acoustic and electric styles.",
      "Master chords, scales, and music theory.",
      "Develop fingerstyle and picking techniques.",
      "Personalized lessons for all skill levels.",
    ],
  },
  {
    image: KeyboardImg,
    name: "Keyboard",
    points: [
      "Read sheet music and play by ear.",
      "Understand harmony and chord progressions.",
      "Explore classical, jazz, and pop genres.",
      "Build strong finger dexterity.",
    ],
  },
  {
    image: DrumsetImg,
    name: "Drumset",
    points: [
      "Master fundamental rudiments and fills.",
      "Develop strong rhythm and timing.",
      "Learn coordination for all four limbs.",
      "Play along to your favorite songs.",
    ],
  },
  {
    image: TablaImg,
    name: "Tabla",
    points: [
      "Learn traditional bols and taals.",
      "Develop hand strength and technique.",
      "Understand Indian classical rhythm.",
      "Accompany vocalists and instrumentalists.",
    ],
  },
  {
    image: HarmoniumImg,
    name: "Harmonium",
    points: [
      "Learn to play chords and melodies.",
      "Accompany yourself or others while singing.",
      "Understand basic Indian music theory.",
      "Practice bellows control and fingering.",
    ],
  },
  {
    image: FluteImg,
    name: "Flute",
    points: [
      "Master proper breathing (embouchure).",
      "Learn Indian (Bansuri) or Western style.",
      "Play scales, melodies, and alankars.",
      "Develop a clear and beautiful tone.",
    ],
  },
  {
    image: ActingImg,
    name: "Acting",
    points: [
      "Develop stage presence and confidence.",
      "Learn voice modulation and diction.",
      "Explore character development.",
      "Practice improvisation and scene work.",
    ],
  },
  {
    image: CinematographyImg,
    name: "Cinematography",
    points: [
      "Understand camera angles and shots.",
      "Master lighting techniques for mood.",
      "Learn principles of composition.",
      "Operate cameras and related gear.",
    ],
  },
  {
    image: RecordingImg,
    name: "Recording",
    points: [
      "Learn to use Digital Audio Workstations (DAW).",
      "Understand microphone placement.",
      "Practice mixing and mastering basics.",
      "Produce high-quality audio tracks.",
    ],
  },
  {
    image: DanceImg,
    name: "Dance",
    points: [
      "Explore styles like Hip Hop & Bollywood.",
      "Improve rhythm, coordination, and stamina.",
      "Learn choreography and routines.",
      "Express yourself through movement.",
    ],
  },
  {
    image: NewZumbaImg,
    name: "Zumba",
    points: [
      "A fun, high-energy dance workout.",
      "Combines Latin and international music.",
      "Improves cardiovascular fitness.",
      "No dance experience required!",
    ],
  },
  {
    image: NewYogaImg,
    name: "Yoga",
    points: [
      "Improve flexibility, strength, and balance.",
      "Learn mindfulness and breathing techniques.",
      "Reduce stress and enhance mental clarity.",
      "Suitable for all fitness levels.",
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
                <img src={item.Icon} alt={item.text} className="h-5 w-5" />
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

const SkillCard = ({ image, name, points }) => {
  return (
    <div className="bg-white rounded-2xl pt-4 shadow-lg flex flex-col w-80 flex-shrink-0 group hover:shadow-xl transition-all duration-300">
      
      {/* Image Area - Added padding-top to give image space */}
      <div className="flex justify-center items-center rounded-2xl h-48 bg-white pb-4">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain transition-all duration-300 ease-in-out 
                     scale-110 
                     group-hover:scale-[1.35] group-hover:-rotate-6 group-hover:drop-shadow-xl"
        />
      </div>
      
      <div className="p-6 pt-0 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          {name}
        </h3>
        {/* 4 Points */}
        <ul className="text-left w-full space-y-3 text-gray-600">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <ListCheck
                className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1"
                strokeWidth={2.5}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Courses() {
  return (
    <>
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

      {/* --- Skill Cards Section --- */}
      <section id="skills" className="bg-gray-50 pb-20">
        <div className="overflow-x-auto mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 pb-4">
            {detailedSkillsData.map((item, index) => (
              <SkillCard
                key={index}
                image={item.image}
                name={item.name}
                points={item.points}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;