import React, { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateClass = (id) => {
  const { user, loading } = useContext(AuthContext);
  const items = useLoaderData();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  console.log(items);

  const handleUpdate = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const name = user.displayName;
    const email = user.email;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const updatInfo = { title, name, email, price, description };
    console.log(updatInfo);
    axiosPublic
      .put(`/updateClass/${items._id}`, updatInfo)
      .then((res) => {
        Swal.fire({
          text: "Updated Successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate("/dashboard/myClass");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-6">Update Class</h2>
        <form onSubmit={handleUpdate} method="POST">
          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={items.title}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              value={user.displayName}
              disabled
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              value={user.email}
              disabled
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              defaultValue={items.price}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={items.description}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={items.photo}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Add Class Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
