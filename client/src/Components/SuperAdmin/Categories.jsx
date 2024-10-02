import React, { useState } from 'react';

const Categories = () => {
    const [IsCategory,setIsCategory] = useState(true);
    const HandleOnClick =()=>{
        setIsCategory(!IsCategory);
    }
    const CategoryData =[
        {
            Categories:"Music",
        },
        {
            Categories:"Teaching & Academics",
        },
        {
            Categories:"Photography & Video",
        },
        {
            Categories:"Marketing",
        }
    ]
    return (
        <div className="p-4">
        <div className="flex space-x-4">
          <h2
            className={`cursor-pointer mb-4 ${
              IsCategory ? "text-blue-500" : ""
            }`}
            onClick={HandleOnClick}
          >
            Testimonials
          </h2>
          <h2
            className={`cursor-pointer mb-4 ${
              !IsCategory ? "text-blue-500" : ""
            }`}
            onClick={HandleOnClick}
          >
            Create
          </h2>
        </div>
        {IsCategory ? (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Categories</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {CategoryData.map((request, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{request.Categories}</td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                      Delete
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                      Edit
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

export default Categories;