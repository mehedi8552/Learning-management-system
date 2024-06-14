
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import Profile from './Components/Profile';
import ViewAllUsers from './Components/ViewAllUsers';
//import ManageUsers from './Components/';
//import ManageComments from './ManageComments';
//import ViewPosts from './Components/';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/view-profile-by-id/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/viewAllUsers" element={<ProtectedRoute><ViewAllUsers /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          {/* <Route path="/manageUsers" element={<ProtectedRoute><ManageUsers /></ProtectedRoute>} /> */}
          {/* <Route path="/manageComments" element={<ProtectedRoute><ManageComments /></ProtectedRoute>} /> */}
          {/* <Route path="/viewPosts" element={<ProtectedRoute><ViewPosts /></ProtectedRoute>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


