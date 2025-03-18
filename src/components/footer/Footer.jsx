import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    const listNavbar = [
        {name: 'Home', link:'#'},
        {name: 'Skills', link:'#skills'},
        {name: 'Education', link:'#education'},
        {name: 'Services', link:'#services'},
        {name: 'Projects', link:'#projects'},
        
    ];
  return (
   <footer className='bg-gray-700 rounded-lg shadow'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between '>
        <span className='text-ms text-gray-200 sm:text-center'>
            2025 <a href='#' className='hover:underline'>portfolio</a>
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 sm:mt-0 '>
            {
                listNavbar.map((item, index) =>(
                    <a key={index} href={item.link} className='hover:text-orange-400 me-4 md:me-6'>
                        {item.name}
                    </a>
                ))
            }
        </ul>
        <div className="flex justify-center  space-x-6">
          <a
            href="https://github.com/IsharaDayasena"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ishara-dayasena-201314264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:isharahansani235@gmail.com"
            className="text-white text-2xl hover:text-gray-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

   </footer>
  )
}