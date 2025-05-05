import React from 'react';
import { FaBriefcase, FaHeart, FaStar, FaUsers, FaRocket, FaThumbsUp } from 'react-icons/fa';

const Career = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen font-sans">
      {/* Hero Section (Header) */}
      <div className="relative bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-white py-24 px-6 md:px-20 text-center rounded-b-lg shadow-lg">
        <h1 className="text-5xl font-extrabold leading-tight mb-4 tracking-wide">
          Join Ayodhya Skates
        </h1>
        <p className="text-2xl font-light mb-8">
          Where Passion Meets Purpose on Wheels
        </p>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
      </div>

      {/* Introduction Section */}
      <section className="text-gray-800 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            At Ayodhya Skates, we don't just teach skating—we build futures, instill values, and foster champions.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            We are more than a skating academy—we are a movement dedicated to nurturing champions, inspiring confidence,
            and bringing the joy of skating to every doorstep. Our mission is to shape a generation that excels on the rink
            and grows through sportsmanship.
          </p>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">Explore Career & Collaboration Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 ease-in-out">
              <FaBriefcase className="text-blue-700 mb-4 text-4xl" />
              <h3 className="text-xl font-semibold mb-4">Coaching</h3>
              <p>Lead training sessions, mentor future stars, and build the skating talent of tomorrow.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 ease-in-out">
              <FaUsers className="text-blue-700 mb-4 text-4xl" />
              <h3 className="text-xl font-semibold mb-4">Event Management</h3>
              <p>Plan and execute high-energy events, tournaments, and public showcases with impact.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 ease-in-out">
              <FaRocket className="text-blue-700 mb-4 text-4xl" />
              <h3 className="text-xl font-semibold mb-4">Community Outreach</h3>
              <p>Drive engagement programs and help make skating accessible to every child.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 ease-in-out">
              <FaStar className="text-blue-700 mb-4 text-4xl" />
              <h3 className="text-xl font-semibold mb-4">Academy Operations</h3>
              <p>Support day-to-day functions, scheduling, and execution across training centers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
        <div className="max-w-6xl mx-auto text-center text-gray-700">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">Why Choose Ayodhya Skates?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <FaHeart className="text-blue-700 text-3xl" />
              <div>
                <strong className="text-lg">Purpose-Driven Impact:</strong>
                <p>Transform young lives through the power of skating.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaThumbsUp className="text-blue-700 text-3xl" />
              <div>
                <strong className="text-lg">Passion for Performance:</strong>
                <p>Join a team of professionals driven by love for the sport.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaStar className="text-blue-700 text-3xl" />
              <div>
                <strong className="text-lg">Growth-Oriented Culture:</strong>
                <p>Mentorship, training, and real-world experience to help you grow.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaRocket className="text-blue-700 text-3xl" />
              <div>
                <strong className="text-lg">Innovation on Wheels:</strong>
                <p>We value fresh ideas and forward-thinking in everything we do.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaUsers className="text-blue-700 text-3xl" />
              <div>
                <strong className="text-lg">A Culture of Camaraderie:</strong>
                <p>Supportive, uplifting, and celebratory work environment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaBriefcase className="text-blue-700 text-3xl" />
              <div>
                <strong className="text-lg">Recognition & Rewards:</strong>
                <p>Career growth, acknowledgements, and fulfillment await.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (Footer) */}
      <section className="py-16 px-6 md:px-20 text-center bg-blue-50">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Ready to Roll With Us?</h2>
        <p className="text-xl mb-6">
          Whether you're building a coaching career or bringing skating to your institution—Ayodhya Skates is your platform for impact.
        </p>
        <p className="text-xl"><strong>📞 Call us:</strong> 9696575777</p>
        <p className="text-xl"><strong>📍 Visit us:</strong> RTO Office, Near Transport Nagar, Ayodhya, U.P.</p>
      </section>
    </div>
  );
};

export default Career;
