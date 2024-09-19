import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserStore from "../Store/UserStore";
import { toast } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Profile = () => {
  const [startDate, setStartDate] = useState(new Date());
  let {
    ViewProfileRequest,
    ViewProfileData,
    ProfileDataChange,
    ProfileSaveRequest,
  } = UserStore();
  let { id } = useParams();
  useEffect(() => {
    (async () => {
      await ViewProfileRequest(id);
    })();
  }, []);

  const Save = async () => {
    let res = await ProfileSaveRequest(id, ViewProfileData);
    if (res) {
      toast.success("Profile Update Success");
      window.location.reload();
    }
  };

  return (
    <div className="h-full w-full p-10 ">
      <div className="  p-10 pb-5">
        <h1 className=" py-3 text-center text-2xl font-bold pb-6">
          Personal Information
        </h1>
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-6">
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Profile Image</label>
            <input className="h-full w-full border-gray-200" type="file" />
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Full Name</label>
            <input
              value={ViewProfileData?.name}
              onChange={(e) => {
                ProfileDataChange("name", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor=""> Email</label>
            <input
              value={ViewProfileData?.email}
              onChange={(e) => {
                ProfileDataChange("email", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor=""> Password</label>
            <input
              value={ViewProfileData?.password}
              onChange={(e) => {
                ProfileDataChange("password", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="password"
            />
          </div>
          <div>
            <label htmlFor="">Date of Birth</label>
            <input
              value={ViewProfileData?.dob ? new Date(ViewProfileData?.dob).toISOString().substr(0, 10) : ""}
              onChange={(e) => {
                ProfileDataChange("dob", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="date"
            />
            {/* <DatePicker
              selected={ViewProfileData?.dob ? new Date(ViewProfileData?.dob) : null}
              onChange={(date) => {
                ProfileDataChange("dob", date.toISOString());
              }}
            /> */}
            
          </div>
          <div>
            <label htmlFor=""> Gender</label>
            <input
              value={ViewProfileData?.gender}
              onChange={(e) => {
                ProfileDataChange("gender", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div>
            <label htmlFor=""> Education</label>
            <input
              value={ViewProfileData?.education}
              onChange={(e) => {
                ProfileDataChange("education", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-fit  px-10 pb-5">
        <h6 className=" py-3 text-center text-2xl font-bold pb-6">
          Contact Information
        </h6>
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-6">
          <div className="space-y-4">
            <label htmlFor="">Phone Number</label>
            <input
              value={ViewProfileData?.phone}
              onChange={(e) => {
                ProfileDataChange("phone", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor=""> Address</label>
            <input
              value={ViewProfileData?.address}
              onChange={(e) => {
                ProfileDataChange("address", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor=""> City</label>
            <input
              value={ViewProfileData?.city}
              onChange={(e) => {
                ProfileDataChange("city", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor=""> District</label>
            <input
              value={ViewProfileData?.district}
              onChange={(e) => {
                ProfileDataChange("district", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor=""> Village</label>
            <input
              value={ViewProfileData?.village}
              onChange={(e) => {
                ProfileDataChange("village", e.target.value);
              }}
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
        </div>
        <button
          onClick={Save}
          className="py-2 px-5 rounded-md bg-green-400 mt-4 "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
