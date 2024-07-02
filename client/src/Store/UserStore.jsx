import { create } from "zustand";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
const UserStore = create((set) => ({

  ViewProfileData: null,
  ViewProfile: async (_id) => {
    let res = await axios.get(
      `http://localhost:3000/auth/view-profile-by-id/${_id}`,

      {
        withCredentials: true,
      }
    );
    if (res.data["status"] === "success") {
      set({ ViewProfileData: res.data["data"] });
    }
  },
}));

export default UserStore;
