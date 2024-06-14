import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  let role = null;

  if (token) {
    const decodedToken = jwtDecode(token);
    role = decodedToken.role;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">
          <Link to="/" className="hover:text-gray-400">Role-Based Auth</Link>
        </div>
        <div className="space-x-4">
          {token ? (
            <>
              {role === 'superadmin' && (
                <>
                  <Link to="/viewAllUsers" className="text-white hover:text-gray-400">View All Users</Link>
                  <Link to="/manageUsers" className="text-white hover:text-gray-400">Manage Users</Link>
                  <Link to="/manageComments" className="text-white hover:text-gray-400">Manage Comments</Link>
                </>
              )}
              {role === 'admin' && (
                <>
                  <Link to="/viewAllUsers" className="text-white hover:text-gray-400">View All Users</Link>
                  <Link to="/manageUsers" className="text-white hover:text-gray-400">Manage Users</Link>
                  <Link to="/manageComments" className="text-white hover:text-gray-400">Manage Comments</Link>
                </>
              )}
              {role === 'user' && (
                <>
                  <Link to="/viewPosts" className="text-white hover:text-gray-400">View Posts</Link>
                </>
              )}
              <Link to="/viewProfile" className="text-white hover:text-gray-400">Profile</Link>
              <button onClick={handleLogout} className="text-white hover:text-gray-400">Logout</button>
            </>
          ) : (
            <>
              <Link to="/register" className="text-white hover:text-gray-400">Register</Link>
              <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
