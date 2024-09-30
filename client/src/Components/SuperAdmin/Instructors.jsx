import React, { useState } from "react";

const Instructors = () => {
  const [IsInstructors, setInstructors] = useState(true);

  const handlaClick = () => {
    setInstructors(!IsInstructors);
  };
  const Instructors = [
    {
      name: "Student Profile lllllll",
      email: "student@econs.com",
      phone: "615207039",
      subject: "Math",
      text: "this is for test",
    },
    {
      name: "Admin User",
      email: "admin@econs.com",
      phone: "0932400781",
      subject: "wert",
      text: "esr",
    },
  ];
  const requests = [
    {
      name: "Student Profile mmmmmmm",
      email: "student@econs.com",
      phone: "615207039",
      subject: "Math",
      text: "this is for test",
      status: "Pending",
    },
    {
      name: "Admin User",
      email: "admin@econs.com",
      phone: "0932400781",
      subject: "wert",
      text: "esr",
      status: "Pending",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex space-x-4">
        <h2 className={`cursor-pointer mb-4 ${IsInstructors ? "text-blue-500" : ""}`} onClick={handlaClick}>Instructors</h2>
        <h2 className={`cursor-pointer mb-4 ${!IsInstructors ? "text-blue-500" : ""}`} onClick={handlaClick}>Requests</h2>
      </div>
      {
        IsInstructors? <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Subject</th>
            <th className="px-4 py-2 text-left">Text</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {Instructors.map((request, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{request.name}</td>
              <td className="px-4 py-2">{request.email}</td>
              <td className="px-4 py-2">{request.phone}</td>
              <td className="px-4 py-2">{request.subject}</td>
              <td className="px-4 py-2">{request.text}</td>
              <td className="px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full mr-2">
                  Approved
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      :
<table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Subject</th>
            <th className="px-4 py-2 text-left">Text</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{request.name}</td>
              <td className="px-4 py-2">{request.email}</td>
              <td className="px-4 py-2">{request.phone}</td>
              <td className="px-4 py-2">{request.subject}</td>
              <td className="px-4 py-2">{request.text}</td>
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
      }
      
    </div>
  );
};

export default Instructors;
