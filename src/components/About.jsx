import React, { useEffect, useRef } from "react";
import aboutpic from "../assets/aboutpic.jpg";
import { TbBrandFlutter, TbBrandReact, TbBrandTailwind } from "react-icons/tb";
import { SiCanva } from "react-icons/si";
import { CiSliderVertical } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ExperienceCard = ({ number, year, image }) => {
    return (
      <div className="flex-col">
        <p className="text-5xl font-semibold">{number}</p>
        <p className="pt-3 pb-4">{year}</p>
        {image}
      </div>
    );
  };

  const aboutRef = useRef(null);
  const aboutImg = useRef(null);
  const aboutDes = useRef(null);

  // let nameSplit = new SplitText('#name', {type: 'chars'})
  // let chars = nameSplit.chars
  // console.log(chars)

  useGSAP(() => {
    gsap.from(aboutRef.current, {
      opacity: 0,
      x: "-=400",
      duration: 4,
      ease: "ease.in(1)",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
        end: "bottom 300px",
        // markers: true,
        scrub: 3,
        once: true,
        toggleActions: "play none none none",
      },
    });

    gsap.from(aboutImg.current, {
      opacity: 0,
      y: "-=300",
      duration: 4,
      ease: "ease.in(1)",
      scrollTrigger: {
        trigger: aboutImg.current,
        start: "top center",
        end: "bottom 300px",
        // markers: true,
        name: "image",
        scrub: 3,
        toggleActions: "play none none none",
      },
    });

    gsap.from(aboutDes.current, {
      opacity: 0,
      y: "+=300",
      duration: 4,
      ease: "ease.in(1)",
      scrollTrigger: {
        trigger: aboutDes.current,
        start: "-=300 center",
        end: "-=300 300px",
        // markers: true,
        name: "description",
        scrub: 3,
        toggleActions: "play none none none",
      },
    });

    //use the defaults
    // gsap.from(chars, {
    //     yPercent: 130,
    //     stagger: 0.1,
    //     ease: 'back.out',
    //     duration: 1,
    // });//or customize things:

    // gsap.to('#name', {
    //   duration: 1,
    //   scrambleText: {
    //     text: "THIS IS NEW TEXT",
    //     chars: "XO",
    //     revealDelay: 0.5,
    //     speed: 0.3,
    //     newClass: "myClass"
    //   }
    // });
  });

  // useEffect(()=>{
  //     const tl = aboutRef.current
  //     gsap.from(aboutRef, {
  //         opacity: 0,
  //         x: '-=100',
  //         duration: 1,
  //         ease: 'bounce.out(1)',
  //         scrollTrigger:{
  //             trigger: aboutRef,
  //             start: 'top 90%',
  //             end: 'top 50%',
  //             toggleActions: 'play none none reverse'
  //         }
  //     })
  // }, [])

  return (
    <div className="text-white pt-10 pb-10" id="about">
      <div ref={aboutRef} className="text-center">
        <h1 className="font-extrabold text-4xl md:text-5xl font-serif">
          Who <span className="text-primary">am I?</span>
        </h1>
      </div>
      <div className="mt-10">
        <CiSliderVertical className="mx-auto text-5xl text-primary" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-32 mx-10 sm:mx-20 md:mt-4 md:mx-20 lg:mx-40 space-x-10">
        <div
          ref={aboutImg}
          className="w-full md:w-1/2 relative mb-7 md:mb-0 h-96 bg-gray-900 overflow-visible"
        >
          <div className="absolute border-4 w-[300px] h-[400px] top-[-40px] border-red-500 inset-0 mx-auto skew-y-2">
            <img
              className="absolute top-[-30px] left-[-20px] w-[400px] h-[400px] mx-auto transform duration-300 hover:scale-110"
              src={aboutpic}
              alt="About Pic"
            />
          </div>
        </div>
        <div ref={aboutDes} className="w-full md:w-1/2 p-4">
          <p className="text-3xl">
            I am{" "}
            <span id="name" className="text-primary">
              Karikari-Apau Kenneth
            </span>
            , a cross platform Mobile App Developer and Web Developer
          </p>
          <p className="pt-5">
            I have a passion for creating engaging and user-friendly
            applications that help people achieve their goals. I specialize in
            Flutter for mobile app development.
          </p>
          <p>
            I also happen to use React js along with Tailwind css for web
            development which allows me to build modern and responsive web
            applications.
          </p>
          <p>
            Also a Canva Graphic Designer and an AI and Data Science enthusiast.
          </p>
          <p className="pb-5">
            I'm always looking for new opportunities to learn and grow my skills
            to become one of the very best it the industry.
          </p>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-8 pb-8">
            <p>Name: Karikari-Apau Kenneth</p>
            <p>Age: 22</p>
            <p>From: Accra, Ghana</p>
            <p>Email: karikarikenneth8@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="pt-10 flex space-x-6 sm:space-x-10 md:space-x-16 lg:space-x-28 justify-center text-center ">
        <ExperienceCard
          number={"3+"}
          year={"years"}
          image={
            <TbBrandFlutter className="text-red-400 mx-auto text-5xl shadow-lg shadow-red-500 hover:rotate-90" />
          }
        />
        <ExperienceCard
          number={"1+"}
          year={"month"}
          image={
            <TbBrandReact className="text-red-400 mx-auto text-5xl shadow-lg shadow-red-500 hover:rotate-90" />
          }
        />
        <ExperienceCard
          number={"1+"}
          year={"month"}
          image={
            <TbBrandTailwind className="text-red-400 mx-auto text-5xl shadow-lg shadow-red-500 hover:rotate-90" />
          }
        />
        <ExperienceCard
          number={"1+"}
          year={"year"}
          image={
            <SiCanva className="text-red-400 mx-auto text-5xl shadow-lg shadow-red-500 hover:rotate-90" />
          }
        />
      </div>
    </div>
  );
};

export default About;
