// import React, { use, useState } from 'react';
// import Hero from '../Hero/Hero';
// import Card from '../Card/Card';
// import About from '../About/About';
// import TeamMembers from '../TeamMembers/TeamMembers';
// import Achievement from '../Achievement/Achievement';
// import Contact from '../Contact/Contact';
// import Services from '../Services/Services';
// import Footer from '../Footer/Footer';
// import Gallary from '../Gallary/Gallary';
// import Career from '../Career/Career';
// import AGM from '../AGM/AGM';
// import Discipline from '../Discipline/Discipline';
// import Events from '../Events/Events';
// import Sponsorship from '../Sponsorship/Sponsorship';
// import JoinUs from '../JoinUs/JoinUs';

// function Navbar() {
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const [joinUsOpen, setjoinUsOpen] = useState(false);
//   const [achievements, setAchievements] = useState(false);
//   return (
//     <div className="flex flex-col min-h-screen">
//       <nav className="bg-gray-800 p-4 fixed w-full z-50 top-0 left-0">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <a href="#home" className="text-white text-xl font-bold">
//             AyodhyaSkates
//           </a>

//           <ul className="flex space-x-8 relative items-center">
//             <li>
//               <a href="#home" className="text-white hover:text-gray-400">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="text-white hover:text-gray-400">
//                 Services
//               </a>
//             </li>


//             <li className="relative flex items-center space-x-2">
//               <button
//                 onClick={() => setAboutOpen(!aboutOpen)}
//                 className="text-white hover:text-gray-400 focus:outline-none"
//               >
//                 About ▾
//               </button>

//               <button
              
//               ></button>

//               {aboutOpen && (
//                 <ul className="absolute top-full mt-2 bg-white text-black rounded shadow-lg w-40 z-50">
//                   <li>
//                     <a href="#about" className="block px-4 py-2 hover:bg-gray-100">
//                       About Us 
//                     </a>
//                   </li>
                 

//                   <li>
//                     <a href="#partners" className="block px-4 py-2 hover:bg-gray-100">
//                       Our Partners
//                     </a>
//                </li>

//                   <li>
//                     <a href="#coaches" className="block px-4 py-2 hover:bg-gray-100">
//                      Coaches
//                     </a>
//                   </li>

//                   <li>
//               <a href="#agm" className="block px-4 py-2 hover:bg-gray-100">
//                 AGM
//               </a>
//             </li>
                  
//                 </ul>
//               )}
//             </li>
            
            
            
            
          
                 

//                   <li>
//               <a href="#dis" className="text-white hover:text-gray-400">
//                 Discipline
//               </a>
//             </li>


//             <li className="relative flex items-center space-x-2">
//               <button
//                 onClick={() => setAchievements(!achievements)}
//                 className="text-white hover:text-gray-400 focus:outline-none"
//               >
//                 Achievements ▾
//               </button>

//               <button
              
//               ></button>

//               {achievements && (
//                 <ul className="absolute top-full mt-2 bg-white text-black rounded shadow-lg w-40 z-50">
//                    <li>
//                     <a href="#achievements" className="block px-4 py-2 hover:bg-gray-100">
//                       Achievements
//                     </a>
//                   </li>
                 

//                   <li>
//                     <a href="#gallary" className="block px-4 py-2 hover:bg-gray-100">
//                       Gallary
//                     </a>
//                   </li>
                  
//                 </ul>
//               )}
//             </li>
           


//             <li className="relative flex items-center space-x-2">
//               <button
//                 onClick={() => setjoinUsOpen(!joinUsOpen)}
//                 className="text-white hover:text-gray-400 focus:outline-none"
//               >
//                 Join Us ▾
//               </button>

//               <button
              
//               ></button>

//               {joinUsOpen && (
//                 <ul className="absolute top-full mt-2 bg-white text-black rounded shadow-lg w-40 z-50">
//                   <li>
//                     <a href="#join" className="block px-4 py-2 hover:bg-gray-100">
//                       Join Us 
//                     </a>
//                   </li>
                 

