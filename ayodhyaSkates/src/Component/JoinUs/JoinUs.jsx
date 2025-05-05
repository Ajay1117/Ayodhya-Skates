import React from 'react';

export default function JoinUs() {
  return (
    <div className="bg-white min-h-screen p-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold mb-8 tracking-wide uppercase">
        <span className='text-blue-600'>Join Our Skating</span> Academy
        </h1>

        {/* Sub Heading */}
        <p className="text-xl text-black mb-12 max-w-3xl mx-auto">
          Are you ready to roll and learn some awesome skating tricks? Whether you're a beginner or looking to improve your skills, our academy is the place for you. Join us today and become part of a community that loves to skate!
        </p>

        {/* Academy Info Box */}
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl mx-auto transition-transform duration-300 hover:scale-105 transform">
          <h2 className="text-4xl font-semibold text-blue-600 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-black mb-6">
            At our Skating Academy, we focus on all skill levels—whether you're just starting or looking to perfect your skating technique. Our experienced instructors are passionate about teaching and will guide you every step of the way.
          </p>

          {/* List of Offers */}
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">What We Offer:</h3>
          <ul className="list-disc list-inside text-lg text-black space-y-4 mb-8">
            <li>Expert Coaching for All Skill Levels</li>
            <li>Fun and Engaging Classes</li>
            <li>Skating Competitions and Events</li>
            <li>Flexible Class Schedules</li>
            <li>A Safe and Supportive Learning Environment</li>
          </ul>

          {/* Call to Action */}
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Join Us Today!</h3>
          <p className="text-lg text-black mb-8">
            Are you ready to start your skating journey with us? Click below to join the Skating Academy and take your first step toward mastering the art of skating!
          </p>

          <div className="text-center">
            {/* Button with Hover and Focus Effects */}
            <a
              href="mailto:contact@skatingacademy.com"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transform transition-all duration-300"
            >
              Join Us Now
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12">
          <p className="text-lg text-black">
            Have any questions? Feel free to{' '}
            <a href="mailto:contact@skatingacademy.com" className="text-blue-500 hover:underline">
              reach out to us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}