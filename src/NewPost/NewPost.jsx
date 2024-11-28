import React from "react";
import image1 from "../assets/movingboxes.jpg";
import image2 from "../assets/movingboxes1.jpg";
import image3 from "../assets/movingboxes2.jpg";

// News posts specific to Agarwal Home Packers and Movers
const newsPosts = [
  {
    title: "Tips for a Stress-Free Home Relocation",
    date: "26 Nov 2024",
    category: "Moving Tips",
    author: "Agarwal Team",
    imgSrc: image1,
  },
  {
    title: "The Importance of Choosing a Reliable Packing Service",
    date: "15 Nov 2024",
    category: "Insights",
    author: "Agarwal Team",
    imgSrc: image2,
  },
  {
    title: "Awarded Best Packers and Movers in Uttarakhand for 2024",
    date: "01 Nov 2024",
    category: "News",
    author: "Agarwal Team",
    imgSrc: image3,
  },
];

const NewsPost = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <div className="mt-8 w-full max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <header className="w-full text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Latest News & Insights</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest moving tips, industry insights, and company updates.
          </p>
        </header>
        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={post.imgSrc}
                alt={post.title}
              />
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm">By {post.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
