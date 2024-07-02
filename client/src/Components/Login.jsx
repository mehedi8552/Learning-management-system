import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        form
      );
      Cookies.set("token", response.data["token"], { expires: 7 });
      navigate("/dashboard");
      alert("Login successful");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="mb-2 p-2 border rounded w-full"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-2 p-2 border rounded w-full"
          value={form.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
