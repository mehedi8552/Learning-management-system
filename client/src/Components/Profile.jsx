import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  console.log(profile);
  useEffect(() => {
    // Fetch user profile data
    fetch("http://localhost:3000/viewProfile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="text-2xl font-bold">Profile</h1>
    //   {profile ? (
    //     <div>
    //       <p><strong>Name:</strong> {profile.name}</p>
    //       <p><strong>Email:</strong> {profile.email}</p>
    //       <p><strong>Role:</strong> {profile.role}</p>
    //     </div>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>
    <div className="h-screen w-full p-10 ">
      <div className="  p-10 pb-5">
        <h1 className="font-medium py-3">Personal Information</h1>
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-6">
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Profile Image</label>
            <input className="h-full w-full border-gray-200" type="file" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Username</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="">Full Name</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor=""> Email</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor=""> Password</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="password"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-fit  px-10 pb-5">
        <h6 className="font-medium py-3">Contact Information:</h6>
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-6">
          <div className="space-y-4">
            <label htmlFor="">Phone Number</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor=""> Address</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor=""> City</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="password"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor=""> District</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="password"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor=""> Village</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="password"
            />
          </div>
        </div>
      </div>
      <div></div>
      <div className="w-full h-fit   px-10 pb-5">
        <h6 className="font-medium py-3">Personal Information</h6>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
          <div>
            <label htmlFor="">Date of Birth</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div>
            <label htmlFor=""> Gender</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="text"
            />
          </div>
          <div>
            <label htmlFor=""> Education</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="password"
            />
          </div>
          <div>
            <label htmlFor=""> Interests</label>
            <input
              className="h-12 w-full border border-gray-200 rounded-md"
              type="password"
            />
          </div>
        </div>
        <button className="py-2 px-5 rounded-md bg-green-400 mt-4">Save</button>
      </div>
    </div>
  );
};

export default Profile;
