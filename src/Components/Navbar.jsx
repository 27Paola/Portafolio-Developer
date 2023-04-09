import React from 'react';
import { useContext } from 'react';
import { GiSunCloud, GiMoonOrbit } from 'react-icons/gi';
import Logo from '../assets/logo  paola.png';
import LogoWhite from '../assets/image (1).png';
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import HamburguerMenu from './HamburguerMenu';

const Navbar = ({ darkMode, setDarkMode }) => {
    {/* // ----REDES SOCIALES----- */ }
    const REDES = [
        {
            id: 1,
            Link: "https://github.com/27Paola",
            icon: <FiGithub />
        },
        {
            id: 2,
            Link: "https://www.linkedin.com/in/paola-sanchez-/",
            icon: <FiLinkedin />
        },
        {
            id: 3,
            Link: "https://wa.link/fih42v",
            icon: <AiOutlineWhatsApp />
        }
    ]
    return (
        <div className='bg-white dark:bg-dark text-blue dark:text-pink fixed z-40 w-full shadow-sm shadow-black/20 '>
            <nav className='flex justify-between items-center p-5'>

                {/* ------Logo------- */}
                <div onClick={() => setDarkMode(!darkMode)}>
                    {
                        darkMode ?
                            <img src={LogoWhite} width={60} />
                            :
                            <img src={Logo} width={50} />
                    }
                </div>
                {/* -----REDES SOCIALES--- */}
                <div className='flex justify-center items-center gap-4 text-2xl w-full md:gap-6 md:text-3xl'>
                    {REDES.map(({ id, Link, icon }) => (
                        <a href={Link}
                            key={id} target='_blank'
                            className='curson-pointer duration-300 hover:text-pink'
                        >{icon}</a>
                    ))}
                </div>

                {/*----Iconos-----  */}
                <div className='fixed bottom-6 right-6 z-50 text-[#1c130e] dark:text-white' onClick={() => setDarkMode(!darkMode)}>
                    {
                        darkMode ?
                            <GiMoonOrbit className='text-4xl cursor-pointer animate-bounce' />
                            :
                            <GiSunCloud className='text-4xl cursor-pointer animate-bounce' />
                    }
                </div>
                <HamburguerMenu />
            </nav>
        </div>
    )
}

export default Navbar