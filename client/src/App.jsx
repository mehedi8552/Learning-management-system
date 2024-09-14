
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './Page/ResisterPage';
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
import Books from './Components/Books';
import CoursePage from './Page/CoursePage';
import AboutUsPage from './Page/AboutUsPage';
import ContactUsPage from './Page/ContactUsPage';
import CourseDetailsPage from './Page/CourseDetailsPage';
import LoginPage from './Page/LoginPage';
import BookPage from './Page/BookPage';
import DashBordPage from './Page/DashBordPage';

const App = () => {
  return (
    <Router>
        <Routes>   
          <Route path="/" element={<HomePage/>} />
          <Route path="/Course" element={<CoursePage/>} />
          <Route path="/CourseDetails" element={<CourseDetailsPage/>} />
          <Route path="/AboutUs" element={<AboutUsPage/>} />
          <Route path="/ContactUs" element={<ContactUsPage/>} />
          <Route path="/Books" element={<BookPage/>} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage/>} />

          <Route path="/view-profile-by-id/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/CreateCourse/:insID" element={<CreatePosts />} />
          <Route path="/viewPosts" element={<ViewPosts />} />
          <Route path="/viewAllUsers" element={<ProtectedRoute><ViewAllUsers /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><DashBordPage/></ProtectedRoute>} />
          {/* <Route path="/manageUsers" element={<ProtectedRoute><ManageUsers /></ProtectedRoute>} /> */}
          {/* <Route path="/manageComments" element={<ProtectedRoute><ManageComments /></ProtectedRoute>} /> */}
        </Routes>
    </Router>
  );
};

export default App;


