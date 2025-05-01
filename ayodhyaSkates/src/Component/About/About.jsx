import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-10 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content Section */}
        <div className="md:w-1/2 text-center md:text-left px-6 md:px-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            About <span className="text-blue-500">Us</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Ayodhya Skates was started by highly qualified professional athletes to make professional
            skating accessible to all children. Our mission is to nurture young skaters with discipline,
            sportsmanship, and skill. Our values are <span className="font-semibold text-gray-800">Discipline</span>, 
            <span className="font-semibold text-gray-800"> Confidence</span>, 
            <span className="font-semibold text-gray-800"> Health</span>, 
            and <span className="font-semibold text-gray-800"> Skills</span>.
          </p>

          {/*  border at the bottom */}
          <div className="w-32 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>

          <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="./Askates.webp" // image path
            alt="Ayodhya Skates Team"
            className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
