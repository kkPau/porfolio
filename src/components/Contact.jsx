import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-gray-300 mt-28 pt-10 pb-10" id="contact">
      <div className="text-center">
        <h1 className="font-extrabold text-4xl md:text-5xl font-serif">
          Contact <span className="text-primary">Me</span>
        </h1>
      </div>
      <div className="pt-10 flex flex-col md:flex-row lg:flex-row px-8 sm:px-16 md:px-24 lg:px-32">
        <div className="md:flex-1 pt-10 pl-10 md:pt-0">
          <h3 className="text-3xl font-semibold text-primary">Let's Talk</h3>
          <p>
            I'm open to discussing Mobile Application projects and Frontend Web
            projects or partnerships
          </p>
          <div className="mt-8">
            <FaEnvelope className="inline-block text-primary mr-2" />
            <a
              href="mailto:karikarikenneth8@gmail.com"
              className="hover:underline"
            >
              karikarikenneth8@gmail.com
            </a>
          </div>
          <div className="mt-2">
            <FaPhoneAlt className="inline-block text-primary mr-2" />
            <span>+233552387144</span>
          </div>
          <div className="mt-2">
            <FaMapMarkedAlt className="inline-block text-primary mr-2" />
            <span>Amasaman, Accra, Ghana</span>
          </div>
        </div>

        <div className="flex-1 w-full pt-10 md:pt-0">
          <form action="" className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Your name
              </label>
              <input
                type="text"
                name=""
                placeholder="Enter Your Name"
                className="w-full p-2 text-gray-900 rounded bg-gray-200 border border-gray-600 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="text"
                name=""
                placeholder="Enter Your Email"
                className="w-full p-2 text-gray-900 rounded bg-gray-200 border border-gray-600 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                type="text"
                name=""
                rows="5"
                placeholder="Enter Your Message"
                className="w-full p-2 text-gray-900 rounded bg-gray-200 border border-gray-600 focus:outline-none focus:border-red-500"
              />
            </div>
            <button className="text-primary border rounded-full border-red-400 hover:shadow-lg hover:shadow-red-500 md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
