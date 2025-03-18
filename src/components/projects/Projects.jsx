import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/p1.png";
import image2 from "../../assets/p2.png";
import image3 from "../../assets/p3.png";
import image4 from "../../assets/p4.png";
import image5 from "../../assets/p5.png";
import image6 from "../../assets/p6.png";
import image7 from "../../assets/p7.png";
import image8 from "../../assets/p8.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const listProjects = [
    {
      id: 1,
      image: image,
      link: "https://github.com/codefusionuom",
      title: "Studio Management System",
      description:
        "The Studio Management System project aims to deliver a comprehensive and tailored solution to enhance the operational efficiency of studios.",
    },
    {
      id: 2,
      image: image2,
      link: "https://github.com/IsharaDayasena/AI_Content_Generator",
      demo: "https://ai-content-generator-s5mf.vercel.app/",
      title: "AI Content Generator",
      description:
        "A web-based tool that leverages artificial intelligence to generate high-quality text content efficiently. It helps users create engaging articles, blog posts, product descriptions, and more with minimal effort.",
    },
    {
      id: 3,
      image: image3,
      link: "https://github.com/IsharaDayasena/jokes_app",
      title: "Jokes Mobile App",
      description:
        "A mobile application that provides users with a collection of jokes to entertain and amuse them.",
    },
    {
      id: 4,
      image: image4,
      link: "https://github.com/IsharaDayasena/ClassQuest",
      title: "Class Quest",
      description:
        "A web-based platform that streamlines tuition class management.",
    },
    {
      id: 5,
      image: image5,
      link: "https://github.com/IsharaDayasena/med_prescription_system",
      title: "Medical Prescription System",
      description:
        "A software solution that simplifies the process of generating and managing medical prescriptions.",
    },
    {
      id: 6,
      image: image6,
      link: "https://github.com/LawMateProject",
      title: "Law Mate - Law Firm Management System",
      description:
        "A law firm management system that helps law firms manage their clients, cases, and documents efficiently.",
    },
    {
        id: 7,
        image: image7,
        link: "https://github.com/IsharaDayasena/Job-Application-Form",
        demo:"https://job-application-form-ia6g.vercel.app/",
        title: "CV Portal",
        description:
          "CV uploading and tracking system",
      },
      {
        id: 8,
        image: image8,
        demo:"https://www.figma.com/proto/RF7mGuMExliX99BKUZB9Rv/ExploreLanka?page-id=0%3A1&node-id=1-4&p=f&viewport=-239%2C484%2C0.62&t=bSR8ICk33WLfQlUf-1&scaling=scale-down&content-scaling=fixed",
        title: "Explore Lanka",
        description:
          "A mobile app enables local vendors to showcase their products and services directly to tourists. This is under UI/UX design phase",
      },
      
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <Slider {...settings}>
          {listProjects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed mb-3">{project.description}</p>
                </div>
                <div className="flex flex-wrap space-x-5 justify-center pb-6 ">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl text-center hover:text-gray-400"
                  >
                    <FaGithub />
                  
                  </a>
                  {project.demo && (
               
                   
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-3xl hover:text-gray-400 pl-3"
                    > 
                      <FaExternalLinkAlt />
                    </a>
                    
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
