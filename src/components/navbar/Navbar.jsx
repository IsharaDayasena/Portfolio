import React from 'react'

export default function Navbar() {
    const listNavbar= [
        {name: 'Home', link: '#home'},
        {name: 'Skills', link: '#skills'},        
        {name: 'Projects', link: '#projects'},
        {name: 'Education', link: '#education'},
        {name: 'Services', link: '#services'},
    ];
  return (
    <header data-aos='fade-up' className=' text-gray-600 body-font z-10'>
        <div className=' container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                    <span className=' ml-3 text-3xl font-bold text-white'>Portfolio</span>
                </a>
                <nav className=' md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center'>
                    {listNavbar.map((item, index) => (
                        <a key={index} href={item.link} className='mr-5 hover:text-blue-400 text-xl'>{item.name}</a>
                    ))}
                </nav>
                    <button className=' inline-flex items-center py-2 px-7 focus:outline-none text-base text-white mt-4 md:mt-0 border border-white hover:bg-yellow-300 hover:text-black hover:border-yellow-300 rounded-md'>
                        <a href='#contact' className='  text-xl'>Contact Me</a>

                    </button>
        </div>
    </header>
  )
}
