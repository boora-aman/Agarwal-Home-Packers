import React from 'react'
import { IoArrowDownOutline } from "react-icons/io5";

const PageForAbout = () => {
  const processes = [
    {
      number: "01",
      title: "Excellence",
      description:
        "We are committed to providing the best services, ensuring that your goods are moved with the utmost care and professionalism.",
    },
    {
      number: "02",
      title: "Innovation",
      description:
        "We embrace new technologies and methods to make your moving experience more efficient and secure.",
    },
    {
      number: "03",
      title: "Continuous Learning",
      description:
        "We constantly improve our skills to stay ahead in the industry and offer top-notch moving services.",
    },
    {
      number: "04",
      title: "Integrity",
      description:
        "We believe in transparency and honesty, ensuring that our clients receive what they are promised.",
    },
    {
      number: "05",
      title: "Customer Focus",
      description:
        "We put our customers at the center of everything we do, providing personalized solutions for all your moving needs.",
    },
  ];

  return (
    <>
    <div className="bg-orange-500 h-80 p-10 flex justify-between">
      <div>
        <h1 className="text-white text-5xl font-bold mb-4">
          When it comes to
          <br /> moving, we can
          <br /> do it all
        </h1>
      </div>
      <div className='flex justify-end flex-col'>
        <p className="text-white text-lg font-medium mb-8">
          Explore our comprehensive services designed to
          <br /> ensure swift and secure transportation of your
          <br /> goods
        </p>
        <div className="text-white border border-1 p-2 rounded-full font-medium h-10 w-10 flex justify-center text-center items-center cursor-pointer">
          <IoArrowDownOutline />
        </div>
      </div>
    </div>
    {/*2nd */}
    <div className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          About Agarwal Home Packers and Movers
        </h1>
        <p className="text-lg mb-6">
          Experience the best moving service with our dedicated team, ensuring a smooth transition for all your relocation needs.
        </p>
        <p className="text-base text-gray-600 mb-2">
          Agarwal Home Packers and Movers, with UDYAM Registration Number UDYAM-UK-05-0048820, has been serving customers with excellence in Dehradun and beyond. Our professional team is committed to providing top-quality moving and storage solutions.
        </p>
        <p className="text-base text-gray-600">
          Our address: Plot No.35, Shiv Shakti Colony, Chandrabani, Dehradun, Uttarakhand 248002. Reach us at +91 6397385558, 7818046681 for any inquiries or assistance with your move.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col items-center">
        <img
          src="https://npfulfilment.com/wp-content/uploads/2014/07/shutterstock_99544760-1000x667.jpg"
          alt="Moving company professional"
          className="w-full h-auto mb-6"
        />
        <div className="bg-orange-500 text-white p-6 text-center relative bottom-28 right-28">
          <div className="mb-4">
            <span className="text-3xl font-bold">30</span>
            <p className="text-base">YEARS EXPERIENCE</p>
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold">97%</span>
            <p className="text-base">CUSTOMER REFERRAL RATE</p>
          </div>
          <div>
            <span className="text-3xl font-bold">286+</span>
            <p className="text-base">LOCATIONS WORLDWIDE</p>
          </div>
        </div>
      </div>
    </div>
    {/* 3rd */}
    <div className="flex flex-col items-center justify-between p-8">
      {/* Local Moves Section */}
      <div className="w-full bg-gray-100 py-4 shadow-xl rounded-lg">        
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-5xl font-bold py-20 text-center">
              Equipped to handle local moves of any size
            </h2>
            <img
              src="https://homeinspectorinnj.com/wp-content/uploads/2020/08/familyunpacking.jpg"
              alt="Family moving"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://th.bing.com/th/id/OIP.SD3kGC8-dNTwWs4zY0vGtgHaE8?rs=1&pid=ImgDetMain"
              alt="Family moving"
              className="w-full h-auto rounded-md"
            />
            <h3 className="text-2xl font-bold mb-2">Moving across town with ease</h3>
            <p className="text-base text-gray-600 mb-4">
              Agarwal Home Packers and Movers makes your local move stress-free with expert handling and on-time delivery. Our team is prepared to meet all your needs, no matter the size of the move.
            </p>
            <p className="text-base text-gray-600">
              We pride ourselves on offering professional service with a focus on safety and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Core Team Section */}
      <div className="w-full py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.elearningindustry.com/wp-content/uploads/2018/05/free-ebook-strategies-to-create-compelling-and-immersive-compliance-training-featuring-8-examples.jpeg"
              alt="Edward Noah"
              className="w-40 h-40 mb-4"
            />
            <h3 className="text-lg font-bold">Edward Noah</h3>
            <p className="text-sm text-gray-600">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://th.bing.com/th/id/OIP.MLcCdT0M-Vns6AyJRe57UQHaE7?w=626&h=417&rs=1&pid=ImgDetMain"
              alt="Leonardo Bastian"
              className="w-40 h-40  mb-4"
            />
            <h3 className="text-lg font-bold">Leonardo Bastian</h3>
            <p className="text-sm text-gray-600">VP Manager</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://news.blr.com/app/uploads/sites/3/2017/10/woman-leader.jpg"
              alt="Alex Yuka"
              className="w-40 h-40  mb-4"
            />
            <h3 className="text-lg font-bold">Alex Yuka</h3>
            <p className="text-sm text-gray-600">Director</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://th.bing.com/th/id/OIP.0w3BAd8bGtvkOOFz2mUGJQHaJD?rs=1&pid=ImgDetMain"
              alt="Chris Steffan"
              className="w-40 h-40  mb-4"
            />
            <h3 className="text-lg font-bold">Chris Steffan</h3>
            <p className="text-sm text-gray-600">COO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://th.bing.com/th/id/OIP.wHY5MFnSaXrXH6iNXONzXwHaHa?w=800&h=800&rs=1&pid=ImgDetMain"
              alt="Elwin Domino"
              className="w-40 h-40  mb-4"
            />
            <h3 className="text-lg font-bold">Elwin Domino</h3>
            <p className="text-sm text-gray-600">Lead Manager</p>
          </div>
        </div>
      </div>
    </div>
    {/* 4th */}
    <div className="w-full bg-orange-500 py-20">
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {processes.map((process) => (
            <div key={process.number} className="w-1/2 md:w-1/5 text-center mb-4">
              <h3 className="text-4xl font-bold text-white">{process.number}</h3>
              <p className="text-xl font-semibold">{process.title}</p>
              <p className="text-lg">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default PageForAbout;
