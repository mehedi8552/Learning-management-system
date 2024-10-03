import React, { useState } from "react";
// import CourseStore from "../../Store/CourseStore";
// import { jwtDecode } from "jwt-decode";
// import Cookies from 'js-cookie'
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
const Module = () => {
  // let {CourseData,CourseDataChange,CourseSaveRequest} = CourseStore();

  // const token = Cookies.get('token');
  // const decoded = jwtDecode(token);
  //     let id = decoded._id;
  //  const Save = async ()=>{
  //    await CourseSaveRequest(id,CourseData);
  //    if (res) {
  //      alert("Course Update Success");
  //    }
  //  }
 
 
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
      des: "আমরা আপনাদের জন্য নিয়ে এসেছি বাছাইকৃত স্টাইলিশ ক্যাপশন বাংলা। আমরা ফেসবুক স্ট্যাটাস দেওয়ার সময় বিভিন্ন ক্যাপশন লিখে পোস্ট করে থাকি। অনেক সময় আমরা ফেসবুকে কি লিখে ক্যাপশন দিব তা খুঁজে পাই না। ",
      catagory: "কুরআন শিক্ষা",
    },
    {
      _id: 0,
      image:
        "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
      title: "অনলাইনে কুরআন শিক্ষা কোর্স (পুরুষ)",
      des: "আমরা আপনাদের জন্য নিয়ে এসেছি বাছাইকৃত স্টাইলিশ ক্যাপশন বাংলা। আমরা ফেসবুক স্ট্যাটাস দেওয়ার সময় বিভিন্ন ক্যাপশন লিখে পোস্ট করে থাকি। অনেক সময় আমরা ফেসবুকে কি লিখে ক্যাপশন দিব তা খুঁজে পাই না। ",
      catagory: "কুরআন শিক্ষা",
    },
    {
      _id: 0,
      image:
        "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
      title: "অনলাইনে কুরআন শিক্ষা কোর্স (মহিলা)",
      des: "আমরা আপনাদের জন্য নিয়ে এসেছি বাছাইকৃত স্টাইলিশ ক্যাপশন বাংলা। আমরা ফেসবুক স্ট্যাটাস দেওয়ার সময় বিভিন্ন ক্যাপশন লিখে পোস্ট করে থাকি। অনেক সময় আমরা ফেসবুকে কি লিখে ক্যাপশন দিব তা খুঁজে পাই না। ",
      catagory: "কুরআন শিক্ষা",
    },
  ];

  return (
    <Layout>
      <div className="p-4 px-60 py-20">
        <h1 className="text-center font-bold text-3xl">
          Manage My Course
        </h1>
        <div className="flex space-x-4">
          <h2
            className={`cursor-pointer mb-4 ${
              IsTestimonial ? "text-blue-500" : ""
            }`}
            onClick={HandleOnClick}
          >
            My Course
          </h2>
          <h2
            className={`cursor-pointer mb-4 ${
              !IsTestimonial ? "text-blue-500" : ""
            }`}
            onClick={HandleOnClick}
          >
            Create Course
          </h2>
        </div>
        {IsTestimonial ? (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Description</th>
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
                  <td className="px-4 py-2">{request.catagory}</td>
                  <td className="px-4 py-2"><textarea>{request.des}</textarea></td>
                  <td className="px-4 py-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                      Delete
                    </button>
                    <Link to={'/UpdateCourse/CourseID'}><button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                      Update
                    </button></Link>
                    <Link to={'/CreateModuleCard'}><button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
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
            <select
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name=""
              id=""
            >
              <option value="">Chose one</option>
              <option value="Business">Business</option>
              <option value="Web design">Web design</option>
              <option value="mern stack development">
                mern stack development
              </option>
            </select>
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

export default Module;
