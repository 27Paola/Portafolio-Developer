import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const HamburguerMenu = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
  <div className='fixed z-40 container h-[80px] flex justify-end items-end px-12 font-DynaPuff mb-14'>

      {/* Menu */}
      <ul className='hidden gap-5  lg:flex'>
        <li>
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Skils" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} duration={500}>
          Projects
          </Link>
        </li>
        <li>
          <Link to="Services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      {/* Hamburguer */}
      <div onClick={handleClick} className='lg:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-start items-center mt-10 p-28 bg-pink/75 text-dark'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Services</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>
    </div>
  )
}

export default HamburguerMenu