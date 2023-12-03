import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const ApplyTeacher = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const handleApply = (e) => {
    e.preventDefault();
    const name = user.displayName;
    const photo = user.photoURL;
    const email = user.email;
    const experience = e.target.experience.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    const status = "Pending";

    const userInfo = { name, photo, experience, category, title, status, email };
    console.log(userInfo);
    axiosPublic.post("/applyTeacher", userInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          text: "Submitted Successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate("/");
      }
    });
  };
  return (
    <div class="bg-gray-100 h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 class="text-2xl font-semibold mb-4">
          Teaching Position Application
        </h2>

        {/* <!-- Form --> */}
        <form onSubmit={handleApply} class="" method="POST">
          {/* <!-- Name --> */}
          <div class="mb-4">
            <div className="flex items-center justify-center">
              <img src={user.photoURL} className="h-20 w-16"></img>
            </div>

            <label
              for="name"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full border border-gray-500 text-black rounded p-2"
              defaultValue={user.displayName}
            ></input>
          </div>

          {/* <!-- Experience --> */}
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Experience
            </label>
            <select
              name="experience"
              id="experience"
              class="w-full border border-gray-300 rounded p-2"
              required
            >
              <option disabled selected >
                Select Experience
              </option>
              <option value="beginner">Beginner</option>
              <option value="experienced">Experienced</option>
              <option value="some_idea">Some Idea</option>
            </select>
          </div>

          {/* <!-- Title --> */}
          <div class="mb-4">
            <label
              for="title"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              class="w-full border border-gray-300 rounded p-2"
              placeholder="Teaching Title"
              required
            ></input>
          </div>

          {/* <!-- Category --> */}
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <select
              name="category"
              id="category"
              class="w-full border border-gray-300 rounded p-2"
              required
            >
              <option disabled selected>
                Select Category
              </option>
              <option value="web_development">Web Development</option>
              <option value="digital_marketing">Digital Marketing</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
            </select>
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyTeacher;
