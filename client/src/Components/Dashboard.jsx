import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    console.log(decoded._id);
    toast("Form submitted successfully!");
    if (!token) {
      navigate("/login");
    } else {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get(`http://localhost:3000/view-profile-by-id/:${decoded._id}`)
        .then((response) => setUser(response.data))
        .catch(() => navigate("/login"));
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Dashboard</h2>
        <p>Welcome, {user.name}</p>
        <p>Your role: {user.role}</p>
        <p>Hello i am sahariar</p>
      </div>
      <Toaster />
    </div>
  );
};

export default Dashboard;
