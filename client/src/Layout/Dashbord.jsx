// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
// const Dashbord = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const token = Cookies.get("token");
//   let role = null;
//   let Id = null;

//   if (token) {
//     const decodedToken = jwtDecode(token);
//     role = decodedToken.role;
//     Id = decodedToken._id;
//   }

//   const handleLogout = () => {
//     Cookies.remove("token");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-blue-400 p-6">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-3xl">
//           <Link to="/" className="hover:text-gray-400">
//             <span className="text-green-500">Quran</span> Shikkha
//           </Link>
//         </div>
//         <div className="hidden md:flex font-bold space-x-4">
//           {token ? (
//             <>
//               {role === "superadmin" && (
//                 <>
//                   <Link to="/" className="text-white hover:text-gray-400">
//                     Home
//                   </Link>
//                   <Link
//                     to="/viewAllUsers"
//                     className="text-white hover:text-gray-400"
//                   >
//                     View All Users
//                   </Link>
//                   <Link
//                     to="/manageUsers"
//                     className="text-white hover:text-gray-400"
//                   >
//                     Manage Users
//                   </Link>
//                   <Link
//                     to="/manageComments"
//                     className="text-white hover:text-gray-400"
//                   >
//                     Manage Comments
//                   </Link>
//                 </>
//               )}
//               {role === "admin" && (
//                 <>
//                   <Link
//                     to="/viewAllUsers"
//                     className="text-white hover:text-gray-400"
//                   >
//                     View All Users
//                   </Link>
//                   <Link
//                     to="/manageUsers"
//                     className="text-white hover:text-gray-400"
//                   >
//                     Manage Users
//                   </Link>
//                   <Link
//                     to="/manageComments"
//                     className="text-white hover:text-gray-400"
//                   >
//                     Manage Comments
//                   </Link>
//                 </>
//               )}
//               {role === "user" && (
//                 <>
//                   <Link
//                     to="/viewPosts"
//                     className="text-white hover:text-gray-400"
//                   >
//                     View Posts
//                   </Link>
//                 </>
//               )}
//               <Link
//                 to={`/view-profile-by-id/${Id}`}
//                 className="text-white hover:text-gray-400"
//               >
//                 Profile
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="text-white hover:text-gray-400"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/" className="text-white hover:text-gray-400">
//                 Home
//               </Link>
//               <Link to="/Course" className="text-white hover:text-gray-400">
//                 Course
//               </Link>
//               <Link to="/Books" className="text-white hover:text-gray-400">
//                 Books
//               </Link>
//               <Link to="/AboutUs" className="text-white hover:text-gray-400">
//                 About Us
//               </Link>
//               <Link to="/ContactUs" className="text-white hover:text-gray-400">
//                 Contact Us
//               </Link>
//               <div className="relative inline-block -mt-2">
//                 <button
//                   className="bg-green-400 text-white py-2 px-4  font-semibold rounded hover:bg-green-600"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const dropdown = e.target.nextElementSibling;
//                     dropdown.classList.toggle("hidden");
//                     dropdown.classList.toggle("block");
//                   }}
//                 >
//                   My Account
//                 </button>
//                 <div className="dropdown-content absolute hidden bg-green-400 mt-2 min-w-[160px] shadow-lg z-10">
//                   <Link
//                     to="/register"
//                     className="block px-4 py-2 text-white hover:bg-green-600"
//                   >
//                     Register
//                   </Link>
//                   <Link
//                     to="/login"
//                     className="block px-4 py-2 text-white hover:bg-green-600"
//                   >
//                     Login
//                   </Link>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white hover:text-gray-400 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {token ? (
//               <>
//                 {role === "superadmin" && (
//                   <>
//                     <Link
//                       to="/viewAllUsers"
//                       className="block text-white hover:text-gray-400"
//                     >
//                       View All Users
//                     </Link>
//                     <Link
//                       to="/manageUsers"
//                       className="block text-white hover:text-gray-400"
//                     >
//                       Manage Users
//                     </Link>
//                     <Link
//                       to="/manageComments"
//                       className="block text-white hover:text-gray-400"
//                     >
//                       Manage Comments
//                     </Link>
//                   </>
//                 )}
//                 {role === "admin" && (
//                   <>
//                     <Link
//                       to="/viewAllUsers"
//                       className="block text-white hover:text-gray-400"
//                     >
//                       View All Users
//                     </Link>
//                     <Link
//                       to="/manageUsers"
//                       className="block text-white hover:text-gray-400"
//                     >
//                       Manage Users
//                     </Link>
//                     <Link
//                       to="/manageComments"
//                       className="block text-white hover:text-gray-400"
//                     >
//                       Manage Comments
//                     </Link>
//                   </>
//                 )}
//                 {role === "user" && (
//                   <>
//                     <Link
//                       to="/viewPosts"
//                       className="block text-white hover:text-gray-400"
//                     >
//                       View Posts
//                     </Link>
//                   </>
//                 )}
//                 <Link
//                   to="/viewProfile"
//                   className="block text-white hover:text-gray-400"
//                 >
//                   Profile
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left text-white hover:text-gray-400"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/" className="block text-white hover:text-gray-400">
//                   Home
//                 </Link>
//                 <Link
//                   to="/Course"
//                   className="block text-white hover:text-gray-400"
//                 >
//                   Course
//                 </Link>
//                 <Link
//                   to="/Books"
//                   className="block text-white hover:text-gray-400"
//                 >
//                   Books
//                 </Link>
//                 <Link
//                   to="/AboutUs"
//                   className="block text-white hover:text-gray-400"
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   to="/ContactUs"
//                   className="block text-white hover:text-gray-400"
//                 >
//                   Contact Us
//                 </Link>
//                 <div className="relative">
//                   <button
//                     className="bg-green-400 text-white py-2 px-2 font-semibold rounded hover:bg-green-600 text-center"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       const dropdown = e.target.nextElementSibling;
//                       dropdown.classList.toggle("hidden");
//                       dropdown.classList.toggle("block");
//                     }}
//                   >
//                     My Account
//                   </button>
//                   <div className="dropdown-content absolute hidden bg-green-400 mt-2 min-w-[160px] shadow-lg z-10">
//                     <Link
//                       to="/register"
//                       className="block px-4 py-2 text-black hover:bg-green-600"
//                     >
//                       Register
//                     </Link>
//                     <Link
//                       to="/login"
//                       className="block px-4 py-2 text-black hover:bg-green-600"
//                     >
//                       Login
//                     </Link>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Dashbord;
