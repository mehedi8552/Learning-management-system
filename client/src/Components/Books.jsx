import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import jalalain from "../assets/BookImage/Tafsir e jalalain.png"
const CourseData = [
    {
      _id: 0,
      image:
        "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
      title: "একশব্দে কুরআন শিক্ষা",
      link: "/CourseDetails",
    },
    {
      _id: 0,
      image:
      jalalain, // Replace with actual image paths
      title: "Tafsir e jalalain",
      link: {
        link1: "ia801205.us.archive.org/8/items/jalalain/Jalaline1-almodina.com.pdf",
        link2: "ia601205.us.archive.org/8/items/jalalain/Jalaline2-almodina.com.pdf ",
        link3: "ia801205.us.archive.org/8/items/jalalain/Jalaline3-almodina.com.pdf",
        link4: "ia601205.us.archive.org/8/items/jalalain/Jalaline4-almodina.com.pdf",
        link5: "ia601205.us.archive.org/8/items/jalalain/Jalaline5-almodina.com.pdf",
        link6: "ia801205.us.archive.org/8/items/jalalain/Jalaline6-almodina.com.pdf",
        link7: "ia801205.us.archive.org/8/items/jalalain/Jalaline7-almodina.com.pdf",
      },
    },
    {
      _id: 0,
      image:
        "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
      title: "অনলাইনে কুরআন শিক্ষা কোর্স (মহিলা)",
      link: "/CourseDetails",
    },
  ];
const Books = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:mx-60 gap-4 mx-4 sm:mx-10 py-10 ">
      {CourseData.map((data, i) => (
        <div className="h-full rounded  w-fit pb-8 bg-slate-100 space-y-4">
          <img className="rounded" src={data.image} alt="" />
         
          <p className="pl-10 pr-5 text-gray-600 text-lg pt-2 font-bold">
            {data.title}
          </p>
          <div className="flex justify-between pt-4">
            <div>
              <p className=" ml-6 w-fit h-fit py-1 px-3 text-white bg-green-400">
                Free
              </p>
            </div>
            <div className="text-right pr-6">
              <Link to={data.link} key={i} className="flex ">
                <p className="font-bold text-lg underline text-gray-700">
                  Enroll Now
                </p>
                <FaArrowAltCircleRight className="mt-2 ml-2 text-lg text-gray-700" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
