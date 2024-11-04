import React, { useRef } from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaFileCode } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { GrVmMaintenance } from "react-icons/gr";
import { FaChartBar } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    image: <CiMobile3 />,
    title: "Mobile App Development",
    description:
      "Develop stunning, fast and user friendly cross platform mobile applications that put your business ahead.",
  },
  {
    id: 2,
    image: <FaFileCode />,
    title: "Web Development",
    description:
      "Create modern and responsive web applications that help businesses grow and succeed.",
  },
  {
    id: 3,
    image: <MdDesignServices />,
    title: "UI/UX Design",
    description:
      "Help businesses create engaging and user-friendly interfaces that help their customers find their way.",
  },
  {
    id: 4,
    image: <SiAdobephotoshop />,
    title: "Graphics Design",
    description:
      "Help businesses create visually appealing and engaging graphics that help their brand stand out.",
  },
  {
    id: 5,
    image: <FaChartBar />,
    title: "Digital Marketing",
    description:
      "Help businesses grow their visibility and reach their target audience.",
  },
  {
    id: 6,
    image: <GrVmMaintenance />,
    title: "Maintenance and Updates",
    description:
      "Maintain and roll out performance and security improvements for your applications.",
  },
];

const Services = () => {
  const serviceRef = useRef(null);

  useGSAP(() => {
    gsap.from(serviceRef.current, {
      opacity: 0,
      y: "-=100",
      duration: 3,
      ease: "ease.in(1)",
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "100 center",
        end: "400 300px",
        // markers: true,
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="text-white mt-28 pt-10 pb-10" id="services">
      <div className="text-center">
        <h1 className="font-extrabold text-4xl md:text-5xl pb-10">
          My <span className="text-primary">Services</span>
        </h1>
      </div>
      <div
        ref={serviceRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10 sm:mx-20 md:mx-28 lg:mx-44"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="p-7 border border-red-400 rounded-lg hover:shadow-lg hover:shadow-red-500 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-center items-center text-primary text-5xl pb-4">
              {service.image}
            </div>
            <h3 className="text-center text-white text-2xl font-bold pb-6">
              {service.title}
            </h3>
            <p>
              <li className="list-disc">{service.description}</li>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
