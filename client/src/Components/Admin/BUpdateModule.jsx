import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import ModuleStore from "../../Store/ModuleStore";

const CreateModule = () => {
  let { ModuleData,ReadRequestByModuleID } = ModuleStore();
  const { ModuleID } = useParams();
  console.log(ModuleID);
  
  useEffect(() => {
    (async () => {
      await ReadRequestByModuleID(ModuleID);
    })();
  }, [ModuleID]);

  const Save = async () => {
    let res = await UpdateModuleRequest(ModuleID, ModuleData);
    if (res) {
      window.location.reload();
    }
  };
  return (
    <Layout className="h-screen w-full p-10 ">
      <div className="  p-10 pb-5">
        <h1 className=" text-center py-12 font-bold text-4xl">Update Module</h1>
        <div className=" grid md:grid-row-4 grid-row-1 gap-6 md:px-96 px-10">
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Module Image</label>
            <input
            value={ModuleData?.image}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type={"text"}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Module Name</label>
            <input
              value={ModuleData?.name}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>

          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Module description</label>
            <input
              value={ModuleData?.description}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>
          <h1 className="py-2">
            <button onClick={Save} className="px-4 py-2 bg-sky-400 hover:bg-green-600 rounded-md text-white">
              Save
            </button>
          </h1>
        </div>
      </div>
    </Layout>
  );
};
export default CreateModule;
