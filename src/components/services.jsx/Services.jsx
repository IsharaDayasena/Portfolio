import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaCode, FaLightbulb, FaFile } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Building scalable and high-performing web applications with modern technologies.',
      icon: <FaLaptopCode className="text-5xl text-orange-500" />
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences with modern design principles.',
      icon: <FaPaintBrush className="text-5xl text-yellow-400" />
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Crafting responsive and dynamic websites tailored to client needs.',
      icon: <FaCode className="text-5xl text-blue-400" />
    },
    {
      id: 4,
      title: 'Mobile Development',
      description: 'Developing high-performance mobile applications for iOS and Android platforms.',
      icon: <FaMobileAlt className="text-5xl text-green-400" />
    },
    {
      id: 5,
      title: 'Frontend Development',
      description: 'Developing intuitive and engaging user experiences.',
      icon: <FaCode className="text-5xl text-purple-500" />
    },
    {
      id: 6,
      title: 'Document Handling',
      description: 'Providing efficient solutions for managing, organizing, and securing digital documents.',
      icon: <FaFile className="text-5xl text-pink-500" />
    }
  ];

  return (
    <section 
      id="services"
      className="py-16 bg-gray-900 text-white"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">My Services</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
