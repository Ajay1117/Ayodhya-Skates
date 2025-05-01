import React from 'react';

const Vision = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-20 px-8">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-6xl font-extrabold text-gray-800 mb-10 tracking-wide">
          Our <span className="text-blue-600">Vision</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 text-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Inspiring Excellence, Building Communities
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At <span className="text-blue-600 font-semibold">AyodhyaSkates</span>, our vision is to foster a world where skating becomes a symbol of freedom, discipline, and joy. We aim to create a supportive community where individuals can discover their true potential, both on and off the rink.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our commitment is to nurture future champions by providing a platform that encourages creativity, dedication, and a spirit of sportsmanship. Whether you're a beginner taking your first strides or an advanced skater honing your craft, we are here to guide your journey.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Beyond the rink, we envision skating as a medium for personal growth, mental well-being, and building lasting connections. Together, we aim to inspire excellence and leave a legacy of passion and perseverance.
            </p>
          </div>

          {/* Decorative Image */}
          <div className="lg:w-1/2">
            <img
              src="./vi1.webp" // Replace with the appropriate image path
              alt="Vision Illustration"
              className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-gray-800 mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">
                Passion
              </h4>
              <p className="text-gray-700">
                We live and breathe skating, inspiring a love for the sport in everyone we meet.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">
                Excellence
              </h4>
              <p className="text-gray-700">
                From training to events, we strive to achieve the highest standards in everything we do.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">
                Inclusivity
              </h4>
              <p className="text-gray-700">
                Skating is for everyone—our programs are designed to welcome skaters from all walks of life.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">
                Community
              </h4>
              <p className="text-gray-700">
                We aim to create connections and foster friendships that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
