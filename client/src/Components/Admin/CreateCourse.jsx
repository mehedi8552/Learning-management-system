import React from "react";

const CreateCourse = () => {
  return (
    <div className="h-screen w-full p-10 ">
      <div className="  p-10 pb-5">
        <h1 className=" text-center py-12 font-bold text-4xl">Create or Update Course</h1>
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="flex flex-col space-y-2">
            <label htmlFor="">Course Iamge</label>
            <input
              className="h-12 w-full py-2 border-gray-200 rounded-md"
              type="file"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Course Name</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Course description</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Course Category</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
        </div>
        <button className="py-4 px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md my-4">Save</button>
      </div>
    </div>
  );
};

export default CreateCourse;
