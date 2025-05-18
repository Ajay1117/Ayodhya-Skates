import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhoneAlt, FaTimes } from 'react-icons/fa';
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
  const [popupVisible, setPopupVisible] = useState(true); // Popup visibility state

  const aboutRef = useRef(null);
  const joinUsRef = useRef(null);
  const achievementsRef = useRef(null);

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
      {/* Popup Image */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button
              onClick={() => setPopupVisible(false)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
            >
              <FaTimes />
            </button>
            <img
              src="./po1.jpeg"
              alt="Popup"
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <nav className="bg-gray-800 p-4 fixed w-full z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-white text-xl font-bold">
            The-Ayodhya-Skates
          </a>
          <ul className="flex space-x-8 relative items-center">
            <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
            <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
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
                  <li><a href="#gallary" className="block px-4 py-2 hover:bg-gray-100">Gallery</a></li>
                </ul>
              )}
            </li>
            <li><a href="#contact" className="text-white hover:text-gray-400">Contact Us</a></li>
            <li><a href="#career" className="text-white hover:text-gray-400">Career</a></li>
          </ul>
        </div>
      </nav>

      <div className="pt-16 flex-1">
        <section id="home" className="min-h-screen bg-blue-200 mb-16"><Hero /></section>
        <section id="services" className="h-auto bg-blue-200 mb-16"><Services /></section>
        <section id="about" className="min-h-screen bg-green-200 mb-16"><About /></section>
        <section id="partners" className="min-h-screen bg-pink-200 mb-16"><Card /></section>
        <section id="coaches" className="min-h-screen bg-red-200 mb-32"><TeamMembers /></section>
        <section id="achievements" className="min-h-screen bg-purple-200 mb-16"><Achievement /></section>
        <section id="contact" className="min-h-screen bg-yellow-200 mb-16"><Contact /></section>
        <section id="gallary" className="min-h-screen bg-orange-200 mb-16"><Gallary /></section>
        <section id="career" className="min-h-screen bg-gray-200 mb-16"><Career /></section>
        <section id="dis" className="min-h-screen bg-teal-200 mb-16"><Discipline /></section>
        <section id="events" className="min-h-screen bg-indigo-200 mb-16"><Events /></section>
        <section id="sponsorship" className="min-h-screen bg-pink-200 mb-16"><Sponsorship /></section>
        <section id="joinus" className="min-h-screen bg-yellow-300 mb-16"><JoinUs /></section>
      </div>

      <footer id="footer" className="bg-gray-800 text-white">
        <Footer />
      </footer>

      {/* Social Media Icons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
        <a
          href="https://wa.me/9696575777"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-500 text-white text-2xl rounded-full shadow-lg hover:scale-110 hover:bg-green-600 transition-transform"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/ayodhyaskates?igsh=YzZuZ3c3cHBkcnp3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white text-2xl rounded-full shadow-lg hover:scale-110 hover:bg-pink-600 transition-transform"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/1AM8j5Hyvy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white text-2xl rounded-full shadow-lg hover:scale-110 hover:bg-blue-700 transition-transform"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Call Us Now Button */}
      <div className="fixed right-4 bottom-4 p-2 z-50">
        <a
          href="tel:+9696575777"
          className="flex items-center bg-blue-500 text-white text-lg font-semibold px-6 py-4 rounded-full shadow-lg hover:scale-105 hover:bg-blue-600 transition-transform"
        >
          <FaPhoneAlt className="mr-2 text-2xl" />
          Call Us Now
        </a>
      </div>
    </div>
  );
}

export default Navbar;
