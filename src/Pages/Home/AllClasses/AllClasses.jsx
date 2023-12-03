import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const AllClasses = () => {
    const axiosSecure = useAxiosSecure();
    // const { user, loading } = useContext(AuthContext);
    const { data: classes = [], refetch } = useQuery({
      queryKey: ["classes"],
      queryFn: async () => {
        const res = await axiosSecure.get("/allClass");
        return res.data;
      },
    });
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes
            .filter((classItem) => classItem.status === "Accepted")
            .map((classItem) => (
              <div
                key={classItem.id}
                className="bg-white p-4 rounded-md shadow-md"
              >
                <img
                  src={classItem.photo}
                  alt={classItem.title}
                  className="mt-2 mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-lg font-semibold mb-2">
                  {classItem.title}
                </h3>
                <p className="text-gray-600">
                  <strong>Name:</strong> {classItem.name}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> {classItem.email}
                </p>
                <p className="text-gray-600">
                  <strong>Price:</strong> {classItem.price}
                </p>
                <p className="text-gray-600">
                  <strong>Description:</strong> {classItem.description}
                </p>
                <p className="text-gray-600">
                  <strong>Total Enroll:</strong> 
                </p>

                <div className="flex justify-center mt-4">
              
                  <Link
                    to={`/dashboard/my-class/${classItem._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
};

export default AllClasses;