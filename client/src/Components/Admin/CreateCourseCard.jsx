import React from "react";
import { FaArrowAltCircleRight,FaEdit  } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const Module = () => {
    const CourseData = [
        {
          _id: 0,
          image:
            "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
          title: "একশব্দে কুরআন শিক্ষা",
          catagory: "কুরআন শিক্ষা",
        },
        {
          _id: 0,
          image:
            "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
          title: "অনলাইনে কুরআন শিক্ষা কোর্স (পুরুষ)",
          catagory: "কুরআন শিক্ষা",
        },
        {
          _id: 0,
          image:
            "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
          title: "অনলাইনে কুরআন শিক্ষা কোর্স (মহিলা)",
          catagory: "কুরআন শিক্ষা",
        },
      ];
  return (
    <div className="h-full w-full mb-10 bg-cover bg-center bg-white">
      <div className="pt-10">
        <div className="text-center  bg-opacity-70">
          <p className="font-light">আমাদের</p>
          <p className="text-2xl pt-4 font-bold">কুরআন শিক্ষা কোর্স</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:mx-60 gap-4 mx-4 sm:mx-10 pt-10 ">
          {CourseData.map((data, i) => (
            <div className="h-full rounded  w-fit pb-8 bg-slate-100 space-y-4">
              <img className="rounded" src={data.image} alt="" />
              <div className="absolute">
                <p className="text-white -mt-10 h-fit w-fit p-2 ml-10 bg-blue-500 rounded font-light">
                  {data.catagory}
                </p>
              </div>
              <p className="pl-10 pr-5 text-gray-600 text-lg pt-2 font-bold">
                {data.title}
              </p>
              <div className="flex justify-end px-10 py-4">
                <div className="flex">
                  <Link to={"/CourseDetails"} className="flex ">
                    <p className="font-bold text-lg underline text-gray-700">
                      Enter
                    </p>
                    <FaArrowAltCircleRight className="mt-2 ml-2 text-lg text-gray-700" />
                  </Link>
                </div>
              </div>
              <div className="flex justify-between px-20 py-4 bg-sky-500">
              <MdOutlineDelete className="text-2xl text-gray-500 cursor-pointer  "/>
              <FaEdit className="text-2xl text-gray-500 cursor-pointer"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Module;
