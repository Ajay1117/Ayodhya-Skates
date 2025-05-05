import React from 'react';

const images = [
  "/galary/1.jpg",
  "/galary/2.jpg",
  "/galary/3.jpg",
  "/galary/4.jpg",
  "/galary/5.jpg",
  "/galary/6.jpg",
  "/galary/7.jpg",
  "/galary/8.jpg",
  "/galary/9.jpg",
  "/galary/10.jpg",
  "/galary/11.jpg",
  "/galary/12.jpg",
  "/galary/13.jpg",
  "/galary/14.jpg",
  "/galary/15.jpg",
  "/galary/16.jpg",
  "/galary/17.jpg",
  "/galary/18.jpg",
  "/galary/19.jpg",
  "/galary/20.jpg"
];

export default function Gallary() {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 ">
          <span className='text-blue-600'>IMAGE</span> GALLERY
        </h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Explore our curated collection of images that highlight our moments of excellence and creativity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md bg-white transition-all duration-500"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-56 object-cover rounded-xl border-2 border-gray-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
