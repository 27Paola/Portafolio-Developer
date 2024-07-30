import React from 'react';
import { CgMoon } from 'react-icons/cg';
import { BiSun } from 'react-icons/bi'
import Logo from '../assets/logo  paola.png';
import LogoWhite from '../assets/image (1).png';
import { TbBrandWhatsapp} from 'react-icons/tb'
import HamburguerMenu from './HamburguerMenu';
import { TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti';

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
      <div className="bg-white dark:bg-dark text-blue dark:text-pink fixed z-40 w-full shadow-sm shadow-black/20 ">
        <nav className="flex justify-between items-center xp-2">
          {/* ------Logo------- */}
          <div setDarkMode={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <img src={LogoWhite} width={60} />
            ) : (
              <img src={Logo} width={50} />
            )}
          </div>

          {/* -----REDES SOCIALES--- */}

          <div className="flex justify-center items-center gap-4 pt-3 text-2xl w-full md:gap-4 md:text-3xl">
            <a
              href="https://github.com/27Paola"
              target="_black"
              className=" cursor-pointer text-4xl lg:text-6xl rounded-full hover:scale-110"
            >
              <TiSocialGithubCircular />
            </a>
            <a
              href="https://www.linkedin.com/in/paola-sanchez-vargas/"
              target="_black"
              className="text-4xl lg:text-6xl rounded-full hover:scale-110"
            >
              <TiSocialLinkedinCircular />
            </a>
            <a
              href="https://wa.link/fih42v"
              target="_black"
              className=" cursor-pointer text-3xl lg:text-5xl rounded-full hover:scale-110"
            >
              <TbBrandWhatsapp />
            </a>
          </div>


          {/*----Iconos-----  */}
          <div
            className="fixed bottom-6 right-6 z-50 text-white dark:text-dark bg-pink p-3 rounded-full border-2 border-white dark:border-dark animate-bounce"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <BiSun className="text-3xl md:text-4xl cursor-pointer" />
            ) : (
              <CgMoon className="text-3xl md:text-4xl cursor-pointer" />
            )}
          </div>
          <HamburguerMenu />
        </nav>
      </div>
    );
}

export default Navbar