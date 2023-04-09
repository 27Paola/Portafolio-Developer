import React from 'react'
import Logo from "../assets/Logo.png"

const Footer = () => {
    return (
        <div className='min-h-fit bg-pink dark:bg-blue py-8 px-0 text-center'>
            <div className='flex flex-row justify-start items-center mx-20 gap-1'>
                <img src={Logo} width={30} />
                <p className='max-w-xl flex-row font-Caveat font-bold text-dark'>
                    Paola Sanchez (Full-Stack)
                </p>
            </div>
        </div>
    )
}

export default Footer;