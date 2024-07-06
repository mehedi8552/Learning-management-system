import React, { useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import CourseStore from "../Store/CourseStore";
// import { useNavigate } from "react-router-dom";
const CreatePosts = () => {
  // let { insID } = useParams();
  let insID = '666c68b2bb6cedab021ea2e3'
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action={`http://localhost:3000/courses/imageUpload/${insID}`}
        method="post"
        enctype="multipart/form-data"
        className="bg-white p-6 rounded shadow-md"
        // onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 flex justify-center font-bold">
          Create a Course
        </h2>
        <input
          type="text"
          name="title"
          placeholder="title"
          className="mb-2 p-2 border rounded w-full"
          // value={form.title}
          // onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          className="mb-2 p-2 border rounded w-full"
          // value={form.image}
          // onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="mb-2 p-2 border rounded w-full"
          // value={form.description}
          // onChange={handleChange}
        />
        <div className="mb-2 p-2 border rounded w-full">
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              // value={form.Category}
              // onChange={handleChange}
              name="Category"
            >
              <option value="">-- Select Category --</option>
              <option value="New Mexico">New Mexico</option>
              <option value="Missouri">Missouri</option>
              <option value="Texas">Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4 transition duration-200 ease-in-out transform rotate-0 hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <button
          type="submit"
          value="Upload"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePosts;
