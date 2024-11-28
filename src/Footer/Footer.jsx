import React from "react";
import logo from "../assets/logo.png";  

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between items-center">
          <div className="flex justify-between items-center mb-8 md:mb-0 w-full">
            <div className="flex gap-2 justify-center items-center">
              <img
                src={logo}
                alt="Agarwal Home Packers Logo"
                className="w-16 h-16 mr-3 rounded-full"
              />
              <span className="font-semibold text-gray-500 text-xl">
                Agarwal Home Packers & Movers
              </span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold">+91-6397385558</h2>
              <p className="text-2xl text-gray-700">contact@agarwalhomepacker.in</p>
            </div>
          </div>
          <hr className="my-20 h-[1px] bg-gray-100 w-full" />
          <div className="flex gap-40">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <p className="text-gray-700 mb-4 text-xl font-semibold">
                Experience reliable and stress-free moving services with our
                expert team across India.
              </p>
              <button className="bg-orange-500 text-white py-2 px-4 rounded shadow-lg font-semibold">
                Get a Quote
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <ul className="text-gray-700">
                  <li>
                    <a href="/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/service" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="text-gray-700">
                  <li>
                    <a href="#" className="hover:underline">
                      Household Shifting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Office Relocation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Vehicle Transportation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Storage Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <ul className="text-gray-700">
                  <li>
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          <p>
            &copy; {new Date().getFullYear()} Agarwal Home Packers & Movers | Made
            with{" "}
            <span className="text-red-500">❤️</span> by Aman Boora
          </p>
          <p>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Back to Top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
