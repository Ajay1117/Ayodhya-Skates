import React from 'react';

const services = [
  {
    id: 1,
    title: 'Personal Coaching',
    description: 'Our one-on-one coaching sessions are tailored to your unique needs, helping you achieve your skating goals with personal guidance and attention.',
    icon: '👨‍🏫', // You can replace with an appropriate icon
  },
  {
    id: 2,
    title: 'School Coaching',
    description: 'We offer specialized coaching programs for schools, focusing on building skating skills while promoting teamwork and discipline among students.',
    icon: '🏫', // You can replace with an appropriate icon
  },
  {
    id: 3,
    title: 'Group Sessions',
    description: 'Join our group sessions for a fun and interactive way to improve your skating. Learn from experienced coaches while skating with friends.',
    icon: '🤝', // You can replace with an appropriate icon
  },
  {
    id: 4,
    title: 'Skating Events',
    description: 'We organize exciting skating events, including competitions, exhibitions, and meetups, for individuals to showcase their talent and passion for skating.',
    icon: '🎉', // You can replace with an appropriate icon
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-gray-800 mb-12">
          Our <span className="text-blue-700">Skating Services</span>
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:translate-y-2"
            >
              {/* Icon or Image */}
              <div className="text-6xl text-blue-700 mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
