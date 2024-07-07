import React from "react";
import Akkel from "../assets/Upodestha/Akkel ali.png";
import ShamsulHaq from "../assets/Upodestha/MD Shamsul Haq.png";
import maruf from "../assets/Upodestha/maruf.jpg";
const CourseData = [
  {
    _id: 0,
    image: Akkel,
    title: "মাওলানা আক্কেল আলী ",
    Description: "অবসরপ্রাপ্ত দত্তেরাবাদ প্রাঃ বিঃ ",
  },
  {
    _id: 0,
    image: ShamsulHaq,
    title: " মাওলানা সামসুল হক",
    Description: "অবসরপ্রাপ্ত মাহিলাড়া ডিগ্রি কলেজ ",
  },
  {
    _id: 0,
    image: maruf,
    title: "মোঃ মারুফ বিল্লাহ ",
    Description: "এম এস সি ফ্রম বুয়েট ",
  },
];
const HonarableParson = () => {
  return (
    <div className="h-full w-full mb-10 bg-cover bg-center bg-white">
      <div className="pt-10">
        <div className="text-center  bg-opacity-70">
          <p className="text-4xl pt-4 font-bold">আমাদের উপদেষ্টামন্ডলী</p>
        </div>

        <div className="grid grid-cols-1 text-center xl:pt-20 justify-center xl:mx-60  md:grid-cols-2 xl:grid-cols-3 gap-4 items-center sm:mx-10 pt-10 px-4 ">
          {CourseData.map((data, i) => (
            <div className="h-full rounded  w-fit  pb-8 bg-slate-100 hover:shadow-md space-y-2">
              <div className="  ">
                <img className="w-fit h-1/2 rounded" src={data.image} alt="" />
              </div>
              <p className="pl-10 pr-5 text-gray-600  text-xl pt-2 font-bold">
                {data.title}
              </p>
              <p className="pl-10 pr-5 text-gray-600 text-lg pt-2 font-light">
                {data.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HonarableParson;
