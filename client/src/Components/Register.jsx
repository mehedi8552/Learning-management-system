import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        form
      );
      console.log(response);
      alert("Registration Successfull");
      
    } catch (error) {
      alert("Registration failed");
    }
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="mb-2 p-2 border rounded w-full"
          value={form.name}
          onChange={handleChange}
        />
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
        <select
          name="role"
          className="mb-2 p-2 border rounded w-full"
          value={form.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Superadmin</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Register
        </button>
        <div className="flex justify-center  pt-4">
          <p>If you have any account go to</p>
          <Link
            className="px-2 py-1 rounded text-white bg-green-600 ml-4"
            to={"/Login"}
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
