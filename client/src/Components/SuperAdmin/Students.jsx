import React, { useState } from "react";

const Students = () => {
  const [IsStudent, setIsStudent] = useState(true);
  const HandleOnClick = () => {
    setIsStudent(!IsStudent);
  };

  const StudentData = [
    {
      Name: "Mehedi Hasan",
      Email: "mehedihasan@gmail.com ",
      Phone: "N/A",
      EmailConfirmed: "Yes",
      Text: "Student started his career as a Unix and Linux System Engineer in 1999. Since that time he has utilized his Linux skills at companies such as Xerox, UPS, Hewlett-Packard, and Amazon.com. Additionally, he has acted as a technical consultant and independent contractor for small businesses and Fortune 500 companies.",
      MakeAdmin: "Make Admin",
    },
  ];
  const AdminData = [
    {
      Name: "Charlie Kyle",
      Email: "charliekyle@gmail.com ",
      Phone: "N/A",
      EmailConfirmed: "Yes",
      Text: "Admin started his career as a Unix and Linux System Engineer in 1999. Since that time he has utilized his Linux skills at companies such as Xerox, UPS, Hewlett-Packard, and Amazon.com. Additionally, he has acted as a technical consultant and independent contractor for small businesses and Fortune 500 companies.",
      Admin: "Remove from Admin",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex space-x-4">
        <h2
          className={`cursor-pointer mb-4 ${IsStudent ? "text-blue-500" : ""}`}
          onClick={HandleOnClick}
        >
          Courses
        </h2>
        <h2
          className={`cursor-pointer mb-4 ${!IsStudent ? "text-blue-500" : ""}`}
          onClick={HandleOnClick}
        >
          New Arrival
        </h2>
      </div>
      {IsStudent ? (
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Email Confirmed</th>
              <th className="px-4 py-2 text-left">Text</th>
              <th className="px-4 py-2 text-left">Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {StudentData.map((request, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{request.Name}</td>
                <td className="px-4 py-2">{request.Email}</td>
                <td className="px-4 py-2">{request.Phone}</td>
                <td className="px-4 py-2 resize-y">{request.EmailConfirmed}</td>
                <td className="px-4 py-2">
                  {" "}
                  <textarea className="resize rounded-md">
                    {request.Text}
                  </textarea>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                    {request.MakeAdmin}
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
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Email Confirmed</th>
              <th className="px-4 py-2 text-left">Text</th>
              <th className="px-4 py-2 text-left">Remove from Admin</th>
            </tr>
          </thead>
          <tbody>
            {AdminData.map((request, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{request.Name}</td>
                <td className="px-4 py-2">{request.Email}</td>
                <td className="px-4 py-2">{request.Phone}</td>
                <td className="px-4 py-2 resize-y">{request.EmailConfirmed}</td>
                <td className="px-4 py-2">
                  <textarea className="resize rounded-md">
                    {request.Text}
                  </textarea>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                    {request.Admin}
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

export default Students;
