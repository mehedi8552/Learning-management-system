import React from "react";
import CourseImg from "../assets/quran-shikkha.jpg";
const CourseDetails = () => {
  return (
    <div className="my-10">
      <div className="px-9 lg:px-48 ">
        <img className="w-full" src={CourseImg} alt="" />
      </div>
      <div className="px-9 lg:px-48">
        <div className="w-full h-full bg-white shadow-md ">
          <div className="px-14 lg:px-20 py-8 ">
            <div className="h-full w-full bg-gray-100 rounded grid grid-cols-1 md:grid-cols-3 space-y-4 py-4 font-bold text-blue-950  text-center">
              <div className="space-y-2">
                <p>Current Status</p>
                <button
                  type="button"
                  class="text-white bg-green-500 hover:bg-blue-500  focus:outline-none focus:ring-2  font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 "
                >
                  Not Enrolled
                </button>
              </div>
              <div className="space-y-2">
                <p>Price</p>
                <p>৳ 500</p>
              </div>
              <div className="space-y-2">
                <p>Get Started</p>
                <button
                  type="button"
                  class="text-white bg-green-500 hover:bg-blue-500 focus:outline-none focus:ring-2  font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 "
                >
                  Take this Course
                </button>
              </div>
            </div>
          </div>
          <div className="px-24 lg:px-22 text-justify py-8">
            <p>আসসালামুআলাইকুম ওয়ারাহমাতুল্লাহ।</p>
            <p>طلب العلم فريضه على كل مسلم ومسلمه</p>
            <p>
              প্রয়োজনীয় দ্বীনি ইলম অর্জন করা প্রত্যেক মুসলিম নারী-পুরুষের উপর
              ফরজ।
            </p>
            <p>
              খুব শীঘ্রই একটি শব্দের মাধ্যমে কুরআনুল কারীমের সহিহ তিলাওয়াত
              শিক্ষার নতুন একটি ব্যাচের ক্লাস শুরু হবে ইনশাআল্লাহ। ক্লাস নিবেন:-
              এনটিভি কুরআন শিক্ষার আসর অনুষ্ঠানের সম্মানিত পরিচালক
              <span className="font-bold">
                শাইখ আবুল হাসানাত মুহাম্মদ ইমদাদুল্লাহ
              </span>
            </p>
            <p>ক্লাসে যা থাকবে:-</p>
            <div>
              <ui>
                🌿একটি শব্দের মাধ্যমে সহি শুদ্ধভাবে কুরআন শিক্ষা, কুরআন বুঝার
                জন্য এরাবিক মৌলিক ধারণা প্রদান।
              </ui>
              <br />
              <ui>🌿 সহীহ শুদ্ধভাবে মদ,মাখরাজ, সিফাত ও উচ্চরণ শিক্ষা</ui>
              <br />
              <ui>
                🌿একজন প্রকৃত মুসলিমের জীবন পরিচালনা করার জন্য প্রয়োজনীয়
                মাসায়েল শিক্ষা।
              </ui>
              <br />
              <ui>
                🌿দৈনন্দিন জীবনের প্রয়োজনীয় সহীহ হাদীসের ভিত্তিতে জিকির ও দুআ
                শিক্ষা।
              </ui>
              <br />
              <ui>🌿প্রতিটি ক্লাসের ভিডিও ক্লিপস প্রদান করা হবে</ui>
              <br />
              <ui>
                🌿কোর্স শেষে পরীক্ষার মাধ্যমে উত্তীর্ণদের সনদ প্রদান করা হবে
                ইনশাআল্লাহ।
              </ui>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
