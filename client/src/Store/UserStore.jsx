import { create } from "zustand";
import axios from "axios";
// import Cookies from "js-cookie";
const UserStore = create((set) => ({
  ViewProfileData: {
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    education: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    village: "",
  },

  ProfileDataChange: (name, value) => {
    set((state) => ({
      ViewProfileData: {
        ...state.ViewProfileData,
        [name]: value,
      },
    }));
  },

  ViewProfileRequest: async (id) => {
    let res = await axios.get(
      `http://localhost:3000/auth/view-profile-by-id/${id}`,

      {
        withCredentials: true,
      }
    );

    if (res.data["status"] === "success") {
      set({ ViewProfileData: res.data["data"] });
    }
  },
  ProfileSaveRequest: async (id, postBody) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/auth/Update-profile-by-id/${id}`,
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
}));

export default UserStore;
