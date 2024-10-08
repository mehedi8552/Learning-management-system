import React from "react";
import Layout from "../../Layout/Layout";
const UploadContent = () => {
  return (
    <Layout className="h-screen w-full p-10 ">
      <div className="  p-10 pb-5">
        <h1 className=" text-center py-12 font-bold text-4xl">Update Content</h1>
        <div className=" grid md:grid-row-4 grid-row-1 gap-6 md:px-96 px-10">
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Image Link</label>
            <input
            // value={ModuleData?.image}

              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Title</label>
            <input
              // value={ModuleData?.title}
              // onChange={(e) => {
              //   ModuleDataChange("title", e.target.value);
              // }}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>

          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Video URL</label>
            <input
              // value={ModuleData?.description}
              // onChange={(e) => {
              //   ModuleDataChange("description", e.target.value);
              // }}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>
          <h1 className="py-2">
            <button 
            // onClick={Save} 
            className="px-4 py-2 bg-sky-400 hover:bg-green-600 rounded-md text-white">
              Save
            </button>
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default UploadContent;
