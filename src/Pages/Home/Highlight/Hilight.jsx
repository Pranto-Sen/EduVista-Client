import React from "react";

const Hilight = () => {
  return (
    <body class="bg-gray-100 font-sans">
      <div class="container mx-auto mt-8">
        <h2 class="text-3xl font-bold mb-6">Popular Courses</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* <!-- Course 1 --> */}
          <div class="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <img src="https://i.ibb.co/3Fh45XC/20191209online.jpg"></img>
            <h3 class="text-xl font-semibold mb-2">
              Introduction to Data Science
            </h3>
            <p class="text-gray-600 mb-4">
              Learn the basics of data science and analytics.
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Enroll Now
            </button>
          </div>

          {/* <!-- Course 2 --> */}
          <div class="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <img src="https://i.ibb.co/3Fh45XC/20191209online.jpg"></img>
            <h3 class="text-xl font-semibold mb-2">Web Development Bootcamp</h3>
            <p class="text-gray-600 mb-4">
              Master the skills to become a full-stack web developer.
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Enroll Now
            </button>
          </div>

          {/* <!-- Course 3 --> */}
          <div class="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <img src="https://i.ibb.co/3Fh45XC/20191209online.jpg"></img>
            <h3 class="text-xl font-semibold mb-2">
              Machine Learning Fundamentals
            </h3>
            <p class="text-gray-600 mb-4">
              Explore the core concepts of machine learning.
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Enroll Now
            </button>
          </div>

          {/* <!-- Course 4 --> */}
          <div class="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <img src="https://i.ibb.co/3Fh45XC/20191209online.jpg"></img>
            <h3 class="text-xl font-semibold mb-2">
              Digital Marketing Essentials
            </h3>
            <p class="text-gray-600 mb-4">
              Learn the key strategies for successful digital marketing.
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      </body>
      
  );
};

export default Hilight;
