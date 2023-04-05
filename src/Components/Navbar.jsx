import React from 'react';
import { GiSunCloud, GiMoonOrbit } from 'react-icons/gi';

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <div className='bg-white dark:bg-dark text-blue dark:text-pink'>
            <nav className='flex justify-between items-center p-5'>
                {/* ------Logo------- */}
                <div className=''>
                    <img src='src\assets\logo123.png' width={60} />
                </div>

                {/*----Iconos-----  */}
                <div onClick={() => setDarkMode(!darkMode)}>
                {
                    darkMode ?
                    <GiMoonOrbit className='text-4xl cursor-pointer' />
                    :
                    <GiSunCloud className='text-4xl cursor-pointer' />
                }
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar