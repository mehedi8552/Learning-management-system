import React from 'react';
import {
    PiStudent,
    PiNoteBlankDuotone,
    PiChalkboardTeacherBold,
    PiVideoLight,
  } from "react-icons/pi";
  import { FaShoppingCart } from "react-icons/fa";
const Dash = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-3 mt-1 mb-3 md:my-4">
        <div className="h-fit w-full bg-blue-100 text-center p-4 space-y-2">
          <i className="flex justify-center ">
            <PiStudent className="h-16 w-16 p-2 text-gray-600 rounded-full bg-blue-400" />
          </i>
          <h1 className="text-3xl font-bold">3</h1>
          <p className="text-gray-600">Total Students</p>
        </div>
        <div className="h-fit w-full bg-blue-100 text-center p-4 space-y-2">
          <i className="flex justify-center ">
            <PiNoteBlankDuotone className="h-16 w-16 p-2 text-gray-600 rounded-full bg-blue-400" />
          </i>
          <h1 className="text-3xl font-bold">12</h1>
          <p className="text-gray-600">Total Courses</p>
        </div>
        <div className="h-fit w-full bg-blue-100 text-center p-4 space-y-2">
          <i className="flex justify-center ">
            <PiChalkboardTeacherBold className="h-16 w-16 p-2 text-gray-600 rounded-full bg-blue-400" />
          </i>
          <h1 className="text-3xl font-bold">2</h1>
          <p className="text-gray-600">Total Instructors</p>
        </div>
        <div className="h-fit w-full bg-blue-100 text-center p-4 space-y-2">
          <i className="flex justify-center ">
            <FaShoppingCart className="h-16 w-16 p-2 text-gray-600 rounded-full bg-blue-400" />
          </i>
          <h1 className="text-3xl font-bold">12</h1>
          <p className="text-gray-600">Enrolled</p>
        </div>
        <div className="h-fit w-full bg-blue-100 text-center p-4 space-y-2">
          <i className="flex justify-center ">
            <PiVideoLight className="h-16 w-16 p-2 text-gray-600 rounded-full bg-blue-400" />
          </i>
          <h1 className="text-3xl font-bold">100</h1>
          <p className="text-gray-600">Total Video</p>
        </div>
      </div>
    );
};

export default Dash;