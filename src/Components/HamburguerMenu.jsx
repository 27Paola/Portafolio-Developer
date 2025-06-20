import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const HamburguerMenu = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
  <div className='fixed z-40 container h-[80px] px-16 md:px-8 flex justify-end items-end font-Quicksand font-bold mb-14'>

      {/* Menu */}
      <ul className='hidden gap-3 lg:flex'>
        <li className=' cursor-pointer hover:scale-90'>
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=' cursor-pointer hover:scale-90'>
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=' cursor-pointer hover:scale-90'>
          <Link to="Projects" smooth={true} duration={500}>
          Projects
          </Link>
        </li>
        <li className=' cursor-pointer hover:scale-90'>
          <Link to="Services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li className=' cursor-pointer hover:scale-90'>
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      {/* Hamburguer */}
      <div onClick={handleClick} className='lg:hidden z-10'>
        {!nav ? <FaBars className='text-dark dark:text-white' /> : <FaTimes  className='text-dark dark:text-white'/>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-start items-center mt-10 pt-28 bg-pink/90 text-dark dark:text-white'}>
        <li className='py-6 text-2xl md:text-4xl cursor-pointer hover:scale-90'>
        <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-2xl md:text-4xl cursor-pointer hover:scale-90'>
        <Link onClick={handleClick} to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-2xl md:text-4xl cursor-pointer hover:scale-90'>
        <Link onClick={handleClick} to="Projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-2xl md:text-4xl cursor-pointer hover:scale-90'>
        <Link onClick={handleClick} to="Services" smooth={true} duration={500}>
        Services
          </Link>
        </li>
        <li className='py-6 text-2xl md:text-4xl cursor-pointer hover:scale-90'>
        <Link onClick={handleClick} to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HamburguerMenu