import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useTeacherRole from "../../../hooks/useTeacherRole";

const ApplyTeacher = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [teachers] = useTeacherRole();
  const { user, loading } = useContext(AuthContext);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Submit for Review");
  const [additionalText, setAdditionalText] = useState("");
  const [additionalText2, setAdditionalText2] = useState("");

  useEffect(() => {
    const matchingTeacher = teachers.find(
      (teacher) => teacher.email === user.email
    );

    if (matchingTeacher) {
      if (matchingTeacher.status === "Pending") {
        setButtonDisabled(true);
        setAdditionalText2("Request Pending.....");
      } else if (matchingTeacher.status === "Reject") {
        setButtonText("Request to another");
        setButtonDisabled(false);
      } else if (matchingTeacher.status === "Accept") {
        setButtonDisabled(true);
        setAdditionalText("You are already a teacher");
      }
    }
  }, [teachers, user.email]);

  const handleApply = (e) => {
    e.preventDefault();
    const name = user.displayName;
    const photo = user.photoURL;
    const email = user.email;
    const experience = e.target.experience.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    const status = "Pending";

    const userInfo = {
      name,
      photo,
      experience,
      category,
      title,
      status,
      email,
    };
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
        {additionalText ? (
          <p className="text-2xl font-semibold text-green-700 py-4">
            {additionalText}
          </p>
        ) : (
          <>
            {" "}
            {/* <!-- Form --> */}
            <h2 class="text-4xl font-semibold mb-4">
              Teaching Position Application
            </h2>
            <form onSubmit={handleApply} class="" method="POST">
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
                  <option disabled selected>
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

              {/* Your other components */}
              {additionalText2 && (
                <p className="text-2xl text-red-600 py-4">{additionalText2}</p>
              )}
              <button
                disabled={isButtonDisabled}
                class="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {buttonText}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplyTeacher;
