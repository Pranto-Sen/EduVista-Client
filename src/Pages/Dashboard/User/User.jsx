import React from 'react';
import useAxiosSecure from './../../../../hooks/useAxiosSecure';
import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';

const User = () => {
    // const [user]  = useUser()
     const axiosSecure = useAxiosSecure();
     const { data: user = [], refetch } = useQuery({
       queryKey: ["user"],
       queryFn: async () => {
         const res = await axiosSecure.get("/users");
         return res.data;
       },
     });
  
  const handleMakeAdmin = (item) => {
      console.log("make ad" , item._id);
      axiosSecure.patch(`/users/admin/${item._id}`).then((res) => {
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
              {user.map((item, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  {item.role === "admin" ? (
                    <td class="py-2 px-4 border-b">
                      <button
                        class="bg-orange-500 text-white px-3 py-1 mr-2 rounded"
                      >
                        Admin
                      </button>
                    </td>
                  ) : (
                    <td class="py-2 px-4 border-b">
                      <button
                        onClick={() => handleMakeAdmin(item)}
                        class="bg-green-500 text-white px-3 py-1 mr-2 rounded"
                      >
                        Make Admin
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default User;