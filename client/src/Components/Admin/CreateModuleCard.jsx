import React from "react";

const ModuleCard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-yellow-200">
      <div className="w-fit h-fit p-10 bg-white rounded">
        <div className="flex space-x-4">
          <p className="px-6 py-2 bg-green-400  text-white font-bold  rounded">1</p>
          <p className="text-center pt-2 font-bold">সহজ কুরআন শিক্ষা ক্লাস ১</p>
        </div>
        <p className="text-justify pt-3">একদম আরবি প্রথম হরফ থেকে শুরু করে মাত্র ১৪টি সূত্রে ২৫টি লাইভ ক্লাসে শুদ্ধভাবে কোরআন তিলাওয়াত শিখুন</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">এখানে ক্লিক</button>
      </div>
    </div>
  );
};

export default ModuleCard;
