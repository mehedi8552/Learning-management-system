import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" sm:w-fit sm:space-y-4 md:flex md:justify-start md:space-x-2 md:w-fit p-10 py-10 md:pl-16 bg-blue-800 font-abc">
      <div className="md:w-5/12">
        <div className="text-2xl font-bold">
          <span >CW</span>
          <span className="text-pink-700">T</span>
        </div>
        <p className="text-justify 2 py-3  font-sans_serif pr-8 pb-2">
          Welcome to my creative corner! one Enthusiastic Full stack web
          developer & UI/UX designer with two years of digital Experience
          creating experiences that are visible Stunning and user-friendly.
        </p>
        <div className="flex justify-start space-x-2 pt-2 ">
          <div className="h-12 w-12 rounded-full flex justify-center items-center bg-black hover:bg-pink-600 transition hover:-translate-y-1 hover:scale-110">
            <a href="https://www.facebook.com/sahariar.hasan.24/">
              <FaFacebookF color="white" />
            </a>
          </div>
          <div className="h-12 w-12 rounded-full flex justify-center items-center bg-black hover:bg-pink-600 transition hover:-translate-y-1 hover:scale-110">
            <a href="https://github.com/mehedi8552">
              <FaGithub color="white" />
            </a>
          </div>
          <div className="h-12 w-12 rounded-full flex justify-center items-center bg-black hover:bg-pink-600 transition hover:-translate-y-1 hover:scale-110">
            <a href="https://www.instagram.com/sahariar_12/">
              <FaLinkedinIn color="white" />
            </a>
          </div>
          <div className="h-12 w-12 rounded-full flex justify-center items-center bg-black hover:bg-pink-600 transition hover:-translate-y-1 hover:scale-110">
            <a href="https://x.com/mahadi_24">
              <FaXTwitter color="white" />
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-4/12">
        <div className="space-y-3">
          <span className="text-black font-bold text-2xl">GET IN TOUCH</span>
          <p className="h-1 w-60 bg-white">
            <p className="h-1 w-10 bg-pink-600"></p>
          </p>
          <div>
            <p className="font-abc font-bold text-xl ">Locations</p>
            <p >Mirpur 11,Dhaka,Bangladesh</p>
          </div>
          <div>
            <p className="font-abc font-bold text-xl ">Email</p>
            <p >mehedi193002106@gmail.com</p>
          </div>
          <div>
            <p className="font-abc font-bold text-xl ">Phone</p>
            <p >+8801770228395</p>
          </div>
        </div>
      </div>
      <div className="md:w-4/12">
        <div className="space-y-3">
          <span className="2 font-bold text-2xl">INFORMATION</span>
          <p className="h-1 w-60 bg-white">
            <p className="h-1 w-10 bg-pink-600"></p>
          </p>
          <div className="space-y-3">
            <div>
              <NavLink className="2 py-8">Terms & Condition</NavLink>
            </div>
            <div>
              <NavLink className="2 py-8" href="">
                Privacy Policy
              </NavLink>
            </div>
            <div>
              <NavLink to={"/contact-us"} className="2 py-8">
                Contact Me
              </NavLink>
            </div>
            <div>
              <NavLink className="2 py-8" to="/faq">
                FAQs
              </NavLink>
            </div>
            <div>
              <NavLink className="2 py-8" href="">
                Report an issue
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-4/12">
        <div className="space-y-3">
          <span className="2 font-bold text-2xl">MY SERVICES</span>
          <p className="h-1 w-60 bg-white">
            <p className="h-1 w-10 bg-pink-600"></p>
          </p>
          <div className="space-y-3">
            <div>
              <a className="2" href="">
                Web Design
              </a>
            </div>
            <div>
              <a className="2" href="">
                Web Development
              </a>
            </div>
            <div>
              <a className="2" href="">
                UI/UX Design
              </a>
            </div>
            <div>
              <a className="2" href="">
                SEO Marketing
              </a>
            </div>
            <div>
              <a className="2" href="">
                Graphic Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
