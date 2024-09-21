import React, { useState } from "react";
import { FaHome, FaBook, FaSignOutAlt, FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCreateOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get("token");
  let role = null;
  let Id = null;

  if (token) {
    const decodedToken = jwtDecode(token);
    role = decodedToken.role;
    Id = decodedToken._id;
  }
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-400 p-6 font-bold">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white text-3xl">
          <Link to="/" className="hover:text-gray-400">
            <span className="text-green-500">Quran</span> Shikkha
          </Link>
        </div>
        <div className="hidden md:flex justify-end font-bold space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/Course" className="text-white hover:text-gray-400">
            Course
          </Link>
          <Link to="/Books" className="text-white hover:text-gray-400">
            Books
          </Link>
          <Link to="/AboutUs" className="text-white hover:text-gray-400">
            About Us
          </Link>
          <Link to="/ContactUs" className="text-white hover:text-gray-400">
            Contact Us
          </Link>
          {token ? (
            <>
              {role === "superadmin" && (
                <>
                  <div className="relative font-medium text-gray-500">
                    <img
                      className="w-6  hover:cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt=""
                      onClick={handleToggle}
                    />
                    {isExpanded && (
                      <div className="absolute z-50 top-14 right-0 w-48 bg-white rounded-md shadow-md py-2">
                        <Link
                          to={`/view-profile-by-id/${Id}`}
                          className=" px-7 py-3 flex leading-5 space-x-2 hover:text-white  hover:bg-sky-400"
                        >
                          <FaHome /> <i>Profile</i>
                        </Link>
                        <Link
                          to={`/dashbord/${Id}`}
                          className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                        >
                          <MdDashboard />
                          <i>dashbord</i>
                        </Link>
                        <Link
                          to={`/dashbord/${Id}`}
                          className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                        >
                          <FaBook />
                          <i>My learning</i>
                        </Link>
                        <Link
                          onClick={handleLogout}
                          className="flex leading-5 space-x-2  px-7 py-3  hover:text-white  hover:bg-sky-400"
                        >
                          <FaSignOutAlt /> <i>Logout</i>
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}
              {role === "admin" && (
                <>
                  <div className="relative font-medium text-gray-500">
                    <img
                      className="w-6  hover:cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt=""
                      onClick={handleToggle}
                    />
                    {isExpanded && (
                      <div className="absolute z-50 top-14 right-0 w-48 bg-white rounded-md shadow-md py-2">
                        <Link
                          to={`/view-profile-by-id/${Id}`}
                          className=" px-7 py-3 flex leading-5 space-x-2 hover:text-white  hover:bg-sky-400"
                        >
                          <FaHome /> <i>Profile</i>
                        </Link>
                        <Link
                          to={`/dashbord/${Id}`}
                          className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                        >
                          <MdDashboard />
                          <i>dashbord</i>
                        </Link>
                        <Link
                          to={`/dashbord/${Id}`}
                          className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                        >
                          <FaBook />
                          <i>My learning</i>
                        </Link>
                        <Link
                          onClick={handleLogout}
                          className="flex leading-5 space-x-2  px-7 py-3  hover:text-white  hover:bg-sky-400"
                        >
                          <FaSignOutAlt /> <i>Logout</i>
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}
              {role === "user" && (
                <>
                  <div className="relative font-medium text-gray-500">
                    <img
                      className="w-6  hover:cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt=""
                      onClick={handleToggle}
                    />
                    {isExpanded && (
                      <div className="absolute z-50 top-14 right-0 w-48 bg-white rounded-md shadow-md py-2">
                        <Link
                          to={`/view-profile-by-id/${Id}`}
                          className=" px-7 py-3 flex leading-5 space-x-2 hover:text-white  hover:bg-sky-400"
                        >
                          <FaHome /> <i>Profile</i>
                        </Link>
                        <Link
                          to={`/dashbord/${Id}`}
                          className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                        >
                          <MdDashboard />
                          <i>dashbord</i>
                        </Link>
                        <Link
                          to={`/dashbord/${Id}`}
                          className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                        >
                          <FaBook />
                          <i>My learning</i>
                        </Link>
                        <Link
                          onClick={handleLogout}
                          className="flex leading-5 space-x-2  px-7 py-3  hover:text-white  hover:bg-sky-400"
                        >
                          <FaSignOutAlt /> <i>Logout</i>
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="relative inline-block -mt-2">
                <button
                  className="bg-green-400 text-white py-2 px-4  font-semibold rounded hover:bg-green-600"
                  onClick={(e) => {
                    e.preventDefault();
                    const dropdown = e.target.nextElementSibling;
                    dropdown.classList.toggle("hidden");
                    dropdown.classList.toggle("block");
                  }}
                >
                  My Account
                </button>
                <div className="absolute z-50 top-14 right-0 w-48 bg-white rounded-md shadow-md py-2">
                  <Link
                    to="/register"
                    className="block px-7 py-3  hover:text-white  hover:bg-sky-400"
                  >
                    <div className="flex leading-5 space-x-2">
                      <IoCreateOutline /> <i>Register</i>
                    </div>
                  </Link>
                  <Link
                    to="/login"
                    className="block  px-7 py-3  hover:text-white  hover:bg-sky-400"
                  >
                    <div className="flex leading-5 space-x-2">
                      <IoMdLogIn /> <i>Login</i>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        {/* ----------------------For small screen size--------------------------------------- */}
        <div className="flex space-x-3">
          {token ? (
            <div div className="md:hidden">
              {role === "user" && (
                <div className="relative font-medium text-gray-500">
                  <img
                    className="w-6  hover:cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt=""
                    onClick={handleToggle}
                  />
                  {isExpanded && (
                    <div className="absolute z-50 top-14 right-0 w-48 bg-white rounded-md shadow-md py-2">
                      <Link
                        to={`/view-profile-by-id/${Id}`}
                        className=" px-7 py-3 flex leading-5 space-x-2 hover:text-white  hover:bg-sky-400"
                      >
                        <FaHome /> <i>Profile</i>
                      </Link>
                      <Link
                        to={`/dashbord/${Id}`}
                        className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                      >
                        <FaBook />
                        <i>My learning</i>
                      </Link>
                      <Link
                        onClick={handleLogout}
                        className="flex leading-5 space-x-2  px-7 py-3  hover:text-white  hover:bg-sky-400"
                      >
                        <FaSignOutAlt /> <i>Logout</i>
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {role === "admin" && (
                <div className="relative font-medium text-gray-500">
                  <img
                    className="w-6  hover:cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt=""
                    onClick={handleToggle}
                  />
                  {isExpanded && (
                    <div className="absolute z-50 top-14 right-0 w-48 bg-white rounded-md shadow-md py-2">
                      <Link
                        to={`/view-profile-by-id/${Id}`}
                        className=" px-7 py-3 flex leading-5 space-x-2 hover:text-white  hover:bg-sky-400"
                      >
                        <FaHome /> <i>Profile</i>
                      </Link>
                      <Link
                        to={`/dashbord/${Id}`}
                        className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                      >
                        <MdDashboard />
                        <i>dashbord</i>
                      </Link>
                      <Link
                        to={`/dashbord/${Id}`}
                        className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                      >
                        <FaBook />
                        <i>My learning</i>
                      </Link>
                      <Link
                        onClick={handleLogout}
                        className="flex leading-5 space-x-2  px-7 py-3  hover:text-white  hover:bg-sky-400"
                      >
                        <FaSignOutAlt /> <i>Logout</i>
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {role === "superadmin" && (
                <div className="relative font-medium text-gray-500">
                  <img
                    className="w-6  hover:cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt=""
                    onClick={handleToggle}
                  />
                  {isExpanded && (
                    <div className="absolute z-50 top-14 right-0 w-48 bg-white rounded-md shadow-md py-2">
                      <Link
                        to={`/view-profile-by-id/${Id}`}
                        className=" px-7 py-3 flex leading-5 space-x-2 hover:text-white  hover:bg-sky-400"
                      >
                        <FaHome /> <i>Profile</i>
                      </Link>
                      <Link
                        to={`/dashbord/${Id}`}
                        className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                      >
                        <MdDashboard />
                        <i>dashbord</i>
                      </Link>
                      <Link
                        to={`/dashbord/${Id}`}
                        className="flex leading-5 space-x-2 px-7 py-3   hover:text-white  hover:bg-sky-400"
                      >
                        <FaBook />
                        <i>My learning</i>
                      </Link>
                      <Link
                        onClick={handleLogout}
                        className="flex leading-5 space-x-2  px-7 py-3  hover:text-white  hover:bg-sky-400"
                      >
                        <FaSignOutAlt /> <i>Logout</i>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="relative inline-block -mt-2">
                <button
                  className="bg-green-400 text-white py-2 px-4  font-semibold rounded hover:bg-green-600"
                  onClick={(e) => {
                    e.preventDefault();
                    const dropdown = e.target.nextElementSibling;
                    dropdown.classList.toggle("hidden");
                    dropdown.classList.toggle("block");
                  }}
                >
                  My Account
                </button>
                <div className="absolute z-50 top-14 right-0 w-48 bg-white rounded-md shadow-md py-2">
                  <Link
                    to="/register"
                    className="block px-7 py-3  hover:text-white  hover:bg-sky-400"
                  >
                    <div className="flex leading-5 space-x-2">
                      <IoCreateOutline /> <i>Register</i>
                    </div>
                  </Link>
                  <Link
                    to="/login"
                    className="block  px-7 py-3  hover:text-white  hover:bg-sky-400"
                  >
                    <div className="flex leading-5 space-x-2">
                      <IoMdLogIn /> <i>Login</i>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )}
          <div div className="md:hidden">
            <div className="relative font-bold text-2xl text-gray-500">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-400 focus:outline-none"
              >
                <GiHamburgerMenu />
              </button>
            </div>

            {isOpen && (
              <div className="md:hidden">
                <div className="absolute z-50 top-20 right-0 w-48 bg-white rounded-md shadow-md py-2">
                  <>
                    <Link
                      to="/"
                      className="block px-7 py-3   hover:text-white  hover:bg-sky-400"
                    >
                      Home
                    </Link>
                    <Link
                      to="/Course"
                      className="block px-7 py-3   hover:text-white  hover:bg-sky-400"
                    >
                      Course
                    </Link>
                    <Link
                      to="/Books"
                      className="block px-7 py-3   hover:text-white  hover:bg-sky-400"
                    >
                      Books
                    </Link>
                    <Link
                      to="/AboutUs"
                      className="block px-7 py-3   hover:text-white  hover:bg-sky-400"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/ContactUs"
                      className="block px-7 py-3   hover:text-white  hover:bg-sky-400"
                    >
                      Contact Us
                    </Link>
                  </>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
