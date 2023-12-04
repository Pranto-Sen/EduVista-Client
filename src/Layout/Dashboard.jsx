import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaRegListAlt,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaPlusSquare,
  FaClipboardList,
  FaUsers,
  FaUtensils,
  FaUserPlus,
} from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useTeacher from "../../hooks/useTeacher";
import useStudent from "../../hooks/useStudent";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();
  const [isStudent, isStudentLoading] = useStudent();

   console.log(isAdmin);
  console.log(isStudent);
  return (
    <div>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-gradient-to-r from-cyan-500 to-blue-400">
          <ul className="menu p-4">
            {isAdmin && (
              <>
                {" "}
                <li>
                  <NavLink to="/dashboard/teacherRequest">
                    <FaClipboardList></FaClipboardList>
                    Teacher Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers></FaUsers>
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allClass">
                    <FaList></FaList>
                    All classes
                  </NavLink>
                </li>
              </>
            )}
              
  

            {isTeacher && (
              <>
                <li>
                  <NavLink to="/dashboard/addClass">
                    <FaPlusSquare />
                    Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClass">
                    <FaRegListAlt />
                    My Class
                  </NavLink>
                </li>
              </>
            )}
            {isStudent && (
              <>
                <li>
                  <NavLink to="/dashboard/myEnrollClass">
                    <FaPlusSquare />
                    My enroll Class
                  </NavLink>
                </li>
              
              </>
            )}

            <li>
              <NavLink to="/dashboard/profile">
                <FaUserPlus></FaUserPlus>
                Profile
              </NavLink>
            </li>

            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

