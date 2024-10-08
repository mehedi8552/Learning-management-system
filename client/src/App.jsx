import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./Page/ResisterPage";
import Dashboard from "./Components/SuperAdmin/Dashbord";
import ProtectedRoute from "./Components/ProtectedRoute";
// import ViewAllUsers from './Components/Admin/ViewAllUsers';
import HomePage from "./Page/HomePage";
import ViewPosts from "./Components/ViewPosts";
import CreatePosts from "./Components/CreatePosts";
import PofilePage from "./Page/PofilePage";
import CoursePage from "./Page/CoursePage";
import AboutUsPage from "./Page/AboutUsPage";
import ContactUsPage from "./Page/ContactUsPage";
import CourseDetailsPage from "./Page/CourseDetailsPage";
import LoginPage from "./Page/LoginPage";
import BookPage from "./Page/BookPage";
import AUpdateCourse from "./Components/Admin/AUpdateCourse";
import CreateCourseCard from "./Components/Admin/ACreateCourseCard";
import UpdateModule from "./Components/Admin/BUpdateModule";
import CreateModuleCard from "./Components/Admin/BCreateModuleCard";
import UpdateContent from "./Components/Admin/UpdateContent";
import UploadContentCard from "./Components/Admin/UploadContentCard";

import Dash from "./Components/SuperAdmin/Dash";
import Courses from "./Components/SuperAdmin/Courses";
import Instructors from "./Components/SuperAdmin/Instructors";
import Students from "./Components/SuperAdmin/Students";
import Partners from "./Components/SuperAdmin/Partners";
import Testimonials from "./Components/SuperAdmin/Testimonials";
import Categories from "./Components/SuperAdmin/Categories";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Course" element={<CoursePage />} />
        <Route path="/CourseDetails" element={<CourseDetailsPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/Books" element={<BookPage />} />

        {/* --------------------------------Auth Routes-------------------------------------- */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* ---------------------------------------------------------------------------------- */}

        {/* --------------------------------Admin Routes-------------------------------------- */}

        <Route
          path="/UpdateCourse/:CourseID"
          element={
            <ProtectedRoute>
              <AUpdateCourse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/CreateCourseCard"
          element={
            <ProtectedRoute>
              <CreateCourseCard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/UpdateModule/:ModuleID"
          element={
            <ProtectedRoute>
              <UpdateModule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/CreateModuleCard/:CourseID"
          element={
            <ProtectedRoute>
              <CreateModuleCard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/UpdateContent/:ContentID"
          element={
            <ProtectedRoute>
              <UpdateContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/UploadContentCard/:ModuleID"
          element={
            <ProtectedRoute>
              <UploadContentCard />
            </ProtectedRoute>
          }
        />

        {/* ------------------------------------Super Admin Routes---------------------------------------------- */}
        <Route path="" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
        <Route path="/Dash" element={<Dash />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="students" element={<Students />} />
        <Route path="partners" element={<Partners />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="categories" element={<Categories />} />
        </Route>
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* ------------------------------------------------------------------------------------- */}
        <Route
          path="/view-profile-by-id/:id"
          element={
            <ProtectedRoute>
              <PofilePage />
            </ProtectedRoute>
          }
        />
        {/* -------------------------------Instractor Routes--------------------------------------------- */}
        <Route path="/CreateCourse/:insID" element={<CreatePosts />} />
        <Route path="/viewPosts" element={<ViewPosts />} />
        {/* <Route path="/viewAllUsers" element={<ProtectedRoute><ViewAllUsers /></ProtectedRoute>} /> */}
        {/* <Route path="/manageUsers" element={<ProtectedRoute><ManageUsers /></ProtectedRoute>} /> */}
        {/* <Route path="/manageComments" element={<ProtectedRoute><ManageComments /></ProtectedRoute>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
