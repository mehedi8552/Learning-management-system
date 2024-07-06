import { create } from "zustand";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
const CourseStore = create((set) => ({

    CourseStoreData: null,
    CourseReq: async (_id,body) => {
    let res = await axios.get(
      `http://localhost:3000/auth/view-profile-by-id/${_id}`,body,

      {
        withCredentials: true,
      }
    );
    // let res = await axios.post(`/api/v1/UpdateProfile`,postBody);
    if (res.data["status"] === "success") {
      set({ ViewProfileData: res.data["data"] });
    }
  },
}));

export default CourseStore;