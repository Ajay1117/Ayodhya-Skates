import React from 'react';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import About from '../About/About';
import TeamMembers from '../TeamMembers/TeamMembers';
import Achievement from '../Achievement/Achievement';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Vision from '../Vision/Vision';

function Navbar() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 fixed w-full z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-white text-xl font-bold">
            AyodhyaSkates
          </a>

          {/* Navbar Links */}
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#achievements" className="text-white hover:text-gray-400">
                Achievements
              </a>
            </li>
            <li>
              <a href="#coaches" className="text-white hover:text-gray-400">
                Coaches
              </a>
            </li>
            <li>
              <a href="#partners" className="text-white hover:text-gray-400">
                Our Partners
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="pt-16 flex-1">
        <section id="home" className="min-h-screen bg-blue-200 mb-16">
          <Hero />
        </section>
        <section id="services" className="h-auto bg-blue-200 mb-16">
          <Services />
        </section>
        <section id="about" className="min-h-screen bg-green-200 mb-16">
          <About />
        </section>
        <section id="achievements" className="min-h-screen bg-purple-200 mb-16">
          <Achievement />
        </section>
        <section id="contact" className="min-h-screen bg-yellow-200 mb-16">
          <Contact />
        </section>
        <section id="coaches" className="h-auto bg-red-200 mb-32">
          <TeamMembers />
        </section>
        <section id="partners" className="min-h-screen bg-pink-200 mb-16">
          <Card />
        </section>
        <section id="vision" className="min-h-screen bg-pink-200 mb-16">
          <Vision />
        </section>

      </div>

      {/* Footer Section */}
      <footer id="footer" className="bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default Navbar;
