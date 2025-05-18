import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AGM() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const images = [
    '/ach1.JPG',
    '/galary/8.jpeg',
    '/galary/2.jpeg',
    '/galary/3.jpeg',
    '/heroSectionImages/7.jpeg',
    '/heroSectionImages/8.jpeg',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="text-center py-16">
          <h1 className="text-5xl font-extrabold mb-4"><span className='text-blue-600'>Annual General </span>Meeting (AGM)</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for our Annual General Meeting to reflect on our milestones, present strategic goals, and engage with our vibrant community.
          </p>
        </header>

        {/* Image Carousel */}
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center">AGM Event Highlights</h2>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Slider {...settings}>
              {images.map((src, idx) => (
                <div key={idx}>
                  <img
                    src={src}
                    alt={`AGM Highlight ${idx + 1}`}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Agenda */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Meeting Agenda</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>Welcome Address & Opening Remarks</li>
            <li>Approval of Previous AGM Minutes</li>
            <li>Annual Performance Review & Reports</li>
            <li>Financial Overview & Budget Forecast</li>
            <li>Election of Board Members & Key Roles</li>
            <li>Future Strategic Initiatives & Projects</li>
            <li>Open Floor Discussion & Q&A</li>
          </ul>
        </section>

        {/* Details */}
        <section className="bg-blue-50 py-16 px-6 rounded-xl shadow-inner">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8">Meeting Information</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p><strong>Date:</strong> To be declared</p>
            <p><strong>Time:</strong> 10:00 AM to 1:00 PM</p>
            <p><strong>Venue:</strong> Ayodhya, Uttar
            Pradesh, India</p>
            <p>
              <strong>RSVP:</strong> Kindly confirm your attendance by emailing us at{" "}
              <a href="mailto:contact@yourorganization.com" className="text-blue-600 underline">
                ayodhyaskates.info@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center">
          <p className="text-lg text-gray-700 font-medium">
            We look forward to your valuable participation in shaping our future together.
          </p>
        </footer>
      </div>
    </div>
  );
}
