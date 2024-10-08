import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import ModuleStore from "../../Store/ModuleStore";
const ModuleCard = () => {
  let { CourseID } = useParams();
  let {
    ModuleData,
    ModuleDataChange,
    ModuleSaveRequest,
    ModuleReadRequest,
    ReadModuleData,
    DeleteModuleRequest,
  } = ModuleStore();

  useEffect(() => {
    (async () => {
      await ModuleReadRequest(CourseID);
    })();
  }, []);

  const Save = async () => {
   let res = await ModuleSaveRequest(CourseID, ModuleData);
    if (res) {
      window.location.reload();
    }
  };

  const DeleteModule = async (ModuleId) => {
    if (confirm("Are you sure you want to delete this Module?")) {
      try {
        const res = await DeleteModuleRequest(ModuleId);
        if (res) {
          window.location.reload();
        } else {
          console.error("Failed to delete Module");
        }
      } catch (error) {
        console.error("Error deleting Module:", error);
      }
    }
  };

  const [IsTestimonial, setIsTestimonial] = useState(true);
  const HandleOnClick = () => {
    setIsTestimonial(!IsTestimonial);
  };

  return (
    <Layout>
      <div className="p-4 px-60 py-20">
        <h1 className="text-center font-bold text-3xl">Manage My Module</h1>
        <div className="flex space-x-4">
          <h2
            className={`cursor-pointer mb-4 ${
              IsTestimonial ? "text-blue-500" : ""
            }`}
            onClick={HandleOnClick}
          >
            My Module
          </h2>
          <h2
            className={`cursor-pointer mb-4 ${
              !IsTestimonial ? "text-blue-500" : ""
            }`}
            onClick={HandleOnClick}
          >
            Create Module
          </h2>
        </div>
        {IsTestimonial ? (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {ReadModuleData.map((request, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">
                    <img
                      className="h-14 w-14"
                      src={request.image}
                      alt=""
                      srcset=""
                    />
                  </td>
                  <td className="px-4 py-2">{request.title}</td>
                  <td className="px-4 py-2">
                    <textarea>{request.description}</textarea>
                  </td>
                  <td className="px-4 py-2">
                    <button onClick={() => DeleteModule(request._id)} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                      Delete
                    </button>
                    <Link to={`/UpdateModule/${request._id}`}>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                        Update
                      </button>
                    </Link>
                    <Link to={`/UploadContentCard/${request._id}`}>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                        Open
                      </button>
                    </Link>
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
                placeholder="Image"
                value={ModuleData?.image}
                onChange={(e) => ModuleDataChange("image", e.target.value)}
              />
            </h1>
            <h1>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Title"
                value={ModuleData?.title}
                onChange={(e) => ModuleDataChange("title", e.target.value)}
              />
            </h1>
            <h1>
              <textarea
                className="resize bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-60 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Description"
                value={ModuleData?.description}
                onChange={(e) =>
                  ModuleDataChange("description", e.target.value)
                }
              />
            </h1>
            <h1 className="">
              <button
                onClick={Save}
                className="px-4 py-2 bg-sky-400 hover:bg-green-600 rounded-md text-white"
              >
                Save
              </button>
            </h1>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ModuleCard;
