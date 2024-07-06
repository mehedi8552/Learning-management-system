import React from "react";
import { FaAward, FaGraduationCap, FaUsers } from "react-icons/fa";
const Achivement = () => {
  return (
    <div className="grid xl:grid-cols-2 gap-10  bg-blue-200 w-full h-full xl:pl-28 xl:pr-40 xl:py-32 pb-20">
      <div className="px-10 pt-10 xl:w-[700px] xl:pl-32">
        <p className="text-3xl font-bold">সবচেয়ে সহজ পদ্ধতিতে কুরআন শিক্ষা কোর্স</p>
        <p className="font-light pt-2 xl:pt-6">
          একশব্দে কুরআন শিক্ষা এমন একটি পদ্ধতি যার মাধ্যমে যে কোন বয়সের মানুষ
          খুব সহজেই কুরআন শিখতে পারে তাও মাত্র ১৫ ঘন্টায়। ১৯৯৩ সাল থেকে কয়েক
          হাজার প্রতিষ্ঠানে ৫০ লক্ষের অধিক কুরআন শিক্ষা করেছে এই পদ্ধতিতে।
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:px-20 px-10" >
        <div className="w-full h-full space-y-1 flex flex-col mt-10 justify-center items-center bg-white rounded" >
          <p className="text-4xl ">
            <FaAward />
          </p>
          <p className="text-2xl font-bold">১৯৯৩</p>
          <p className="font-light">সাল থেকে</p>
        </div>
        <div className="w-full h-full space-y-1 flex flex-col mt-10 justify-center items-center bg-white rounded" >
          <p className="text-4xl ">
          <FaUsers />
          </p>
          <p className="text-2xl font-bold">১০ লক্ষ +</p>
          <p className="font-light">শিক্ষার্থী</p>
        </div>
        <div className="w-full h-full space-y-1 flex flex-col mt-10 justify-center items-center bg-white rounded" >
          <p className="text-4xl ">
            <FaGraduationCap />
          </p>
          <p className="text-2xl font-bold">২ হাজার +</p>
          <p className="font-light">মুয়াল্লিম</p>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
