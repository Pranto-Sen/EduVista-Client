import React, { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddClass = () => {
   
    const { user, loading } = useContext(AuthContext);
     const navigate = useNavigate();
     const axiosPublic = useAxiosPublic();

  const handleAddClass = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const name = user.displayName;
    const price = e.target.price.value;
    const email = user.email;
    const description = e.target.description.value;
    const photo = e.target.image.value;
    const status = "Pending";
    const addClass = { title, name, email, price, description, photo, status };
      console.log(addClass);
      
       axiosPublic.post("/addClass", addClass).then((res) => {
         if (res.data.insertedId) {
           Swal.fire({
             text: "Submitted Successfully",
             icon: "success",
             confirmButtonText: "Done",
           });
              navigate("/dashboard/myClass");
         }
       });
    };
    

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md w-full md:w-3/4 lg:w-1/2">
          {loading ? (
            <>
              {" "}
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-6">Add Class</h2>
              <form onSubmit={handleAddClass} method="POST">
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
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>

                {/* Add Class Button */}
                <div className="mb-6">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Add Class
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddClass;
