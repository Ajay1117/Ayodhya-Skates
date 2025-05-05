import React from 'react';

export default function About() {
  return (
    <div className="px-6 py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-extrabold text-center mb-16 text-blue-700 tracking-wide">
          ABOUT US
        </h1>

        <div className="text-gray-700 text-lg leading-relaxed mb-12 text-justify">
          <p>
            Ayodhya Skates was founded by a team of highly qualified professional athletes with a passion for sharing their expertise and making professional skating accessible to all children. We are driven by a vision to nurture young skaters and provide them with a comprehensive platform to excel in roller sports. Our mission is to instill core values such as Discipline, Confidence, Health, and Skills, ensuring that every child not only learns to skate but also develops lifelong qualities that extend beyond the skating rink.
          </p>
          <p className="mt-6">
            At Ayodhya Skates, we emphasize both technical training and personal development. Skating is not just a sport; it’s a journey of self-discovery, hard work, and continuous improvement.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-4xl font-bold text-blue-600">Our Vision</h2>
            <p className="text-lg text-gray-600">Inspiring Excellence. Building Communities.</p>
          </div>
          <p className="text-gray-700 mt-6 text-lg text-justify">
            We envision a community where skating symbolizes freedom, discipline, and joy. Our goal is to cultivate a nurturing environment that empowers individuals to unlock their full potential, both on and off the rink.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Our Mission</h2>
          <p className="text-gray-700 text-lg text-justify">
            Through structured training, value-based mentorship, and community engagement, we aim to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 text-lg">
            <li>Unlock Potential: Guide skaters to push beyond their limits and realize their full athletic and personal capabilities.</li>
            <li>Promote Discipline: Instill values of hard work, consistency, and focus that extend beyond the rink.</li>
            <li>Encourage Creativity: Support freedom of expression and innovation in every skater's journey.</li>
            <li>Foster Inclusion: Ensure that our programs welcome and uplift individuals from all walks of life.</li>
            <li>Build Community: Create a strong network of coaches, athletes, and families who grow together.</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
            <div>
              <h3 className="text-xl font-semibold text-blue-500">Passion</h3>
              <p className="text-gray-700">We are deeply passionate about skating and strive to ignite that same enthusiasm in every individual we coach.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-500">Excellence</h3>
              <p className="text-gray-700">We uphold the highest standards in training, mentoring, and competition, continuously pushing the boundaries of what is possible.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-500">Inclusivity</h3>
              <p className="text-gray-700">Our programs are designed to welcome and support individuals of every background and skill level.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-500">Community</h3>
              <p className="text-gray-700">We foster lasting connections and a strong sense of belonging among skaters, parents, and coaches alike.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-200 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img 
              src="/R.jpeg" 
              alt="Founder - Ravinder Kumar" 
              className="w-full h-auto rounded-2xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          <div className="w-full lg:w-1/2 text-gray-700 text-lg leading-relaxed text-justify">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Meet the Founder</h2>
            <p>
              With over 15 years of professional athletic experience and a distinguished career as a national-level skater, our founder Ravinder Kumar brings a wealth of expertise, discipline, and passion to Ayodhya Skates. His journey from elite competition to coaching reflects a deep-rooted commitment to the sport and its transformative power.
            </p>
            <p className="mt-4">
              Through his visionary leadership and hands-on mentorship, he has guided hundreds of aspiring skaters toward success—instilling in them not just technical excellence, but also confidence, resilience, and a winning mindset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
