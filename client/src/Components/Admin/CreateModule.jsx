import React from "react";
import Layout from "../../Layout/Layout";

const CreateModule = () => {
  return (
    <Layout className="h-screen w-full p-10 ">
      <div className="  p-10 pb-5">
        <h1 className=" text-center py-12 font-bold text-4xl">
          Create or Update Module
        </h1>
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Cource ID</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Module Title</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Course Description </label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
        </div>
        <button className="py-4 px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md my-4">
          Save
        </button>
      </div>
    </Layout>
  );
};

export default CreateModule;
