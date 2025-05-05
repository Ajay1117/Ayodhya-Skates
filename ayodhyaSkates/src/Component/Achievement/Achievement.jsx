import React from 'react';

const achievements = [
  { id: 1, title: 'State Championship', src: './ach1.JPG' },
  { id: 2, title: 'State Championship', src: './ach42.JPG' },
  { id: 3, title: 'State Championship', src: './ach23.JPG' },
  { id: 4, title: 'State Championship', src: './ach4.JPG' },
];

const Achievement = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-8">
      {/* Page Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight leading-tight">
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
              className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={achievement.src}
                alt={achievement.title}
                className="w-full h-56 object-contain rounded-xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center">
                <h3 className="text-white text-lg font-semibold mb-4">{achievement.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Milestones That Define Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Over the years, we have achieved remarkable milestones, setting benchmarks of excellence 
            in every competition. Our team’s dedication and perseverance have 
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
            <li className="flex items-center text-gray-700 text-base">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                🏆
              </span>
              <span>State Level Academy that has produced numerous State and National Champions.</span>
            </li>
          </ul>
          <div className="mt-8">
            <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* New Section: Our Achievements – Proof of Excellence on Wheels */}
      <div className="mt-16 bg-white shadow-xl rounded-2xl p-8">
        <h3 className="text-4xl font-semibold text-gray-800 mb-6">
          🏆 Our Achievements – Proof of Excellence on Wheels
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          At Ayodhya Skates, we don't just train athletes - we build champions. Our trophy case tells the story, 
          but the real magic happens every day on the rink. Here's what sets us apart:
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center text-gray-700 text-base">
            <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
              🏅
            </span>
            <span>50+ Gold Medals in State Championships</span>
          </li>
          <li className="flex items-center text-gray-700 text-base">
            <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
              🌟
            </span>
            <span>Nationally Recognized as Best Skating Academy</span>
          </li>
          <li className="flex items-center text-gray-700 text-base">
            <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
              🌍
            </span>
            <span>Proudly Representing Our State Nationwide</span>
          </li>
          <li className="flex items-center text-gray-700 text-base">
            <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
              🏆
            </span>
            <span>100+ Champions Trained</span>
          </li>
        </ul>

        {/* Wall of Fame Section */}
        <h4 className="text-3xl font-semibold text-gray-800 mb-4">Wall of Fame</h4>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At Ayodhya Skates, excellence is not just a goal—it’s a consistent outcome. Our skaters continue to shine in prestigious competitions across the state, reflecting the quality of our training and the dedication of our young athletes. Here are some proud milestones that exemplify the impact of our coaching:
        </p>

        <ol className="list-decimal ml-8 space-y-4 text-gray-700">
          <li>
            <strong>Double Gold Glory:</strong> One of our students achieved remarkable success by winning two Gold Medals at the 5th Open State Roller Sporter Championship, while four other students under our guidance reached the semi-final stage, showcasing the strength of our training system.
          </li>
          <li>
            <strong>Dominating the State Stage:</strong> At the 10th UP State Speed Roller Skating Championship held in Noida, 6 of our students were among the 60 participants who qualified for the highly competitive four-day championship—a testament to their discipline and our focused coaching.
          </li>
          <li>
            <strong>District Champions in Multiple Categories:</strong> In a field of nearly 250 participants at the District Roller Skating Competition, our students stood tall:
            <ul className="list-inside list-disc text-gray-600">
              <li>Gold Medal – Under-5 category</li>
              <li>Silver Medal – Under 5 to 7 Girls Open category</li>
              <li>Bronze Medal – Boys Quad category</li>
              <li>Gold Medal – Fancy Inline (5 laps)</li>
              <li>Gold Medal – Combination (5 laps)</li>
              <li>Sweep in Under 7–9 Boys Quad category</li>
            </ul>
          </li>
          <li>
            <strong>Podium Success at the State Open:</strong> In the 4th UP State Open Roller Skating Championship 2023, one of our skaters secured a Bronze Medal, while three others emerged as runners-up, adding another feather to our cap of achievements.
          </li>
          <li>
            <strong>Selection at the Regional Level:</strong> Five of our talented athletes earned selection for the prestigious 5th UP Open State Regional Roller Sporter Competition held in Ghaziabad, further solidifying Ayodhya Skates’ reputation as a powerhouse in roller sports training.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Achievement;