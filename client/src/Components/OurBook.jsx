import React from "react";
import book from "../assets/Quran-Shikkha-Book.jpg";
const OurBook = () => {
  return (
    <div>
      <div className=" flex justify-center  ">
        <button className=" sm:mt-20 lg:mt-28 mt-10 xl:mt-48 absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 sm:py-2 md:py-2 sm:px-4 md:px-4 rounded">
          Button
        </button>
        <img src={book} alt="" />
      </div>
    </div>
  );
};

export default OurBook;
