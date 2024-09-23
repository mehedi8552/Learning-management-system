import React, { useState } from "react";

const Courses = () => {
    const [IsCourse, setIsCourse] = useState(true);

  const  handlaClick = () => {
    setIsCourse(!IsCourse);
    };

const coursesData = [
  {
    title: "needed How To Become a Management Consultant",
    price: "$15",
    category: "Business",
    instructor: "Smith",
    videos: 1,
    homepage: "Homepage",
    status: "Approved",
  },
  {
    title: "Marketing    success for your consultancy - build your brand",
    price: "$15",
    category: "Business",
    instructor: "Smith",
    videos: 1,
    homepage: "Homepage",
    status: "Approved",
  },
];

const newCoursesData = [
  {
    title: "How To Become a Management Consultant",
    price: "$15",
    category: "Business",
    instructor: "Smith",
    videos: 1,
    homepage: "Homepage",
    status: "Approved",
  },
  {
    title: "Marketing success for your consultancy - build your brand",
    price: "$15",
    category: "Business",
    instructor: "Smith",
    videos: 1,
    homepage: "Homepage",
    status: "Approved",
  },
];
  return (
    <div>
      <div className="flex border-b border-slate-400 p-2 ">
        <button className={`pl-10 cursor-pointer ${IsCourse ? 'text-sky-400' : ''}`} onClick={handlaClick}>Courses</button>
        <button className={`pl-10 cursor-pointer ${!IsCourse ? 'text-sky-400' : ''}`} onClick={handlaClick}>New Arrival</button>
      </div>
      <div className="flex">
        <table
          border="1"
          style={{
            width: "100%",
            textAlign: "left",
            borderCollapse: "collapse",
          }}
        >
          <thead className="border-b border-slate-400 py-6">
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Instructor</th>
              <th>Videos</th>
              <th>Homepage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="py-6">
            {IsCourse
              ? coursesData.map((course, index) => (
                  <tr className="border-b border-slate-400 " key={index}>
                    <td>{course.title}</td>
                    <td>{course.price}</td>
                    <td>{course.category}</td>
                    <td>{course.instructor}</td>
                    <td>{course.videos}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "lightblue",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        {course.homepage}
                      </button>
                    </td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "lightgreen",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        {course.status}
                      </button>
                    </td>
                  </tr>
                ))
              : newCoursesData.map((course, index) => (
                  <tr className="border-b border-slate-400 " key={index}>
                    <td>{course.title}</td>
                    <td>{course.price}</td>
                    <td>{course.category}</td>
                    <td>{course.instructor}</td>
                    <td>{course.videos}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "lightblue",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        {course.homepage}
                      </button>
                    </td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "lightgreen",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        {course.status}
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>  
    </div>
  );
};

export default Courses;


