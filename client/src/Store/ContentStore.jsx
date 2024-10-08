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
  ContentData:{image:"",title:"",URL:""},
  ContentDataChange:(name, value) => {
    set((state) => ({
        ContentData: {
        ...state.ContentData,
        [name]: value,
      },
    }));
  },
}));

export default ContentStore;
