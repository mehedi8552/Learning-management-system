import React from "react";
import CourseStore from "../../Store/CourseStore";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie'
const CreateCourse = () => {

 let {CourseData,CourseDataChange,CourseSaveRequest} = CourseStore();

 const token = Cookies.get('token');
 const decoded = jwtDecode(token);
     let id = decoded._id;
  const Save = async ()=>{
    await CourseSaveRequest(id,CourseData);
    if (res) {
      alert("Course Update Success");
    }
  }


  return (
    <div className="h-screen w-full p-10 ">
      <div className="  p-10 pb-5">
        <h1 className=" text-center py-12 font-bold text-4xl">Create Course</h1>
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="flex flex-col space-y-2">
            <label htmlFor="">Course Iamge</label>
            <input
              value={CourseData.image}
              onChange={(e)=>{CourseDataChange("image",e.target.value)}}
              className="h-12 w-full py-2 border-gray-200 rounded-md"
              type="file"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Course Name</label>
            <input
              value={CourseData.title}
              onChange={(e)=>{CourseDataChange("title",e.target.value)}}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Course description</label>
            <input
            value={CourseData.description}
            onChange={(e)=>{CourseDataChange("description",e.target.value)}}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Select Category</label>
            <select
              className="h-12 w-full border border-gray-200 rounded-md"
              onChange={(e)=>{CourseDataChange("Category",e.target.value)}}
            >
              <option value="">Select Category</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
              <option value="commerce">Commerce</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>
        </div>
        <button onClick={Save} className="py-4 px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md my-4">Save</button>
      </div>
    </div>
  );
};

export default CreateCourse;