//                   <li>
//                     <a href="#events" className="block px-4 py-2 hover:bg-gray-100">
//                       Events
//                     </a>
//                </li>

//                <li>
//               <a href="#sponsor" className="block px-4 py-2 hover:bg-gray-100">
//                 Sponsorship
//               </a>
//             </li>
                  
//                 </ul>
//               )}
//             </li>
            
//             <li>
//               <a href="#contact" className="text-white hover:text-gray-400">
//                 Contact Us
//               </a>
//             </li>
//             <li>
//               <a href="#career" className="text-white hover:text-gray-400">
//                 Career
//               </a>
//             </li>
            
//           </ul>
//         </div>
//       </nav>

//       <div className="pt-16 flex-1">
//         <section id="home" className="min-h-screen bg-blue-200 mb-16">
//           <Hero />
//         </section>
//         <section id="services" className="h-auto bg-blue-200 mb-16">
//           <Services />
//         </section>
//         <section id="about" className="min-h-screen bg-green-200 mb-16">
//           <About />
//         </section>
        
//         <section id="achievements" className="min-h-screen bg-purple-200 mb-16">
//           <Achievement />
//         </section>
//         <section id="contact" className="min-h-screen bg-yellow-200 mb-16">
//           <Contact />
//         </section>
//         <section id="coaches" className="h-auto bg-red-200 mb-32">
//           <TeamMembers />
//         </section>
//         <section id="partners" className="min-h-screen bg-pink-200 mb-16">
//           <Card />
//         </section>
//         <section id="gallary" className="min-h-screen bg-pink-200 mb-16">
//           <Gallary />
//         </section>
//         <section id="career" className="min-h-screen bg-pink-200 mb-16">
//           <Career />
//         </section>
//         <section id="agm" className="min-h-screen bg-pink-200 mb-16">
//           <AGM />
//         </section>
//         <section id="dis" className="min-h-screen bg-pink-200 mb-16">
//           <Discipline />
//         </section>

//         <section id="events" className="min-h-screen bg-pink-200 mb-16">
//           <Events />
//         </section>

//         <section id="sponsor" className="min-h-screen bg-pink-200 mb-16">
//           <Sponsorship />
//         </section>

//         <section id="join" className="min-h-screen bg-pink-200 mb-16">
//           <JoinUs />
//         </section>
//       </div>

