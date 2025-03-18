import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccessMessage("Your message has been sent!");
      setFormData({ email: "", message: "" });
    } else {
      setSuccessMessage("Failed to send message. Try again!");
    }
  };

  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>

        <div className="flex  justify-center mt-8 space-x-6">
          <div className="flex flex-row space-x-2">
            <p className=" text-white text-lg">Github Profile :</p>
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
          <p className=" text-white text-lg">Linkedin Profile :</p>
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
            <p className=" text-white text-lg">Email :</p>
          <a
            href="mailto:isharahansani235@gmail.com"
            className="text-white text-2xl hover:text-gray-400"
          >
            <FaEnvelope />
          </a>
          </div>
          <div className="flex flex-row space-x-2">
            <p className=" text-white text-lg"> Contact :</p>
          <a
            href="tel:0776881503"
            className="text-white hover:text-gray-400"
          >
           +94 776881503
          </a>
          </div>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-white"
            >
              Message
            </label>
            <textarea
              rows="6"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment ..."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg"
          >
            Send Message
          </button>
          {successMessage && (
            <p className="text-center text-green-400 mt-4">{successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
