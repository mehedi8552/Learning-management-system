import { create } from "zustand";
import axios from "axios";
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
  ReadCourseData: [],
  CourseReadRequest: async (id) => {
    const res = await axios.get(
      `http://localhost:3000/courses/ReadCourceByInsId/${id}`,
      {
        withCredentials: true,
      }
    );
    if (res.data["status"] === "success") {
      set({ ReadCourseData: res.data["data"] });
    }
  },
  CourseData: [],
  ReadRequestByCourseID: async (id) => {
    const res = await axios.get(
      `http://localhost:3000/courses/ReadCourceById/${id}`,
      {
        withCredentials: true,
      }
    );
    if (res.data["status"] === "success") {
      set({ CourseData: res.data["data"] });
    }
  },
  UpdateCourseRequest: async (id, postBody) => {
    console.log( id,postBody);
    
    try {
      const res = await axios.post(
        `http://localhost:3000/courses/UpdateCource/${id}`,
        postBody,
        {
          withCredentials: true,
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        }
      );
      console.log(res);
      
      return res.data["status"] === "success";
    } catch (e) {
      if (e.response.status === 401) {
        return false;
      }
      throw e;
    }
  },
  DeleteCourseRequest: async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/courses/DeleteCource/${id}`,
        null,
        {
          withCredentials: true,
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
