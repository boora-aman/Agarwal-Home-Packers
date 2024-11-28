import React from "react";
import delivery from "../assets/delivery.jpg";
import Header from "../assets/Header.jpg";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          We give you complete control of your shipment
        </h1>
      </section>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-2">
          <p className="py-10 text-gray-300">About Us</p>
          <h2 className="text-2xl font-bold mb-4">
            Dedicated to making your move smooth and stress-free.
          </h2>
          <p className="text-gray-600 mb-6">
            Agarwal Home Packers and Movers Dehradun is committed to providing
            exceptional packing and moving services. With over a decade of
            experience, we ensure your move is seamless, safe, and hassle-free.
            Our courteous team of professionals handles every step with care,
            ensuring your belongings reach their destination securely.
          </p>
          <img
            src={delivery}
            alt="Truck on the road"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={Header}
              alt="Movers with boxes"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">
              A Trusted Name in Packing and Moving
            </h2>
            <p className="text-gray-600 mb-6">
              Located at Plot No. 35, Shiv Shakti Colony, Chandrabani,
              Dehradun, we are a certified business (UDYAM-UK-05-0048820)
              offering reliable packing, moving, and storage solutions. Whether
              it's residential or commercial moving, our expertise ensures
              complete satisfaction.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
