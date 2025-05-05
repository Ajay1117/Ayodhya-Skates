import React from 'react';

const events = [
  {
    icon: "📍",
    title: "Interschool Skating Championship",
    date: "27th July 2025",
    description:
      "A dynamic competition featuring young talents from local schools. This event kickstarts the season by encouraging school-level participation and sportsmanship.",
  },
  {
    icon: "🇮🇳",
    title: "Independence Day Celebration",
    date: "15th August 2025",
    description:
      "We celebrate the spirit of freedom with skating performances, cultural activities, and community bonding — all on wheels.",
  },
  {
    icon: "🏆",
    title: "1st Open Ayodhya Roller Skating Championship",
    date: "31st August 2025",
    description:
      "Our first open championship welcomes skaters across age groups and skill levels. A fantastic opportunity for new and seasoned skaters to compete and connect.",
  },
  {
    icon: "🥇",
    title: "4th District Skating Championship",
    date: "28th September 2025",
    description:
      "The biggest district event of the year where top skaters race for titles, recognition, and qualification to the state level.",
  },
  {
    icon: "🎯",
    title: "State Championship Qualifiers",
    date: "October 2025",
    description:
      "Top performers from the district will be selected to represent Ayodhya at the Uttar Pradesh State Roller Skating Championship.",
  },
];

export default function EventPage() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center mb-6 tracking-wide">
          <span className='text-blue-600'>Upcoming</span> Skating Event
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          🗓 <span className="font-semibold text-blue-600">2025 Event Calendar</span> <br />
          District Roller Skating Association, Ayodhya
        </p>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{event.icon}</div>
                <h2 className="text-2xl font-semibold text-blue-700 group-hover:text-blue-900 transition-colors duration-300">
                  {event.title}
                </h2>
              </div>
              <p className="text-sm text-gray-500 mb-2 font-medium">
                📅 <span className="text-gray-700">{event.date}</span>
              </p>
              <p className="text-gray-700 text-md leading-relaxed mb-6">
                {event.description}
              </p>

              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300 hover:scale-105">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
