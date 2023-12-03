import React, { useContext } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AllClass = () => {
     const axiosSecure = useAxiosSecure();
    //  const { user, loading } = useContext(AuthContext);
     const { data: classes = [], refetch } = useQuery({
       queryKey: ["classes"],
       queryFn: async () => {
         const res = await axiosSecure.get('/allClass');
         return res.data;
       },
     });
    //  return [classes, refetch];
    const handleAprove = (item) => {
      console.log("aprove", item._id);
      axiosSecure.patch(`/admin/classReqAccept/${item._id}`).then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Request Approved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    };
    const handleReject = (item) => {
      console.log("Reject", item._id);
      axiosSecure.patch(`/admin/classReqReject/${item._id}`).then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Request Rejected",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    };
    // const handleProgress = (item) => {
    //     console.log(item._id);
    // }
    return (
      <div>
        <h2 className="text-4xl pb-4 font-semibold">Teacher Request</h2>

        <div class="bg-gray-100 ">
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300 ">
              <tr className="bg-gray-200">
                <th class="py-2 px-4 border-b">Title</th>
                <th class="py-2 px-4 border-b">Image</th>
                <th class="py-2 px-4 border-b">Name</th>
                <th class="py-2 px-4 border-b">Email</th>
                <th class="py-2 px-4 border-b">Description</th>
                <th class="py-2 px-4 border-b">Status</th>
                <th class="py-2 px-4 border-b">Progress</th>
                <th class="py-2 px-4 border-b">Actions</th>
              </tr>

              {classes.map((item) => (
                <tr>
                  <td class="py-2 px-4 border-b">{item.title}</td>
                  <td class="py-2 px-4 border-b">
                    <img src={item.photo} className="h-12 w-10"></img>
                  </td>
                  <td class="py-2 px-4 border-b">{item.name}</td>
                  <td class="py-2 px-4 border-b">{item.email}</td>
                  <td class="py-2 px-4 border-b">{item.description}</td>
                  <td class="py-2 px-4 border-b">{item.status}</td>
                  <td class="py-2 px-4 border-b">
                    {item.status == "Pending" || item.status == "Rejected" ? (
                      <>
                        {" "}
                        <button
                          disabled
                          class="bg-green-300 text-white px-3 py-1 mr-2 rounded"
                        >
                          Progress
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        {/* <button
                          onClick={() => handleProgress(item)}
                          class="bg-green-500 text-white px-3 py-1 mr-2 rounded"
                        >
                          Progress
                        </button> */}
                        <Link
                          to={`/dashboard/class/${item._id}`}
                          className="bg-green-500 text-white px-3 py-1 rounded-md"
                        >
                          Progress
                        </Link>
                      </>
                    )}
                  </td>
                  <td class="py-2 px-4 border-b">
                    {item.status == "Pending" ? (
                      <>
                        {" "}
                        <button
                          onClick={() => handleAprove(item)}
                          class="bg-green-500 text-white px-3 py-1 mr-2 rounded"
                        >
                          Approve
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <button
                          disabled
                          class="bg-green-300 text-white px-3 py-1 mr-2 rounded"
                        >
                          Approve
                        </button>
                      </>
                    )}
                    {item.status == "Pending" ? (
                      <>
                        <button
                          onClick={() => handleReject(item)}
                          class="bg-red-500 text-white px-3 py-1 rounded mt-4"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          disabled
                          class="bg-red-300 text-white px-3 py-1 rounded mt-4"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {/* <!-- Sample Data --> */}

              {/* <!-- Add more rows with data as needed --> */}
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllClass;