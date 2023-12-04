import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, isRegister } = useContext(AuthContext);
   const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    

  const handleSignOut = () => {
    logOut().then().catch();
  };
    const toggleProfileDropdown = () => {
      setProfileDropdownOpen(!profileDropdownOpen);
    };

  return (
    <nav className="bg-gray-100 fixed w-full z-20 top-0 left-0 border-b shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://i.ibb.co/nzpvvMt/Screenshots-3386-removebg-preview.png"
            className="h-8 mr-3"
            alt="Logo"
          />
          <span className="self-center text-4xl font-bold whitespace-nowrap">
            EduVista
          </span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block text-gray-500 hover:text-[#FF444A]"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:flex md:w-auto md:order-1 font-bold ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-xl font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allClass"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                }
              >
                All Class
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applyTeacher"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                }
              >
                Teach on EduVista
              </NavLink>
            </li>

            {user ? (
              // <div className="flex">
              //    <li className="pr-4">
              //     <NavLink
              //       to="/dashboard"
              //       className={({ isActive, isPending }) =>
              //         isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
              //       }

              //     >
              //       Dashboard
              //     </NavLink>
              //   </li>
              //   <button onClick={handleSignOut}>Logout</button>
              // </div>
              // <div className="flex items-center md:ml-4">
              //   <div className="relative group">
              //     <img
              //       src={
              //         user.photoURL
              //           ? user.photoURL
              //           : "https://i.ibb.co/5GGZtst/360-F-483909569-OI4-LKNe-Fg-Hwvv-Vju60fej-Ld9gj43d-Icd.jpg"
              //       }
              //       className="w-8 h-8 rounded-full cursor-pointer"
              //       alt={user.displayName}
              //     />

              //     {/* Dropdown menu */}
              //     <ul className="absolute hidden mt-2 space-y-2 bg-white text-gray-800 rounded-md shadow-md group-hover:block">
              //       <li className="py-2 px-4 font-medium">
              //         {user.displayName}
              //       </li>
              //       <li>
              //         <NavLink
              //           to="/dashboard"
              //           className="block px-4 py-2 hover:bg-gray-200"
              //         >
              //           Dashboard
              //         </NavLink>
              //       </li>
              //       <li>
              //         <button
              //           onClick={handleSignOut}
              //           className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
              //         >
              //           Logout
              //         </button>
              //       </li>
              //     </ul>
              //   </div>
              // </div>
              <div className="flex items-center md:ml-4">
                <div className="relative group">
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/5GGZtst/360-F-483909569-OI4-LKNe-Fg-Hwvv-Vju60fej-Ld9gj43d-Icd.jpg"
                    }
                    className="w-8 h-8 rounded-full cursor-pointer"
                    alt={user.displayName}
                    onClick={toggleProfileDropdown}
                  />

                  {/* Dropdown menu */}
                  {profileDropdownOpen && (
                    <ul className="absolute mt-2 space-y-2 bg-white text-gray-800 rounded-md shadow-md">
                      <li className="py-2 px-4 font-medium">
                        {user.displayName}
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex ">
                <li className="pr-4">
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                    }
                  >
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </div>
            )}
            {/* {user && (
              <div className="flex items-center">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/5GGZtst/360-F-483909569-OI4-LKNe-Fg-Hwvv-Vju60fej-Ld9gj43d-Icd.jpg"
                  }
                  className="w-6 h-6 mr-2"
                  alt={user.displayName}
                />
                <p>{user.displayName}</p>
              </div>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
