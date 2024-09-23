import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import UserStore from "../../Store/UserStore";
const MyComponent = () => {
  const { ViewProfile, ViewProfileData } = UserStore();
  const navigate = useNavigate();
  var token = Cookies.get('token');
  const decoded = jwtDecode(token);
  const { role, _id } = decoded;
  const fetchData = async (role) => {
    try {
      if (role) {
        navigate("/dashboard");
        toast("Form submitted successfully!");
      } 
      else {
        navigate("/login");
        return;
      }
    } catch (error) {
      console.log("err");
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    (async () => {
      await ViewProfile(_id);
      fetchData(role);
    })();
  }, []);
  return (
    <div>
      {ViewProfileData ? (
        <div>
          <p>User Role: {ViewProfileData.name}</p>
          <p>User ID: {ViewProfileData._id}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
