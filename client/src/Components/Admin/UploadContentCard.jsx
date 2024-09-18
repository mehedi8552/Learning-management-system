import React from 'react';
import { FaPlayCircle } from "react-icons/fa";
import yuotube from "../../assets/pngegg.png"
const UploadContentCard = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-yellow-200">
        <div className="w-fit h-fit p-10 bg-white rounded">
          <div className="flex space-x-4">
            <img className='h-8 mt-1' src={yuotube} alt=""  />
            <p className="text-center pt-2 font-bold  text-gray-600">সহজ কুরআন শিক্ষা ক্লাস ১</p>
            <button  className="text-3xl text-gray-500"><FaPlayCircle /></button>
          </div>
        </div>
      </div>
    );
};

export default UploadContentCard;