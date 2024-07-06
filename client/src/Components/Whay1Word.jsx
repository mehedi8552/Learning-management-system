import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
const Whay1Word = () => {
    const CourseData = [
        {
          _id: 0,
          image:
            "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
          title: "সহজ পদ্ধতিতে সাজানো হয়েছে",
          Description: "আমাদের কোর্স এমন ভাবে সাজানো হয়েছে যে, সবাই খুব সহজেই শিখতে পারবেন ইনশা-আল্লাহ",
        },
        {
          _id: 0,
          image:
            "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
          title: "হরফগুলো চার ভাগে ভাগ করা হয়েছে",
          Description: "আরবি ২৯ টি হরফকে লিখে শিক্ষা দেয়ার সুবিধার্থে মাত্র চারটি ভাগে ভাগ করা হয়েছে। যা সত্যিই অভিনব এবং চমৎকার ।",
        },
        {
          _id: 0,
          image:
            "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=", // Replace with actual image paths
          title: "এক শব্দের মাধ্যমে কুরআন শিক্ষা",
          Description: "একটি মাত্র শব্দের মাধ্যমে হরফ, হরকত, মাদ, যযম ও তাশদীদ শিক্ষা দেয়া হয়। যার মাধ্যমে পুরো কুরআন মাজীদ শিক্ষা করা যায়।",
        },
      ];
    return (
        <div className="h-full w-full mb-10 bg-cover bg-center bg-white">
        <div className="pt-10">
          <div className="text-center  bg-opacity-70">
            <p className="font-light">একশব্দে কুরআন শিক্ষা</p>
            <p className="text-4xl pt-4 font-bold">আমাদের কুরআন শিক্ষা কোর্স কেন সবচেয়ে সহজ?</p>
          </div>
  
          <div className="grid grid-cols-1 text-center xl:pt-20 justify-center xl:mx-60  md:grid-cols-2 xl:grid-cols-3 gap-4 items-center sm:mx-10 pt-10 ">
            {CourseData.map((data, i) => (
              <div className="h-full rounded  w-fit  pb-8 bg-slate-100 hover:shadow-md space-y-4">
                <div className="pl-10 flex  justify-center pr-5 text-gray-600 text-lg pt-2 font-light">
                    <FaArrowAltCircleRight className='text-4xl text-blue-400 mt-6'/>
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

export default Whay1Word;