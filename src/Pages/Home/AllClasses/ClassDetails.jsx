import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckOutForm';

const ClassDetails = () => {
    const item = useLoaderData();
      const handleEnroll = () => {
        // Save the item data to local storage
        localStorage.setItem("enrolledItem", JSON.stringify(item));

        // Redirect to the payment page
        window.location.href = "/payment";
      };
    return (
      <div>
        <div className="container flex items-center justify-center mx-auto p-4">
          <div className="w-1/3  gap-4">
            <div key={item.id} className="bg-white p-4 rounded-md shadow-md">
              <img
                src={item.photo}
                alt={item.title}
                className="mt-2 mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">
                <strong>Name:</strong> {item.name}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {item.email}
              </p>
              <p className="text-gray-600">
                <strong>Price:</strong> {item.price}
              </p>
              <p className="text-gray-600">
                <strong>Description:</strong> {item.description}
              </p>
              <p className="text-gray-600">
                <strong>Total Enroll:</strong>
              </p>

              <div className="flex justify-center mt-4">
                <button
                  onClick={handleEnroll}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md"
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ClassDetails;