//       <footer id="footer" className="bg-gray-800 text-white">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState, useRef, useEffect } from 'react';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import About from '../About/About';
import TeamMembers from '../TeamMembers/TeamMembers';
import Achievement from '../Achievement/Achievement';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Gallary from '../Gallary/Gallary';
import Career from '../Career/Career';
import AGM from '../AGM/AGM';
import Discipline from '../Discipline/Discipline';
import Events from '../Events/Events';
import Sponsorship from '../Sponsorship/Sponsorship';
import JoinUs from '../JoinUs/JoinUs';

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [joinUsOpen, setJoinUsOpen] = useState(false);
  const [achievements, setAchievements] = useState(false);

  const aboutRef = useRef(null);
  const joinUsRef = useRef(null);
  const achievementsRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutRef.current && !aboutRef.current.contains(event.target) &&
        joinUsRef.current && !joinUsRef.current.contains(event.target) &&
        achievementsRef.current && !achievementsRef.current.contains(event.target)
      ) {
        setAboutOpen(false);
        setJoinUsOpen(false);
        setAchievements(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 p-4 fixed w-full z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-white text-xl font-bold">
            AyodhyaSkates
          </a>

          <ul className="flex space-x-8 relative items-center">
            <li>
              <a href="#home" className="text-white hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-gray-400">Services</a>
            </li>

            {/* About Dropdown */}
            <li ref={aboutRef} className="relative flex items-center space-x-2">
              <button
                onClick={() => {
                  setAboutOpen(!aboutOpen);
                  setJoinUsOpen(false);
                  setAchievements(false);
                }}
                className="text-white hover:text-gray-400 focus:outline-none"
              >
                About ▾
              </button>
              {aboutOpen && (
                <ul className="absolute top-full mt-2 bg-white text-black rounded shadow-lg w-40 z-50">
                  <li><a href="#about" className="block px-4 py-2 hover:bg-gray-100">About Us</a></li>
                  <li><a href="#partners" className="block px-4 py-2 hover:bg-gray-100">Our Partners</a></li>
                  <li><a href="#coaches" className="block px-4 py-2 hover:bg-gray-100">Coaches</a></li>
                  <li><a href="#agm" className="block px-4 py-2 hover:bg-gray-100">AGM</a></li>
                </ul>
              )}
            </li>

            <li><a href="#dis" className="text-white hover:text-gray-400">Discipline</a></li>

            {/* Achievements Dropdown */}
            <li ref={achievementsRef} className="relative flex items-center space-x-2">
              <button
                onClick={() => {
                  setAchievements(!achievements);
                  setAboutOpen(false);
                  setJoinUsOpen(false);
                }}
                className="text-white hover:text-gray-400 focus:outline-none"
              >
                Achievements ▾
              </button>
              {achievements && (
                <ul className="absolute top-full mt-2 bg-white text-black rounded shadow-lg w-40 z-50">
                  <li><a href="#achievements" className="block px-4 py-2 hover:bg-gray-100">Achievements</a></li>
                  <li><a href="#gallary" className="block px-4 py-2 hover:bg-gray-100">Gallary</a></li>
                </ul>
              )}
            </li>

            {/* Join Us Dropdown */}
            <li ref={joinUsRef} className="relative flex items-center space-x-2">
              <button
                onClick={() => {
                  setJoinUsOpen(!joinUsOpen);
                  setAboutOpen(false);
                  setAchievements(false);
                }}
                className="text-white hover:text-gray-400 focus:outline-none"
              >
                Join Us ▾
              </button>
              {joinUsOpen && (
                <ul className="absolute top-full mt-2 bg-white text-black rounded shadow-lg w-40 z-50">
                  <li><a href="#join" className="block px-4 py-2 hover:bg-gray-100">Join Us</a></li>
                  <li><a href="#events" className="block px-4 py-2 hover:bg-gray-100">Events</a></li>
                  <li><a href="#sponsor" className="block px-4 py-2 hover:bg-gray-100">Sponsorship</a></li>
                </ul>
              )}
            </li>

            <li><a href="#contact" className="text-white hover:text-gray-400">Contact Us</a></li>
            <li><a href="#career" className="text-white hover:text-gray-400">Career</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content Sections */}
      <div className="pt-16 flex-1">
        <section id="home" className="min-h-screen bg-blue-200 mb-16"><Hero /></section>
        <section id="services" className="h-auto bg-blue-200 mb-16"><Services /></section>
        <section id="about" className="min-h-screen bg-green-200 mb-16"><About /></section>
        <section id="achievements" className="min-h-screen bg-purple-200 mb-16"><Achievement /></section>
        <section id="contact" className="min-h-screen bg-yellow-200 mb-16"><Contact /></section>
        <section id="coaches" className="h-auto bg-red-200 mb-32"><TeamMembers /></section>
        <section id="partners" className="min-h-screen bg-pink-200 mb-16"><Card /></section>
        <section id="gallary" className="min-h-screen bg-pink-200 mb-16"><Gallary /></section>
        <section id="career" className="min-h-screen bg-pink-200 mb-16"><Career /></section>
        <section id="agm" className="min-h-screen bg-pink-200 mb-16"><AGM /></section>
        <section id="dis" className="min-h-screen bg-pink-200 mb-16"><Discipline /></section>
        <section id="events" className="min-h-screen bg-pink-200 mb-16"><Events /></section>
        <section id="sponsor" className="min-h-screen bg-pink-200 mb-16"><Sponsorship /></section>
        <section id="join" className="min-h-screen bg-pink-200 mb-16"><JoinUs /></section>
      </div>

      <footer id="footer" className="bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default Navbar;
