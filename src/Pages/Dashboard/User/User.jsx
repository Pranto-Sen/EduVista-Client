

import React, { useState } from "react";
import useAxiosSecure from "./../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const User = () => {
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");
  console.log("seee",searchTerm);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", searchTerm],
    
    queryFn: async () => {
      const res = await axiosSecure.get(
        searchTerm ? `/users?email=${searchTerm}` : "/users"
      );
      return res.data;
    },
  }
  );

  const handleMakeAdmin = (item) => {
    console.log("make ad", item._id);
    axiosSecure.patch(`/users/admin/${item.email}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl pb-4 font-semibold">All User Info</h2>

      {/* Search Box */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Enter email to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded mr-2"
        />
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4">No matching users found.</td>
              </tr>
            ) : (
              users.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  {item.role === "admin" ? (
                    <td className="py-2 px-4 border-b">
                      <button className="bg-orange-500 text-white px-3 py-1 mr-2 rounded">
                        Admin
                      </button>
                    </td>
                  ) : (
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleMakeAdmin(item)}
                        className="bg-green-500 text-white px-3 py-1 mr-2 rounded"
                      >
                        Make Admin
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
