import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
const UploadContentCard = () => {
  const [IsTestimonial, setIsTestimonial] = useState(true);
  const HandleOnClick = () => {
    setIsTestimonial(!IsTestimonial);
  };
  const CourseData = [
    {
      _id: 0,
      image:
        "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
      title: "একশব্দে কুরআন শিক্ষা",
      URL:"https://www.youtube.com/watch?v=Helpb5rRea0",
    },
    {
      _id: 0,
      image:
        "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
      title: "অনলাইনে কুরআন শিক্ষা কোর্স (পুরুষ)",
      URL:"https://www.youtube.com/watch?v=Helpb5rRea0",

    },
    {
      _id: 0,
      image:
        "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
      title: "অনলাইনে কুরআন শিক্ষা কোর্স (মহিলা)",
      URL:"https://www.youtube.com/watch?v=Helpb5rRea0",
    },
  ];
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
              {CourseData.map((request, index) => (
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
                  <td className="px-4 py-2 "><iframe className="h-40" src={request.URL}></iframe></td>
                  <td className="px-4 py-2">
                    <button className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-md  mr-2">
                      Delete
                    </button>
                    <Link to={'/UploadContentCard/ModuleID'}><button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                      Open
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
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="file"
              />
            </h1>
            <h1>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Title"
              />
            </h1>
            <h1>
              <textarea
                className="resize bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-60 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Description"
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
    </Layout>
    );
};

export default UploadContentCard;