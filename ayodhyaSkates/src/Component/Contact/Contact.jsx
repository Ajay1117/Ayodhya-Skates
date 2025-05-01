import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
      {/* Page Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-wide">
          <span className="text-blue-600">Contact</span> Us
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Get in touch with us for any questions, concerns, or inquiries. We’re here to help you on your skating journey!
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Section - Skating Contact Information */}
        <div className="flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Our Team</h2>

          <p className="text-gray-700 text-lg mb-6">
            For any questions regarding skating classes, sessions, or events, feel free to reach out to us:
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-600">
              <span className="text-blue-600 text-xl">📞</span>
              <p className="text-lg font-medium">Phone: 9696575777</p>
            </div>

            <div className="flex items-center space-x-4 text-gray-600">
              <span className="text-blue-600 text-xl">📧</span>
              <p className="text-lg font-medium">Email: ayodhyaskates.info@gmail.com</p>
            </div>

            <div className="flex items-center space-x-4 text-gray-600">
              <span className="text-blue-600 text-xl">🏢</span>
              <p className="text-lg font-medium">Location: RTO Office, Near Transport Nagar, Ayodhya, U.P.</p>
            </div>
          </div>

          <p className="text-gray-700 text-lg mt-6">
            Alternatively, you can use our contact form on the right side for inquiries.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800">Contact for Skating Inquiries</h2>
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 text-lg">Full Name</label>
              <input
                type="text"
                id="name"
                className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 text-lg">Email</label>
              <input
                type="email"
                id="email"
                className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 text-lg">Message</label>
              <textarea
                id="message"
                rows="5"
                className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
