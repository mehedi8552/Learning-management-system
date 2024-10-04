import { create } from "zustand";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
const CourseStore = create((set) => ({
  CourseData: { title: "", image: "", description: "", Category: "" },
  CourseDataChange: (name, value) => {
    set((state) => ({
      CourseData: {
        ...state.CourseData,
        [name]: value,
      },
    }));
  },
  CourseSaveRequest: async (id, postBody) => {
    try {
      console.log(postBody);
      
      const res = await axios.post(
        `http://localhost:3000/courses/createCource/${id}`,
        postBody,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return res.data["status"] === "success";
    } catch (e) {
      if (e.response.status === 401) {
        return false;
      }
      throw e;
    }
  },
}));

export default CourseStore;
