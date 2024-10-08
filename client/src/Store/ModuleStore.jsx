import { create } from "zustand";

import axios from "axios";

const ModuleStore = create((set) => ({
  ModuleData: { title: "", image: "", description: "" },
  ModuleDataChange: (name, value) => {
    set((state) => ({
      ModuleData: {
        ...state.ModuleData,
        [name]: value,
      },
    }));
  },
  ModuleSaveRequest: async (id, postBody) => {
    try {
      console.log(id);

      const res = await axios.post(
        `http://localhost:3000/courses/CreateModule/${id}`,
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
  ReadModuleData: [],
  ModuleReadRequest: async (id) => {
    const res = await axios.get(
      `http://localhost:3000/courses/ReadModuleByCourseId/${id}`,
      {
        withCredentials: true,
      }
    );
    if (res.data["status"] === "success") {
      set({ ReadModuleData: res.data["data"] });
    }
  },
  DeleteModuleRequest: async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/courses/DeleteModule/${id}`,
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
  ModuleData: { title: "", image: "", description: "" },
  ModuleDataChange: (name, value) => {
    set((state) => ({
      ModuleData: {
        ...state.ModuleData,
        [name]: value,
      },
    }));
  },
  UpdateModuleRequest: async (id, postBody) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/courses/UpdateModule/${id}`,
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
  ModuleData: null,
  ReadRequestByModuleID: async (id) => {
    const res = await axios.get(
      `http://localhost:3000/courses/ReadModuleByModuleId/${id}`,
      {
        withCredentials: true,
      }
    );

    if (res.data["status"] === "success") {
      set({ ModuleData: res.data["data"][0] });
    }
  },
}));
export default ModuleStore;
