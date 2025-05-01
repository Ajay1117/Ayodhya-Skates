//           import React from 'react';

// const achievements = [
//   { id: 1, title: 'State Championship', src: './ach1.JPG' },
//   { id: 2, title: 'State Championship', src: './ach42.JPG' },
//   { id: 3, title: 'State Championship', src: './ach23.JPG' },
//   { id: 4, title: 'State Championship', src: './ach4.JPG' }, // New Section
// ];

// const Achievement = () => {
//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
//       {/* Page Heading */}
//       <div className="text-center mb-16">
//         <h1 className="text-5xl font-extrabold text-gray-800 tracking-wide">
//           <span className="text-blue-600">Our</span> Achievements
//         </h1>
//         <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
//           Celebrating milestones of determination and success. Witness the journey of excellence 
//           through the outstanding achievements of our team, driven by passion and commitment.
//         </p>
//       </div>

//       {/* Content Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//         {/* Images Section */}
//         <div className="grid grid-cols-2 gap-6">
//           {achievements.map((achievement) => (
//             <div
//               key={achievement.id}
//               className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             >
//               <img
//                 src={achievement.src}
//                 alt={achievement.title}
//                 className="w-full h-56 object-contain rounded-2xl"  // Change from object-cover to object-contain
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
//                 <h3 className="text-white text-lg font-bold mb-4">{achievement.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Text Content Section */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
//             Milestones That Define Us
//           </h2>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             Over the years, we have achieved remarkable milestones, setting benchmarks of 
//             excellence in every competition. Our team’s dedication and perseverance have 
//             resulted in numerous accolades at the state, national, and international levels.
//           </p>
//           <ul className="mt-6 space-y-4">
//             <li className="flex items-center text-gray-700 text-base">
//               <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
//                 🏅
//               </span>
//               <span>Gold medals in state championships for consecutive years.</span>
//             </li>
//             <li className="flex items-center text-gray-700 text-base">
//               <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
//                 🌟
//               </span>
//               <span>Recognition as the best skating academy nationally.</span>
//             </li>
//             <li className="flex items-center text-gray-700 text-base">
//               <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
//                 🌍
//               </span>
//               <span>Represented at international competitions with pride.</span>
//             </li>
//           </ul>
//           <div className="mt-8">
//             <button className="px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-full shadow-md hover:bg-blue-500 transition-colors duration-300">
//               Explore More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievement;



import React from 'react';

const achievements = [
  { id: 1, title: 'State Championship', src: './ach1.JPG' },
  { id: 2, title: 'State Championship', src: './ach42.JPG' },
  { id: 3, title: 'State Championship', src: './ach23.JPG' },
  { id: 4, title: 'State Championship', src: './ach4.JPG' }, // New Section
];

const Achievement = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
      {/* Page Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-wide">
          <span className="text-blue-600">Our</span> Achievements
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Celebrating milestones of determination and success. Witness the journey of excellence 
          through the outstanding achievements of our team, driven by passion and commitment.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Images Section */}
        <div className="grid grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={achievement.src}
                alt={achievement.title}
                className="w-full h-56 object-contain rounded-2xl"  // Change from object-cover to object-contain
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <h3 className="text-white text-lg font-bold mb-4">{achievement.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Milestones That Define Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Over the years, we have achieved remarkable milestones, setting benchmarks of 
            excellence in every competition. Our team’s dedication and perseverance have 
            resulted in numerous accolades at the State and National levels.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center text-gray-700 text-base">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                🏅
              </span>
              <span>Gold medals in state championships for consecutive years.</span>
            </li>
            <li className="flex items-center text-gray-700 text-base">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                🌟
              </span>
              <span>Recognition as the best skating academy nationally.</span>
            </li>
            <li className="flex items-center text-gray-700 text-base">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                🌍
              </span>
              <span>Represented at State and National competitions with pride.</span>
            </li>
            {/* New content for State Level Academy */}
            <li className="flex items-center text-gray-700 text-base">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                🏆
              </span>
              <span>State Level Academy that has produced numerous State and National Champions.</span>
            </li>
          </ul>
          <div className="mt-8">
            <button className="px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-full shadow-md hover:bg-blue-500 transition-colors duration-300">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;

