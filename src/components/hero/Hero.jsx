import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

import CV from "../../assets/CV.pdf";
import img from "../../assets/img.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer",
    "Mobile Developer",
    "Problem Solver",
    "Frontend Developer",
  ];

  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % roles.length;
        setCurrentRole(roles[nextIndex]);
        return nextIndex;
      });
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      <div className="md:h-[600px] h-[460px] md:w-[640px] w-[880px] bg-gradient-to-r from-[#0d182e] via-blue-900 to-blue-500 absolute opacity-40 rounded-full transform rotate-90 top-5 blur-lg "></div>

      <Navbar />

      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-5"
      >
        <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
            <h1 className="title-font sm:text-4xl mb-2 mt-5  text-white">
            <span className="text-white-400 font-semibold text-5xl"><span className=" font-bold text-yellow-400">Hi!</span>  It's Me</span><br/>
              <span className="text-white font-semibold text-7xl"> Ishara Dayasena</span>
            </h1>
            <span className="title-font sm:text-xl mb-6 text-xl  text-white">
              3rd Year Undergraduate at University Of Moratuwa
            </span>

            <p className="mb-10 leading-relaxed text-justify text-4xl font-bold ">
              I'm a{" "}
              <span className="text-yellow-400 font-bold">{currentRole}</span>
            </p>

            <div className="flex  justify-center mb-8 space-x-6">
              <div className="flex flex-row space-x-2">
                <a
                  href="https://github.com/IsharaDayasena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-gray-400"
                >
                  <FaGithub />
                </a>
              </div>

              <div className="flex flex-row space-x-2">
                <a
                  href="https://www.linkedin.com/in/ishara-dayasena-201314264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-gray-400"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="flex flex-row space-x-2">
                <a
                  href="mailto:isharahansani235@gmail.com"
                  className="text-white text-2xl hover:text-gray-400"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-5 ">
              <a href={CV} download>
                <button className="inline-flex font-semibold text-white border border-yellow-500 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-lg">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={img}
              alt="hero"
              className="object-cover object-center rounded-full w-150 h-150 ml-20 mt-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600 shadow-xl shadow-black"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
