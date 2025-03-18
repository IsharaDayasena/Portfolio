import React from 'react'


export default function Education() {
  return (

    <section 
          data-aos="fade-up"
      data-aos-delay="400"
    id='education' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
             <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
            <img src='https://images.pexels.com/photos/289738/pexels-photo-289738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10' alt="Education" />
            </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white '>Education</h1>
            <h2 className='title-font font-bold text-yellow-500 sm:text-xl '>2022 - Present :</h2>
            <h3 className='title-font font-bold  text-white  sm:text-2xl '>University Of Moratuwa - Faculty Of Information Technology</h3>
            <p className='mb-8 text-white leading-relaxed '>Reading for BSc (Hons) in Information Technology Degree<br />Expected Graduation year - 2026 <br />              
                                                            Current GPA - 3.5 / 4.0  (up to L2S2)
                                                            <br/>L2S2 SGPA - 3.72 /4.0 </p>
            <h2 className='title-font font-bold text-yellow-500 sm:text-xl '>2019 - 2020 :</h2>
            <h3 className='title-font font-bold  text-white sm:text-2xl '>Sabaragamuwa University of Sri Lanka - Open and Distance Learning</h3>
            <p className='mb-8 text-white leading-relaxed '>Diploma in English - Credit Pass</p>

            <h2 className='title-font font-bold text-yellow-500 sm:text-xl '>2010 - 2018 :</h2>
            <h3 className='title-font font-bold  text-white sm:text-2xl '>R/Balangoda Ananda Maithreya Central College</h3>
            <p className=' text-white leading-relaxed '>G.C.E. Advanced Level Examination - Biological Science Stream</p>            
            <p className=' text-white leading-relaxed '>G.C.E. Ordinary Level Examination - 7A's 2B's</p>
        </div>
        </div>
    </section>

  )
}