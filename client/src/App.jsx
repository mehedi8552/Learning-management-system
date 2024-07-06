
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import Profile from './Components/Profile';
import ViewAllUsers from './Components/ViewAllUsers';
import HomePage from './Page/HomePage';
//import ManageUsers from './Components/';
//import ManageComments from './ManageComments';
import ViewPosts from './Components/ViewPosts';
import CreatePosts from './Components/CreatePosts';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Books from './Components/Books';
import CoursePage from './Page/CoursePage';

const App = () => {
  return (
    <Router>
        <Routes>   
          <Route path="/" element={<HomePage/>} />
          <Route path="/Course" element={<CoursePage/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/Books" element={<Books/>} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />

          <Route path="/view-profile-by-id/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/CreateCourse/:insID" element={<CreatePosts />} />
          <Route path="/viewPosts" element={<ViewPosts />} />
          <Route path="/viewAllUsers" element={<ProtectedRoute><ViewAllUsers /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          {/* <Route path="/manageUsers" element={<ProtectedRoute><ManageUsers /></ProtectedRoute>} /> */}
          {/* <Route path="/manageComments" element={<ProtectedRoute><ManageComments /></ProtectedRoute>} /> */}
        </Routes>
    </Router>
  );
};

export default App;


