import React from 'react';

const Teacher = () => {
    return (
      <body class="bg-gray-100 font-sans">
        <div class="container mx-auto mt-8 flex justify-center items-center">
          {/* <!-- Image Section --> */}
          <div class="mr-8">
            <img
              src="https://i.ibb.co/GxXBxDY/Screenshots-3388.jpg"
              alt="Teacher Image"
              class="max-w-full h-auto rounded-lg shadow-md"
            ></img>
          </div>

          {/* <!-- Text and Button Section --> */}
          <div>
            <h2 class="text-3xl font-bold mb-4">Join Us as a Teacher</h2>
            <p class="text-gray-600 mb-4">
              Are you passionate about teaching? Join our community of educators
              and share your knowledge with students worldwide.
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Start Teaching Today
            </button>
          </div>
        </div>
      </body>
    );
};

export default Teacher;