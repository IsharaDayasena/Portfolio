import React from 'react'
import Navbar from '../navbar/Navbar'

import CV from '../../assets/CV.pdf'
import img from '../../assets/img.png'
export default function Hero() {
  return (
    <div className=' relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col' >
      {/* <div className='md:h-[620px] h-[660px] md:w-[640px] w-[880px] right-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-800 absolute rounded-full transform rotate-12 top-5'>

      </div> */}
      <Navbar/>

      <section 
      data-aos='fade-up' 
      data-aos-delay = '250'
      className=' text-white body-font z-10'>
        <div className=' container mx-auto flex px-5 md:flex-row flex-col items-center'>
            <div className=' lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative'>
            {/* <img src={hi} className=' absolute top-[450px] md:top-[30px] md:left-[50px] transform
            translate-x-1/2 -translate-y-1/2 w-60 h-50' /> */}
            <h1 className=' title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>Hi! I'm Ishara Dayasena</h1>
            <p className=' mb-8 leading-relaxed text-justify'>Passionate and driven undergraduate with a keen interest in technology and software development. Eager to apply my skills in real-world projects and contribute to a dynamic team as a Software Engineer Intern, with the goal of advancing into a full-time Software Engineer position. Ready to bring creativity, dedication, and technical expertise to innovative solutions.</p>
            <div className='flex justify-center'>
                    <a href={CV} download> 
                        <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                        focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                        rounded-full text-lg'>
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                   <img src={img} alt="hero" className='object-cover object-center rounded-full w-150 h-150 ml-20 mt-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600  shadow-xl shadow-black  ' />
                </div>
        </div>

      </section>
    </div>
  )
}


