import React, { useState, useEffect } from "react";

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        {
          name: "C",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
          link: "https://www.cprogramming.com/",
        },
        {
          name: "Java",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
          link: "https://www.java.com",
        },
        {
          name: "JavaScript",
          icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
          link: "https://www.javascript.com/",
        },
      ],
    },
    {
      category: "Web Development",
      items: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          link: "https://reactjs.org/",
        },
        {
          name: "Node.js",
          icon: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
          link: "https://nodejs.org/en",
        },
        {
          name: "Next.js",
          icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
          link: "https://nextjs.org/",
        },
        {
          name: "Express.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
          link: "https://expressjs.com",
        },
        {
          name: "PHP",
          icon: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png",
          link: "https://www.php.net/",
        },
      ],
    },
    {
      category: "Databases",
      items: [
        {
          name: "MySQL",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
          link: "https://www.mysql.com/",
        },
        {
          name: "MSSQL",
          icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
          link: "https://www.microsoft.com/en-us/sql-server/",
        },
        {
          name: "MongoDB",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
          link: "https://www.mongodb.com/",
        },
      ],
    },
    {
      category: "Version Control & Tools",
      items: [
        {
          name: "Git",
          icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
          link: "https://git-scm.com/",
        },
        {
          name: "Postman",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
          link: "https://www.postman.com/",
        },
        {
          name: "Docker",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
          link: "https://www.docker.com/",
        },
      ],
    },
    {
      category: "UI/UX & Design",
      items: [
        {
          name: "Figma",
          icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
          link: "https://www.figma.com/",
        },
        {
          name: "Photoshop",
          icon: "https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg",
          link: "https://www.adobe.com/products/photoshop.html",
        },
        {
          name: "Canva",
          icon: "data:image/jpeg;base64,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",
          link: "https://www.canva.com/",
        },
      ],
    },
    {
      category: "Other Tools",
      items: [
        {
          name: "Firebase",
          icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
          link: "https://firebase.google.com/",
        },
        {
          name: "Azure",
          icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
          link: "https://azure.microsoft.com/en-in/",
        },
        {
          name: "Cisco Packet Tracer",
          icon: "data:image/png;base64,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",
          link: "https://www.netacad.com/courses/packet-tracer",
        },
      ],
    },
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
    data-aos="fade-up"
        data-aos-delay="250"
      id="skills"
      className="relative overflow-hidden mt-10 flex flex-col bg-gradient-to-r from-[#0d182e] via-blue-900  to-[#0d182e] bg-opacity-10  text-white body-font"
    >
      
      <h2 className="text-4xl font-bold  text-white mt-5 text-center">My Skills</h2>
      <div className="container px-5 py-24 mx-auto ">
      
        <div className="flex flex-row justify-between mb-12">
          <div className="mr-5 w-full sm:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-white">About Me</h2>
            <p className="text-justify text-xl">
              I am skilled in programming languages like C, Java, and JavaScript,
              with experience in databases (MySQL, MSSQL, MongoDB) and version control
              using GIT. I specialize in web development with React, NodeJS, NextJS, and
              PHP, and am proficient in UI/UX design tools like Figma and Photoshop.
              Additionally, I have experience with API tools like Postman, Firebase, and
              project management tools such as Trello.
              <br />
              <br />
              <h1 className="text-xl font-semibold">Non-Technical Skills:</h1> I bring
              strong problem-solving, leadership, and communication skills, along with
              quick learning, teamwork, analytical thinking, and creative thinking abilities.
            </p>
          </div>

          {/* Divider Line */}
          <div className="hidden sm:block sm:w-1/12 border-l-2 border-gray-300 mx-4"></div>

          <div className="w-full sm:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-white">Technologies & Tools</h2>
            <h3 className="text-2xl font-semibold mb-6 text-orange-400">
              {skills[currentCategoryIndex].category}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills[currentCategoryIndex].items.map((skill, idx) => (
                <div
                  key={idx}
                  className="hover:shadow-xl transform transition duration-300 hover:scale-105"
                >
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 mb-1"
                    />
                    <p className="text-center text-lg font-medium text-white">
                      {skill.name}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
