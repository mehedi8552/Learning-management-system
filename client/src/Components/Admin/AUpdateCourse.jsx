import React, { useEffect } from "react";
import CourseStore from "../../Store/CourseStore";
import Layout from "../../Layout/Layout";
import {  useParams } from "react-router-dom";
const CreateCourse = () => {
  let {
    CourseData,
    CourseDataChange,
    ReadRequestByCourseID,
    UpdateCourseRequest,
  } = CourseStore();
  let { CourseID } = useParams();
  useEffect(() => {
    (async () => {
      await ReadRequestByCourseID(CourseID,CourseData);
    })();
  }, [CourseID]);

  // Save the updated course data to the server and reload the page if the server returns a success response.
  const Save = async () => {
  let res =  await UpdateCourseRequest(CourseID, CourseData);
    if (res) {
      window.location.reload();
    }
  };
  return (
    <Layout className="h-screen w-full p-10 ">
      <div className="  p-10 pb-5">
        <h1 className=" text-center py-12 font-bold text-4xl">Update Course</h1>
        <div className=" grid md:grid-row-4 grid-row-1 gap-6 md:px-96 px-10">
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Course Iamge</label>
            <input
              value={CourseData?.image}
              readOnly={true}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type={CourseData?.image ? "text" : "file"}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Course Name</label>
            <input
              value={CourseData?.title}
              onChange={(e) => {
                CourseDataChange("title", e.target.value);
              }}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>

          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Course description</label>
            <input
              value={CourseData?.description}
              onChange={(e) => {
                CourseDataChange("description", e.target.value);
              }}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Select Category</label>
            <select
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={(e) => {
                CourseDataChange("Category", e.target.value);
              }}
            >
              <option value={CourseData?.Category}>{CourseData?.Category}</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
              <option value="commerce">Commerce</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>
          <h1 className="py-2">
            <button
              onClick={Save}
              className="px-4 py-2 bg-sky-400 hover:bg-green-600 rounded-md text-white"
            >
              Save
            </button>
          </h1>
        </div>
      </div>
      <div></div>
    </Layout>
  );
};

export default CreateCourse;
