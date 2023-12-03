import React, { useContext } from "react";
import useClass from "../../../../hooks/useClass";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../../Providers/AuthProvider";

const MyClass = () => {
  const [classes, refetch] = useClass();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleDeleteClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`class/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              text: "Your class has been deleted.",
              icon: "success",
              confirmButtonText: "Done",
            });
            navigate("/dashboard/myClass");
          }
        });
      }
    });
  };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const title = e.target.title.value;
//     const name = user.displayName.value;
//     const email = user.email;
//     const price = e.target.price.value;
//     const description = e.target.description.value;
//     const updatInfo = { title, name, email, price, description };
//     console.log("updatInfo");
//   };

  return (
    <div>
      {/* my class: {classes.length} */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white p-4 rounded-md shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{classItem.title}</h3>
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
              <img
                src={classItem.photo}
                alt={classItem.title}
                className="mt-2 mb-4 w-full h-48 object-cover"
              />
              <p className="text-gray-600">
                <strong>Status:</strong> {classItem.status}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleDeleteClass(classItem._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  Delete
                </button>
                {/* when update button click then open a modal  */}
                <Link
                  to={`/dashboard/update/${classItem._id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                >
                  Update
                </Link>

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
    </div>
  );
};

export default MyClass;
