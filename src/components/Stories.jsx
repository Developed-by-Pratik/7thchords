import React from "react";

const testimonials = [
  {
    quote: `🎸 I've joined here for Guitar lessons and it's been a fantastic journey. 😊 I'm very happy with the training and the progress I've made. 👨‍🏫 The teachers are really good, patient, and always encourage us to improve. ⭐ Highly recommend joining, especially for Guitar, if you want to learn from passionate instructors and be part of a supportive community.`,
    avatar: "https://placehold.co/100x100/2D3748/E2E8F0?text=AD",
    name: "Amit Desai",
    role: "Guitar Student",
  },
  {
    quote: `🏆 Best coaching with a personal teaching method that adapts to each student's needs. 🎤 Live performance shows and open singing events for students help build confidence and stage presence. 🎹 Best guitar and piano classes with friendly teachers who make learning fun and engaging. I truly enjoy every session and have learned so much.`,
    avatar: "https://placehold.co/100x100/2D3748/E2E8F0?text=SJ",
    name: "Sneha Joshi",
    role: "Dance Student",
  },
  {
    quote: `🌟 It's an absolutely amazing experience to learn here. 🖐️ The finger exercises are really simple and effective, making practice enjoyable for my child. 😊 I would recommend it to any parent looking for quality music education. The staff is caring, and the environment is welcoming, which makes a big difference in my child's enthusiasm for learning.`,
    avatar: "https://placehold.co/100x100/2D3748/E2E8F0?text=RG",
    name: "Rohit Gupta",
    role: "Parent",
  },
];

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard = ({ quote, avatar, name, role }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-4 flex flex-col h-full shadow-md">
      {/* Star Rating */}
      <div className="flex mb-5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-300 mb-6 flex-grow italic">"{quote}"</p>

      {/* Author Info */}
      <div className="flex items-center mt-auto">
        <img
          className="w-12 h-12 rounded-full mr-4 object-cover"
          src={avatar}
          alt={`${name}'s avatar`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/100x100/2D3748/E2E8F0?text=User";
          }}
        />
        <div>
          <p className="font-bold text-white">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

// Main Stories Component
function Stories() {
  return (
    <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Student Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Hear from our talented students and their musical journeys
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stories;
