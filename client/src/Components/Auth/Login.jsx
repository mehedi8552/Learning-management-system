import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
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
      navigate("/");
      alert("Login successful");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center bg-cyan-200 h-screen">
      <form className="bg-white p-6 rounded shadow-2xl" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
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
        <div className="flex justify-center  pt-4">
          <p>If you Don't have any account go to</p>
          <Link  className="px-2 py-1 rounded text-white bg-green-600 ml-4" to={"/register"}>Sign Up</Link>
        </div>
      </form>
      
    </div>
  );
};

export default Login;
