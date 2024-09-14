import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    u_name: "",
    u_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (formData.u_name && formData.u_email && formData.message) {
      toast.success("Your Message Send Success!");
      setFormData({
        u_name: "",
        u_email: "",
        message: "",
      });
      emailjs
        .sendForm("service_bxgj6je", "template_6vecemf", form.current, {
          publicKey: "McwWtiDQswb2V4eyZ",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      toast.error("Your input field is empty!");
    }
  };
  return (
    <section className="my-20 px-10 lg:px-56 xl:px-64">
      <div className="space-x-4 space-y-4 lg:space-y-1 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3">
      <div className="flex pl-4">
          <FaMapLocationDot className="  h-16 w-16 p-2  text-white bg-blue-500" />
          <div>
            <p className="font-bold pl-4 font-abc text-2xl ">EMAIL</p>
            <p className="text-grey2 pt-2 pl-4">
              <span className="font-semibold">Email :</span>mehedi193002106@.com
            </p>
          </div>
        </div>
        <div className="flex">
          <FaMailBulk className=" h-16 w-16 p-2  text-white bg-blue-500" />
          <div>
            <p className="font-bold pl-4 font-abc text-2xl ">EMAIL</p>
            <p className="text-grey2 pt-2 pl-4">
              <span className="font-semibold">Email :</span>mehedi193002106@.com
            </p>
          </div>
        </div>
        <div className="flex">
          <FaPhone className="h-16 w-16 p-2 text-white bg-blue-500" />
          <div>
            <p className="font-bold pl-4 font-abc text-2xl ">MY PHONE</p>
            <p className="text-grey2 pt-2 pl-4">
              <span className="font-semibold">Mobile :</span> 01770228395
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-full w-full">
        <div>
          <h1 className=" flex justify-center text-3xl font-bold text-grey2 font-abc mt-16">
            Get In Touch
          </h1>
          <h1 className="flex justify-center text-xl px-8 text-center text-grey2">
            Contact with Us For any question.
          </h1>
        </div>
        <div class="flex justify-center  mt-14 md:mb-10">
          <form
            class="w-full md:w-full  space-y-3"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <p class="font-semibold text-grey2 pb-2">Your Name</p>
              <input
                class="w-full h-10 border border-gray-500 focus:outline-pink px-3"
                type="text"
                name="u_name"
                value={formData.u_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <p class="font-semibold text-grey2 pb-2">Your Email</p>
              <input
                class="w-full h-10 border border-gray-500 focus:outline-pink px-3"
                type="email"
                name="u_email"
                value={formData.u_email}
                onChange={handleChange}
              />
            </div>
            <div>
              <p class="font-semibold text-grey2 pb-2">Your Message</p>
              <textarea
                class="w-full h-20 border border-gray-500 focus:outline-pink px-3"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="relative mt-4 md:mt-8 flex h-12 w-full items-center justify-center overflow-hidden bg-blue-500  text-white transition-all before:absolute before:h-0 before:w-0  before:bg-green before:duration-500 before:ease-in-out hover:shadow-pink hover:before:h-12 hover:before:w-full"
            >
              <span className="relative z-10">Send Message</span>
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
