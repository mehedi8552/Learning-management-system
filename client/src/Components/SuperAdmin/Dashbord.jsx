import React, { useState } from "react";
import Layout from "../../Layout/Layout";

import { Link, Outlet, useLocation } from "react-router-dom";
const Dashbord = () => {
  const [isOpen, setisOpen] = useState(false);
  const location = useLocation();
  const HandleOnClick = () => {
    setisOpen(!isOpen);
  };
  return (
    <Layout>
      <div className="h-fit w-full bg-white grid grid-cols-5 md:px-20">
        <div className="col-span-5 md:hidden ">
          <div className="flex justify-end my-3 mx-3 ">
            <button
              onClick={HandleOnClick}
              className="py-2 px-3 text-white bg-blue-400 rounded"
            >
              Menue
            </button>
          </div>
        </div>
        <div className ={`hidden sm:block h-full w-full bg-blue-100 space-y-2 ${isOpen ? "block" : "hidden"}`}>
          {/* this is sidebar section */}
          <Link to={"/Dash"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/Dash" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Dashboard</i>
            </div>
          </Link>
          <Link to={"/courses"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/courses" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Courses</i>
            </div>
          </Link>
          <Link to={"/instructors"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/instructors" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i> Instructors</i>
            </div>
          </Link>
          <Link to={"/students"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/students" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Students</i>
            </div>
          </Link>
          <Link to={"/partners"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/partners" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Partners</i>
            </div>
          </Link>
          <Link to={"/testimonials"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/testimonials" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Testimonials</i>
            </div>
          </Link>
          <Link to={"/categories"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/categories" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Categories</i>
            </div>
          </Link>
        </div>
        <div className="col-span-5 sm:col-span-4 md:col-span-4">
          {/* here goes differnet page when user click sidebar  */}
          <Outlet />
        </div>

        {/* SideBar For small screen  */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} style={{left:0,position:"fixed",top:"100x",width:"300px" , height:"100%",backgroundColor:"#f5f5f5"}} onClick={HandleOnClick}>
          <div
            className={`col-span-5 sm:col-span-4 md:col-span-4 md:transition-all ease-in-out duration-300 transform -translate-x-full ${isOpen ? "translate-x-0" : ""}`}
          >
            <Link to={"/Dash"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/Dash" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Dashboard</i>
            </div>
          </Link>
          <Link to={"/courses"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/courses" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Courses</i>
            </div>
          </Link>
          <Link to={"/instructors"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/instructors" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i> Instructors</i>
            </div>
          </Link>
          <Link to={"/students"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/students" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Students</i>
            </div>
          </Link>
          <Link to={"/partners"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/partners" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Partners</i>
            </div>
          </Link>
          <Link to={"/testimonials"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/testimonials" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Testimonials</i>
            </div>
          </Link>
          <Link to={"/categories"}>
            <div
              className={`hover:bg-blue-300 hover:text-white py-3 font-bold px-3 ${
                location.pathname === "/categories" ? "bg-blue-300 text-white" : ""
              }`}
            >
              <i>Categories</i>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashbord;

