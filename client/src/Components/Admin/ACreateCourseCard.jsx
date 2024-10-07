import React, { useEffect, useState } from "react";
import CourseStore from "../../Store/CourseStore";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
const Module = () => {
  let {
    CourseData,
    CourseDataChange,
    CourseSaveRequest,
    CourseReadRequest,
    ReadCourseData,
    DeleteCourseRequest,
  } = CourseStore();

  const token = Cookies.get("token");
  const decoded = jwtDecode(token);
  let id = decoded._id;

  useEffect(() => {
    (async () => {
      await CourseReadRequest(id);
    })();
  }, [id]);

  const Save = async () => {
    const res = await CourseSaveRequest(id, CourseData);
    console.log(res);
    if (res) {
      window.location.reload();
    }
  };

  const DeleteCourse = async (courseId) => {
    if (confirm("Are you sure you want to delete this course?")) {
      try {
        const res = await DeleteCourseRequest(courseId);
        if (res) {
          window.location.reload();
        } else {
          console.error("Failed to delete course");
        }
      } catch (error) {
        console.error("Error deleting course:", error);
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
        <h1 className="text-center font-bold text-3xl">Manage My Course</h1>
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
          <table className="table-fixed">
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
              {ReadCourseData.map((request, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">
                    <img
                      className="h-14 w-14"
                      src={request.image}
                      alt=""
                      srcset=""
                    />
                  </td>
                  <td className="px-4 py-2 max-w-96">{request.title}</td>
                  <td className="px-4 py-2">{request.Category}</td>
                  <td className="px-4 py-2">
                    <textarea>{request.description}</textarea>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => DeleteCourse(request._id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2"
                    >
                      Delete
                    </button>
                    <Link to={`/UpdateCourse/${request._id}`}>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md  mr-2">
                        Update
                      </button>
                    </Link>
                    <Link to={"/CreateModuleCard"}>
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
                id="image"
                name="image"
                type="file"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={(e) => CourseDataChange("image", e.target.files[0])}
                placeholder="Choose file"
              />
            </h1>
            <h1>
              <input
                value={CourseData.title}
                onChange={(e) => {
                  CourseDataChange("title", e.target.value);
                }}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Title"
              />
            </h1>
            <select
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name=""
              id=""
              onChange={(e) => {
                CourseDataChange("Category", e.target.value);
              }}
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
                value={CourseData.description}
                onChange={(e) => {
                  CourseDataChange("description", e.target.value);
                }}
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

export default Module;
