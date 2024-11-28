import React from "react";
import headerImage from "../assets/Header.jpg"; // Ensure this image is relevant to your business

const Process = () => {
  const processes = [
    {
      number: "01",
      title: "Pre-Move Planning",
      description:
        "Our expert team works with you to assess your needs, determine the best moving plan, and provide a customized quote for your move.",
    },
    {
      number: "02",
      title: "Packing and Loading",
      description:
        "We use high-quality packing materials to ensure the safety of your items. Our team handles all the packing and loading to ensure a smooth start to your move.",
    },
    {
      number: "03",
      title: "In-Transit Monitoring",
      description:
        "Your belongings are tracked in real time. Our drivers follow optimal routes to ensure timely delivery while maintaining the safety of your items.",
    },
    {
      number: "04",
      title: "Unpacking and Setup",
      description:
        "Upon arrival at your new location, we assist with unpacking and setting up your items, ensuring everything is in its place as per your instructions.",
    },
  ];

  return (
    <>
      <div className="bg-orange-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            Some of our relocation processes to help you get moving
          </h2>
          {processes.map((process, index) => (
            <div key={index} className="flex items-center mb-8">
              <div className="text-6xl font-bold mr-6">{process.number}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{process.title}</h3>
                <p className="mt-2">{process.description}</p>
              </div>
              <div className="ml-auto">
                <button className="bg-white text-orange-500 rounded-full w-10 h-10 flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Process;
