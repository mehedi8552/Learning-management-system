import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get("token");
  let role = null;

  if (token) {
    const decodedToken = jwtDecode(token);
    role = decodedToken.role;
  }

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl">
          <Link to="/" className="hover:text-gray-400">
            <span className="text-green-500">Quran</span> Shikkha
          </Link>
        </div>
        <div className="space-x-4">
          {token ? (
            <>
              {role === "superadmin" && (
                <>
                  <Link
                    to="/viewAllUsers"
                    className="text-white hover:text-gray-400"
                  >
                    View All Users
                  </Link>
                  <Link
                    to="/manageUsers"
                    className="text-white hover:text-gray-400"
                  >
                    Manage Users
                  </Link>
                  <Link
                    to="/manageComments"
                    className="text-white hover:text-gray-400"
                  >
                    Manage Comments
                  </Link>
                </>
              )}
              {role === "admin" && (
                <>
                  <Link
                    to="/viewAllUsers"
                    className="text-white hover:text-gray-400"
                  >
                    View All Users
                  </Link>
                  <Link
                    to="/manageUsers"
                    className="text-white hover:text-gray-400"
                  >
                    Manage Users
                  </Link>
                  <Link
                    to="/manageComments"
                    className="text-white hover:text-gray-400"
                  >
                    Manage Comments
                  </Link>
                </>
              )}
              {role === "user" && (
                <>
                  <Link
                    to="/viewPosts"
                    className="text-white hover:text-gray-400"
                  >
                    View Posts
                  </Link>
                </>
              )}
              <Link
                to="/viewProfile"
                className="text-white hover:text-gray-400"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
              <div className="relative inline-block">
                <button
                  className="bg-green-400 text-white py-2 px-4 font-semibold rounded hover:bg-green-600"
                  onClick={(e) => {
                    e.preventDefault();
                    const dropdown = e.target.nextElementSibling;
                    dropdown.classList.toggle("hidden");
                    dropdown.classList.toggle("block");
                  }}
                >
                  Dropdown
                </button>
                <div className="dropdown-content absolute hidden bg-green-400 mt-2 min-w-[160px] shadow-lg z-10">
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-black hover:bg-green-600"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-black hover:bg-green-600"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
      <div
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {islogin() ? (
                <>
                  {navIslogin.map((item, i) => {
                    return (
                      <NavLink
                        key={i}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
                      >
                        {item.name}
                      </NavLink>
                    );
                  })}
                </>
              ) : (
                <>
                  {navnologin.map((item, i) => {
                    return (
                      <NavLink
                        key={i}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
                      >
                        {item.name}
                      </NavLink>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
