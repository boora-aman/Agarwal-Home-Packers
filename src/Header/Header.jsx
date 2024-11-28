import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* Logo Section */}
            <div className="flex space-x-7">
              <div>
                <a className="flex items-center py-4 px-2">
                  <img
                    src={logo}
                    alt="Agarwal Home Packers Logo"
                    className="h-8 w-8 mr-2 rounded-full"
                  />
                  <span className="font-semibold text-gray-500 text-lg">
                    Agarwal Home Packers
                  </span>
                </a>
              </div>
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="py-4 px-2 text-orange-500 border-b-4 border-orange-500 font-semibold"
                >
                  Home
                </Link>
                <Link
                  to="/service"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300"
                >
                  About
                </Link>
              </div>
            </div>
            {/* Call-to-Action Button */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="tel:+916397385558"
                className="py-2 px-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
