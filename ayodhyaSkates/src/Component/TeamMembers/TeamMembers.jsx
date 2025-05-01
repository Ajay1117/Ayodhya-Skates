import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Ravinder Kumar',
    position: 'Head Coach',
    description: "Ravinder Kumar, Head Coach and UP's proud inspiration, empowers youth with excellence in skating.",
    photo: './R.jpeg', // image path
  },
  {
    id: 2,
    name: 'Poonam Rawat',
    position: 'Assistant Coach',
    description:
      "Poonam, Assistant Coach, passionately guides young skaters, fostering growth, discipline, and future champions.",
    photo: './p.jpeg', // Replace with the actual image path
  },
  {
    id: 3,
    name: 'Virendra Kumar',
    position: 'Assistant Coach',
    description:
      "Virendra Kumar, Assistant Coach, dedicates his expertise to nurturing talent and inspiring skating excellence.",
    photo: './v.jpeg', // Replace with the actual image path
  },
];

const TeamMembers = () => {
  return (
    <div className="bg-gray-100 py-24 px-6 mt-16">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">
          Meet Our <span className="text-blue-600">Experts</span>
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              {/* Circular Image */}
              <img
                src={member.photo}
                alt={member.name}
                className="w-36 h-36 rounded-full object-cover shadow-lg mb-6"
              />

              {/* Name and Position */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-sm text-blue-600 mb-4">{member.position}</p>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
