import React from 'react';

const images = [
  "/galary/1.jpg",
  "/galary/2.jpg",
  "/galary/3.jpg",
  "/galary/4.jpeg",
  "/galary/5.jpeg",
  "/galary/6.jpeg",
  "/galary/7.jpeg",
  "/galary/8.jpeg",
  "/galary/9.jpeg",
  "/galary/10.jpeg",
  "/galary/11.jpeg",
  "/galary/12.jpeg",
  "/galary/13.jpeg",
  "/galary/14.jpeg",
  "/galary/15.jpeg",
  "/galary/16.jpeg",
  "/galary/17.jpeg",
  "/galary/18.jpeg",
  "/galary/19.jpeg",
  "/galary/20.jpeg",
  "/galary/24.jpeg",
  "/galary/22.jpeg",
  "/galary/23.jpeg",
  "/galary/21.jpeg",
   "/galary/25.jpeg",
  "/galary/26.jpeg",
  "/galary/27.jpeg"
];

export default function Gallary() {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 ">
          <span className="text-blue-600">IMAGE</span> GALLERY
        </h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Explore our curated collection of images that highlight our moments of excellence and creativity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md bg-white transition-all duration-500"
              style={{ width: '90%', paddingTop: '90%', margin: '0 auto' }} // Moderately large square container
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-gray-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
