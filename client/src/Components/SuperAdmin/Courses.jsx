import React, { useState } from "react";

const Courses = () => {


  const [IsCourse, setIsCourse] = useState(true);

  const handlaClick = () => {
    setIsCourse(!IsCourse);
  };

  const coursesData = [
    {
      title: "needed How To Become a Management Consultant",
      price: "$15",
      category: "Business",
      instructor: "Smith",
      videos: 1,
      homepage: "Homepage",
      status: "Approved",
    },
    {
      title: "Marketing    success for your consultancy - build your brand",
      price: "$15",
      category: "Business",
      instructor: "Smith",
      videos: 1,
      homepage: "Homepage",
      status: "Approved",
    },
  ];

  const newCoursesData = [
    {
      title: "How To Become a Management Consultant",
      price: "$15",
      category: "Business",
      instructor: "Smith",
      videos: 1,
      homepage: "Homepage",
      status: "Approved",
    },
    {
      title: "Marketing success for your consultancy - build your brand",
      price: "$15",
      category: "Business",
      instructor: "Smith",
      videos: 1,
      homepage: "Homepage",
      status: "Approved",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex space-x-4">
        <h2 className={`cursor-pointer mb-4 ${
            IsCourse ? "text-blue-500" : ""}`}onClick={handlaClick}>Courses</h2>
        <h2 className={`cursor-pointer mb-4 ${
          !IsCourse ? "text-blue-500" : ""}`}onClick={handlaClick}>New Arrival</h2>
      </div>
      {IsCourse ? (
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Instructor</th>
              <th className="px-4 py-2 text-left">Videos</th>
              <th className="px-4 py-2 text-left">Homepage</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((request, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{request.title}</td>
                <td className="px-4 py-2">{request.price}</td>
                <td className="px-4 py-2">{request.category}</td>
                <td className="px-4 py-2">{request.instructor}</td>
                <td className="px-4 py-2">{request.videos}</td>
                <td className="px-4 py-2">{request.homepage}</td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full mr-2">
                    {request.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="min-w-full table-auto">
          <thead>
          <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Instructor</th>
              <th className="px-4 py-2 text-left">Videos</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {newCoursesData.map((request, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{request.title}</td>
                <td className="px-4 py-2">{request.price}</td>
                <td className="px-4 py-2">{request.category}</td>
                <td className="px-4 py-2">{request.instructor}</td>
                <td className="px-4 py-2">{request.videos}</td>
                <td className="px-4 py-2">
                  <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full text-sm">
                    {request.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full mr-2">
                    Approve Now
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full">
                    Decline
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Courses;
