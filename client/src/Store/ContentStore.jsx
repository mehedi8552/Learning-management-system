import { create } from "zustand";
import axios from "axios";
const ContentStore = create((set) => ({
  ReadContentData: null,
  ContentReadRequest: async (id) => {
    const res = await axios.get(
      `http://localhost:3000/courses/ReadByModuleId/${id}`,
      {
        withCredentials: true,
      }
    );
    if (res.data["status"] === "success") {
      set({ ReadContentData: res.data["data"] });
    }
  },
  ContectSaveRequest: async (id, postBody) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/courses/CreateFile/${id}`,
        postBody,
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
  ContentData: { image: "", title: "", URL: "" },
  ContentDataChange: (name, value) => {
    set((state) => ({
      ContentData: {
        ...state.ContentData,
        [name]: value,
      },
    }));
  },
  ContentData: null,
  ReadByContentID: async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/courses/ReadByFileId/${id}`,
        {
          withCredentials: true,
        }
      );
      if (res.data["status"] === "success") {
        set({ ContentData: res.data["data"][0] });
      }
    } catch (e) {
      console.log(e);
    }
  },
  UpdateContentRequest: async (id, postBody) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/courses/UpdateFile/${id}`,
        postBody,
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
  DeleteContentRequest: async (id) => {
    try {
      let res = await axios.post(
        `http://localhost:3000/courses/DeleteFile/${id}`,
        null,
        {
          withCredentials: true,
        }
      );
      return res.data["status"] === "success";
    } catch (e) {
      console.log(e);
    }
  },
}));

export default ContentStore;
