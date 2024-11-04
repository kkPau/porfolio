import React, { useRef } from "react";
import { TbBrandFlutter } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import { SiPython } from "react-icons/si";
import frca from "../assets/frca.png";
import casepunch from "../assets/Casepunch.png";
import hairsalon from "../assets/hairsalon.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Facial Recognition for Class Attendance",
    technologies: [
      <TbBrandFlutter key={1} />,
      <SiMongodb key={2} />,
      <SiFastapi key={3} />,
      <SiPython key={4} />,
    ],
    images: frca,
    description:
      "A cross-platform mobile application that makes it easy for lecturers to take student attendance in class. Students can only mark attendance when present in class and time is within timeframe dedicated for the class.",
    github: "https://github.com/misterkwao/facial_recog_attendance_app.git",
  },
  {
    id: 2,
    title: "Blog Activity App",
    technologies: [<TbBrandFlutter key={1} />, <RiFirebaseFill key={2} />],
    images: frca,
    description:
      "A cross-platform mobile application that allows users to make posts which can then be liked and commented on by other users. There is also a chat feature that allows a user to exchange messages with any other user on the platform.",
    github: "https://github.com/kkPau/consilium-repo.git",
  },
  {
    id: 3,
    title: "Food Ordering App",
    technologies: [<TbBrandFlutter key={1} />, <RiFirebaseFill key={2} />],
    images: frca,
    description:
      "A cross-platform mobile application that allows users browse through a category of foods and add them to a cart or remove from the cart to place an order.",
    github: "https://github.com/kkPau/dine_with_paa.git",
  },
  {
    id: 4,
    title: "Doctor Appointment Booking App",
    technologies: [
      <TbBrandReact key={1} />,
      <TbBrandTailwind key={2} />,
      <FaHtml5 key={3} />,
      <FaCss3Alt key={4} />,
    ],
    images: frca,
    description:
      "A web app that allows users to browse through a category of doctors and then book appointments with them on any day only if there is still a slot available. It also allows the users to make payments which is the booking fee that is charged by the doctor. An admin panel and doctor's panel also provided to add and remove doctors and also view appointments respectfully",
    github: "https://github.com/kkPau/dine_with_paa.git",
  },
  {
    id: 5,
    title: "Personal Portfolio Page",
    technologies: [
      <TbBrandReact key={1} />,
      <TbBrandTailwind key={2} />,
      <FaHtml5 key={3} />,
      <FaCss3Alt key={4} />,
    ],
    images: frca,
    description:
      "A personal portfolio site that showcases my skills and talents. Also displays my various projects which I have undertaken.",
    github: "https://github.com/kkPau/dine_with_paa.git",
  },
  {
    id: 6,
    title: "Phone Accessories Business Flyer",
    technologies: [<SiCanva key={1} />],
    images: casepunch,
    description:
      "A beatiful business flyer that attracts the eyes of potential customers and also provides clearly the variety of services provided by thye business.",
    github: "https://github.com/kkPau/ecommerce-shopping-cart.git",
  },
  {
    id: 7,
    title: "Hair Salon Business Flyer",
    technologies: [<SiCanva key={1} />],
    images: hairsalon,
    description:
      "A beatiful business flyer that attracts the eyes of potential customers and also provides clearly the variety of services provided by the business.",
    github: "https://github.com/kkPau/ecommerce-shopping-cart.git",
  },
];

const Projects = () => {
  const projectsRef = useRef(null);

  useGSAP(() => {
    gsap.from(projectsRef.current, {
      opacity: 0,
      y: "+=400",
      duration: 3,
      ease: "ease.in(1)",
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "-=400 center",
        end: "-500 300px",
        // markers: true,
        scrub: 3,
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="text-white mt-28 pt-10 pb-10" id="projects">
      <div className="text-center">
        <h1 className="font-extrabold text-4xl md:text-5xl font-grotesk pb-10">
          My <span className="text-primary">Projects</span>
        </h1>
      </div>
      <div
        ref={projectsRef}
        className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-10 sm:mx-20 md:mx-28 lg:mx-44"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="mx-auto text-center w-full px-6 pb-6 bg-projectOpaque border-4 border-gray-900 rounded-[20px] hover:shadow-lg hover:shadow-red-500 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="mt-6 mb-3">
              <img
                src={project.images}
                alt="project image"
                className="h-60 w-50 object-cover mx-auto py-5"
              />
            </div>

            <h3 className="text-center text-white text-2xl font-bold">
              {project.title}
            </h3>
            <div className="flex space-x-6 justify-center items-center text-white text-3xl py-5">
              {project.technologies}
            </div>
            {/* <p className='list-disc pb-5'>{project.description}</p> */}
            <button className="text-red-400 border border-red-400 hover:shadow-lg hover:shadow-red-500 rounded-full md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2">
              <a href={project.github} target="_blank">
                View Project
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
