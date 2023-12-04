import React from 'react';

const Relevent = () => {
    return (
      <body class="bg-gray-100 font-sans">
        <div class="container mx-auto mt-8 flex justify-center items-center">
          {/* <!-- Website Statistics Card --> */}
          <div class="bg-white p-8 rounded-lg shadow-md w-64 mr-8">
            <h2 class="text-2xl font-bold mb-4">Website Statistics</h2>
            <div class="flex justify-between items-center mb-4">
              <div>
                <p class="text-gray-600">Total Users</p>
                <p class="text-2xl font-semibold">10</p>
              </div>
              <div>
                <p class="text-gray-600">Total Classes</p>
                <p class="text-2xl font-semibold">8</p>
              </div>
            </div>
            <div>
              <p class="text-gray-600">Total Student Enrollment</p>
              <p class="text-2xl font-semibold">3</p>
            </div>
          </div>

          {/* <!-- Image Section --> */}
          <div>
            <img
              src="https://i.ibb.co/jVcbC3X/Screenshots-3386.jpg"
              alt="Website Image"
              class="w-96 h-auto rounded-lg shadow-md"
            ></img>
          </div>
        </div>
      </body>
    );
};

export default Relevent;