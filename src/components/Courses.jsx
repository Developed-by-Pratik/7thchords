import React from "react";

function Courses() {
  const courses = [
    { title: "Guitar", description: "Master chords, strumming, and performance techniques." },
    { title: "Keyboard", description: "Learn from basics to advanced melodies with hands-on practice." },
    { title: "Vocal", description: "Develop your voice and learn professional singing techniques." },
  ];

  return (
    <section id="courses" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Courses</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow w-72">
            <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
