import React from 'react';

const disciplines = [
  {
    title: 'Speed Skating',
    about: 'Speed skating is all about the thrill of racing, combining velocity with precision. Skaters compete in both quad and inline skates, tackling events over multiple distances on indoor and outdoor tracks. The sport demands an aerodynamic stance, powerful strides, and balance through sharp turns.',
    unique: 'Ideal for skaters who crave competition and are determined to develop both speed and stamina.',
    benefits: 'Improves cardiovascular fitness, muscle strength, and mental toughness.'
  },
  {
    title: 'Artistic Skating',
    about: 'Artistic skating blends dance, gymnastics, and figure skating. Skaters perform choreographed routines to music, featuring spins, jumps, and intricate footwork. This includes solo, pair, and team events.',
    unique: 'Appeals to those with a creative flair and love for performance, emphasizing rhythm, expression, and style.',
    benefits: 'Enhances balance, coordination, grace, and self-expression.'
  },
  {
    title: 'Roller Hockey',
    about: 'Roller hockey adapts ice hockey to roller skates, using sticks to control a ball or puck. The game is fast-paced, requiring strategic passing and teamwork.',
    unique: 'Perfect for skaters who enjoy competition and collaboration.',
    benefits: 'Builds cardiovascular fitness, agility, and reflexes.'
  },
  {
    title: 'Inline Hockey',
    about: 'Played on inline skates, inline hockey emphasizes puck control and skating skills on hard surfaces.',
    unique: 'Requires exceptional balance and coordination.',
    benefits: 'Strengthens core and leg muscles, enhances strategy and coordination.'
  },
  {
    title: 'Inline Freestyle',
    about: 'Skaters perform tricks, spins, and jumps around cones or in designated areas.',
    unique: 'Celebrates style and personal creativity.',
    benefits: 'Builds agility, leg strength, and balance.'
  },
  {
    title: 'Inline Alpine',
    about: 'Like alpine skiing on wheels, skaters navigate slalom courses on downhill slopes.',
    unique: 'Great for those who love technical challenges and speed.',
    benefits: 'Develops reaction time, focus, and leg strength.'
  },
  {
    title: 'Inline Downhill',
    about: 'Skaters race down steep slopes at high speeds without gates.',
    unique: 'For thrill-seekers seeking challenge and adrenaline.',
    benefits: 'Builds strength, control, and mental resilience.'
  },
  {
    title: 'Roller Derby',
    about: 'A contact sport where teams score by lapping opponents while blockers defend.',
    unique: 'Fosters team spirit and endurance.',
    benefits: 'Improves physical fitness, toughness, and cooperation.'
  },
  {
    title: 'Roller Freestyle',
    about: 'Involves tricks and jumps on ramps, rails, and park obstacles.',
    unique: 'Encourages pushing limits with innovation and stunts.',
    benefits: 'Boosts strength, agility, and creativity.'
  },
  {
    title: 'Skateboarding',
    about: 'Performing tricks in parks or street environments using a skateboard.',
    unique: 'Thrives on self-expression and breaking boundaries.',
    benefits: 'Improves balance, agility, and perseverance.'
  }
];

export default function Discipline() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16 px-6 lg:px-24">
      <h1 className="text-5xl font-extrabold text-center mb-12 tracking-wide"> <span className='text-blue-600'>Disciplines</span> in Roller Sports</h1>
      <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 mb-16">
        Roller sports offer a vast world of possibilities, encompassing speed, skill, artistry, and athleticism. Each discipline presents a unique challenge, allowing skaters to discover their passion, express themselves, and excel.
        The Uttar Pradesh Roller Skating Association (UPRSA) proudly promotes all major roller sports, supporting athletes in discovering and advancing in the discipline that inspires them.
      </p>
      
      <div className="grid gap-10 md:grid-cols-2">
        {disciplines.map((d, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 transition duration-300 hover:shadow-2xl border-t-4 border-blue-600"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{d.title}</h2>
            <p className="text-gray-700 mb-3"><span className="font-semibold text-blue-600">About:</span> {d.about}</p>
            <p className="text-gray-700 mb-3"><span className="font-semibold text-blue-600">Why It’s Unique:</span> {d.unique}</p>
            <p className="text-gray-700"><span className="font-semibold text-blue-600">Benefits:</span> {d.benefits}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
