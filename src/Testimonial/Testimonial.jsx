// src/TestimonialCarousel.js
import React, { useState } from "react";

const testimonials = [
  {
    text: "The Agarwal Packers and Movers team made my long-distance move seamless. Their professionalism and dedication are unmatched. Highly recommended for anyone looking to move safely and efficiently.",
    name: "Aman Boora",
    imgSrc: "https://via.placeholder.com/40", // Replace with a relevant image if available
  },
  {
    text: "Moving from Delhi to Bangalore seemed daunting, but Agarwal Packers and Movers handled everything with care. From packing to delivery, the experience was flawless. Thank you for such great service!",
    name: "Raman Kumar",
    imgSrc: "https://via.placeholder.com/40", // Replace with a relevant image if available
  },
  {
    text: "As a frequent traveler, I’ve used Agarwal Packers and Movers several times. Their timely and safe service is what keeps me coming back. Their attention to detail sets them apart from others.",
    name: "Ravi Kumar",
    imgSrc: "https://via.placeholder.com/40", // Replace with a relevant image if available
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gray-50 p-20 rounded-lg shadow-lg w-full text-center mb-8">
        <h2 className="text-gray-500 text-xs mb-4">
          WHAT OUR SATISFIED CUSTOMERS SAY ABOUT US
        </h2>
        <p className="text-lg text-gray-900 mb-6">
          {testimonials[activeIndex].text}
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={testimonials[activeIndex].imgSrc}
              alt={testimonials[activeIndex].name}
            />
            <div className="text-left">
              <p className="text-gray-900 font-bold">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[activeIndex].position}
              </p>
            </div>
          </div>
          <div className="flex space-x-2 my-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-orange-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
