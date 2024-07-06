import React, { useState } from "react";
import image from '../assets/flower-garden.png'

const images = [
  {
    _id: 0,
    src: 'https://static.vecteezy.com/system/resources/thumbnails/025/188/437/small_2x/vibrant-gerbera-daisy-in-wet-meadow-reflects-beauty-in-nature-generated-by-ai-photo.jpg', // Replace with actual image paths
    title: 'একশব্দে কুরআন শিক্ষা',
    description: 'বাংলাদেশের সকল পেশার, সকল বয়সের মানুষকে সবচেয়ে সহজ পদ্ধতিতে কুরআন শিক্ষা দেয়া আমাদের উদ্দেশ্য। ঘরে বসেই আপনি এখন কুর আন শিখতে পারবেন পৃথিবীর যে কোন যায়গা থেকে ।',
    button: 'Learn More'
  },
  {
    _id: 1,
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/24701-nature-natural-beauty.jpg', // Replace with actual image paths
    title: 'Discover the Beauty of Nature',
    description: 'Our garden is a place where you can relax and unwind surrounded by nature.',
    button: 'Explore'
  },
  {
    _id: 2,
    src: 'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=', // Replace with actual image paths
    title: 'Enjoy the Fresh Air',
    description: "Come and breathe in the fresh air of our garden. It's a great place to relax and relax.",
    button: 'Come Here'
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${currentImage.src})` }}>
      <button className="z-10  absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-4 py-2 rounded-l cursor-pointer"
         onClick={showNextImage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd" />
        </svg>
      </button>
      <button className=" z-10 absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-4 py-2 rounded-r cursor-pointer"
        onClick={showNextImage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd" />
        </svg>
      </button>
      <div className="relative flex flex-row items-center justify-center h-[500px] bg-opacity-70 bg-gray-900">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-white mb-4">{currentImage.title}</h2>
          <p className="text-lg px-4 xl:px-80 text-center text-white mb-8">{currentImage.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">{currentImage.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;

