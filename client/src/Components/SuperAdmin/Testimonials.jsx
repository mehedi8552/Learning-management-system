import React, { useState } from "react";

const Testimonials = () => {
  const [IsTestimonial, setIsTestimonial] = useState(true);
  const HandleOnClick = () => {
    setIsTestimonial(!IsTestimonial);
  };

  const TestimonialData = [
    {
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s",
      Name: "Mehedi Hasan",
      Email: "mehedihasan@gmail.com ",
      Designation: "Captain Of AU",
      Text: "Student started his career as a Unix and Linux System Engineer in 1999. Since that time he has utilized his Linux skills at companies such as Xerox, UPS, Hewlett-Packard, and Amazon.com. Additionally, he has acted as a technical consultant and independent contractor for small businesses and Fortune 500 companies.",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex space-x-4">
        <h2
          className={`cursor-pointer mb-4 ${
            IsTestimonial ? "text-blue-500" : ""
          }`}
          onClick={HandleOnClick}
        >
          Testimonials
        </h2>
        <h2
          className={`cursor-pointer mb-4 ${
            !IsTestimonial ? "text-blue-500" : ""
          }`}
          onClick={HandleOnClick}
        >
          Create
        </h2>
      </div>
      {IsTestimonial ? (
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Captain Of AU</th>
              <th className="px-4 py-2 text-left">Text</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {TestimonialData.map((request, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">
                  <img
                    className="h-14 w-14"
                    src={request.Image}
                    alt=""
                    srcset=""
                  />
                </td>
                <td className="px-4 py-2">{request.Name}</td>
                <td className="px-4 py-2">{request.Email}</td>
                <td className="px-4 py-2">{request.Designation}</td>
                <td className="px-4 py-2">
                  <textarea className="resize rounded-md">
                    {request.Text}
                  </textarea>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                    Delete
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className=" flex flex-col space-y-2">
          <h1>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Name"
            />
          </h1>
          <h1>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="file"
            />
          </h1>
          <h1>
            <input
              placeholder="Designation"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </h1>
          <h1>
            <textarea
              className="resize bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-60 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Text"
            />
          </h1>
          <h1 className="">
            <button className="px-4 py-2 bg-sky-400 hover:bg-green-600 rounded-md text-white">
              Save
            </button>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
