import React from "react";

let image = [
  {
    img: "https://asqsfb.com/wp-content/uploads/2022/03/Picture5.jpg",
    title: "আশুলিয়ায় একশব্দে কুরআন শিক্ষা মাদরাসার ছাত্র-ছাত্রীদের আরবি লেখা",
  },
  {
    img: "https://asqsfb.com/wp-content/uploads/2022/03/Picture2-300x205.jpg",
    title: "নরসিংদী জামেয়া কাসেমীয়া মাদরাসা মসজিদে ক্লাসের একাংশ।",
  },
  {
    img: "https://asqsfb.com/wp-content/uploads/2022/03/Picture8-300x200.jpg",
    title: "বাউনিয়া’র একটি গার্মেন্টস ফ্যাক্টরীতে ক্লাসে উপস্থিতির একাংশ।",
  },
  {
    img: "https://asqsfb.com/wp-content/uploads/2022/03/Picture3-300x185.png",
    title:
      "মসজিদে ক্লাস নিচ্ছেন ফাদিলাতুশ শায়েখ জনাব আবুল হাসানাত মুহাম্মাদ ইমদাদুল্লাহ",
  },
];
const Gallary = () => {
  return (
    <div>
      <div className="grid grid-cols-2  xl:grid-cols-4 gap-4 px-10  xl:pb-8 xl:px-64">
        {image.map((item,i) => {
          return (
            <div className="w-full h-full py-10  bg-white rounded">
              <img className="w-full h-2/3 rounded" src={item.img} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallary;
