import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center  space-x-4">
      <Link to={"/register"} className="px-2 py-2 bg-green-600">
        Sign Up
      </Link>
      <Link to={"/login"} className="px-2 py-2 bg-green-600">
        Login
      </Link>
    </div>
  );
};

export default Home;
