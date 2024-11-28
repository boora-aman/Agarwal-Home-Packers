import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Service from "../Service/Service";
import Process from "../Process/Process";
import FAQ from "../FAQ/FAQ";
import Testimonial from "../Testimonial/Testimonial";
import NewsPost from "../NewPost/NewPost";
import Footer from "../Footer/Footer";
import HomeImage from "../assets/Header.jpg";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      {/* <Header /> */}
      
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${HomeImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Reliable and Hassle-Free Packing and Moving Services
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl">
            At Agarwal Home Packers and Movers, we ensure safe and seamless 
            relocation experiences. Trust us with your household, office, 
            or vehicle shifting needs.
          </p>
          <a
            href="/quote"
            className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
      
      {/* Main Content Sections */}
      <About />
      <Service />
      <Process />
      <FAQ />
      <Testimonial />
      <NewsPost />
      
      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
