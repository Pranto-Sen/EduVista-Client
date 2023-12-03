import React, { useContext } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Proile = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      {/* <p>{loading ? "Loading..." : user.name}</p> */}

      {/* Display user details */}
      {/* <p>{user.email}</p> */}

      {/* Display data from the 'users' array */}
      {users.map((user) => (
        <div key={user.id}>
          {/* <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.role}</p> */}

          <div class=" flex items-center justify-center mt-12">
            <div class="w-1/3 bg-white p-6 rounded-md shadow-md">
              <img
                src={user.photo}
                alt="User Image"
                class="w-20 h-20 rounded-full mx-auto mb-4"
              ></img>

              <h2 class="text-xl font-semibold text-gray-800 mb-2">
                {user.name}
              </h2>
              <p class="text-sm text-gray-600 mb-2">Role: {user.role}</p>
              <p class="text-sm text-gray-600 mb-2">Email: {user.email}</p>
              <p class="text-sm text-gray-600 mb-4">Phone: +{user.phone}</p>
            </div>
          </div>
          {/* Add other properties you want to display */}
        </div>
      ))}
    </div>
  );
};

export default Proile;
