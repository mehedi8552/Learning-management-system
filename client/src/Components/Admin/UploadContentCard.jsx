import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import ContentStore from "../../Store/ContentStore";
const UploadContentCard = () => {
  const { ReadContentData,ContentReadRequest,ContectSaveRequest,ContentData,ContentDataChange,DeleteContentRequest} = ContentStore();
  let { ModuleID } = useParams();  
  useEffect(() => {
    ContentReadRequest(ModuleID);
  })
  const Save = async () => {
    let res = await ContectSaveRequest(ModuleID,ContentData);
    if (res) {
      window.location.reload();
    }
  }
  const [IsTestimonial, setIsTestimonial] = useState(true);
  const HandleOnClick = () => {
    setIsTestimonial(!IsTestimonial);
  };

  const DeleteContent = async (ContentId) => {
    // if (confirm("Are you sure you want to delete this Module?")) {
      try {
        const res = await DeleteContentRequest(ContentId);
        if (res) {
          window.location.reload();
        } else {
          console.error("Failed to delete Module");
        }
      } catch (error) {
        console.error("Error deleting Module:", error);
      }
    // }
  };
    return (
      <Layout>
      <div className="p-4 px-60 py-20">
        <h1 className="text-center font-bold text-3xl">
          Manage My Content
        </h1>
        <div className="flex space-x-4">
          <h2
            className={`cursor-pointer mb-4 ${
              IsTestimonial ? "text-blue-500" : ""
            }`}
            onClick={HandleOnClick}
          >
            My Content
          </h2>
          <h2
            className={`cursor-pointer mb-4 ${
              !IsTestimonial ? "text-blue-500" : ""
            }`}
            onClick={HandleOnClick}
          >
            Create Content
          </h2>
        </div>
        {IsTestimonial ? (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">URL</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {ReadContentData?.map((request, index) => (
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
                  <td className="px-4 py-2 "><iframe className="h-40" src={request.UR}></iframe></td>
                  <td className="px-4 py-2">
                    <button onClick={() => DeleteContent(request._id)} className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-md  mr-2">
                      Delete
                    </button>
                    <Link to={`/UpdateContent/${request._id}`}><button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                      Update
                    </button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className=" flex flex-col space-y-2">
            <h1>
              <input
              value={ContentData?.image}
              onChange={(e) => ContentDataChange("image", e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type='text'
                placeholder="Image"
              />
            </h1>
            <h1>
              <input
              value={ContentData?.title}
              onChange={(e) => ContentDataChange("title", e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Title"
              />
            </h1>
            <h1>
              <textarea
              value={ContentData?.URL}
              onChange={(e) => ContentDataChange("URL", e.target.value)}
                className="resize bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-60 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="URL"
              />
            </h1>
            <h1 className="">
              <button onClick={(e) => {
                Save();
                e.currentTarget.disabled = true;
              }} className="px-4 py-2 bg-sky-400 hover:bg-green-600 rounded-md text-white">
                Save
              </button>
            </h1>
          </div>
        )}
      </div>
    </Layout>
    );
};

export default UploadContentCard;