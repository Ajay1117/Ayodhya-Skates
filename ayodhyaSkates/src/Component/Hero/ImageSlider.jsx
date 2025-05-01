import React from "react";
import { useState, useEffect } from "react";

const images = [
  "./heroSectionImages/1.JPG",
  "./heroSectionImages/2.JPG",
  "./heroSectionImages/3.jpeg",
  "./heroSectionImages/4.JPG",
  "./heroSectionImages/5.jpeg",
  "./heroSectionImages/6.jpeg",
  "./heroSectionImages/7.jpeg",
  "./heroSectionImages/8.jpeg",
  "./heroSectionImages/9.JPG",
  "./heroSectionImages/10.jpeg",
  "./heroSectionImages/11.jpeg",
  "./heroSectionImages/12.JPG",
  "./heroSectionImages/13.JPG",
  "./heroSectionImages/14.JPG",
  "./heroSectionImages/15.JPG",
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Automatically change the slide every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Image Container */}
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
  
        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
          onClick={handleNext}
        >
          &#8594;
        </button>
  
        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageSlider;
