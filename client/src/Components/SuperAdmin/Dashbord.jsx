import React from "react";
import Layout from "../../Layout/Layout";

import { Link, Outlet } from "react-router-dom";
const Dashbord = () => {
  return (
    <Layout>
      <div className="h-fit w-full bg-white grid grid-cols-5 md:px-20">
        <div className="col-span-5 md:hidden ">
          <div className="flex justify-end my-3 mx-3 ">
            <button className="py-2 px-3 text-white bg-blue-400 rounded">
              Menue
            </button>
          </div>
        </div>
        <div className="hidden sm:block h-full w-full bg-blue-100 space-y-2 ">
          {/* this is sidebar section */}
          <Link to={"Dash"}>
            <div className="hover:bg-blue-300 hover:text-white py-3 font-bold px-3">
              <i>Dashboard</i>
            </div>
          </Link>
          <Link to={"/courses"}>
            <div className="hover:bg-blue-300 hover:text-white py-3 font-bold px-3">
              <i>Courses</i>
            </div>
          </Link>
          <Link to={"/instructors"}>
            <div className="hover:bg-blue-300 hover:text-white py-3 font-bold px-3">
              <i> Instructors</i>
            </div>
          </Link>
          <Link to={"/students"}>
            <div className="hover:bg-blue-300 hover:text-white py-3 font-bold px-3">
              <i>Students</i>
            </div>
          </Link>
          <Link to={"/partners"}>
            <div className="hover:bg-blue-300 hover:text-white py-3 font-bold px-3">
              <i>Partners</i>
            </div>
          </Link>
          <Link to={"/testimonials"}>
            <div className="hover:bg-blue-300 hover:text-white py-3 font-bold px-3">
              <Link to={"/testimonials"}>
                <i>Testimonials</i>
              </Link>
            </div>
          </Link>
          <Link to={"/categories"}>
            <div className="hover:bg-blue-300 hover:text-white py-3 font-bold px-3">
              <i>Categories</i>
            </div>
          </Link>
        </div>
        <div className="col-span-5 sm:col-span-4 md:col-span-4">
          {/* here goes differnet page when user click sidebar  */}
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default Dashbord;

