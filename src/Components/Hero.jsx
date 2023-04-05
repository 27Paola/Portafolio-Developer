import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import avatar from '../assets/avatar.png'

const Hero = () => {
    // ----REDES SOCIALES-----
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
        <section className='min-h-screen flex flex-col justify-start items-center p-4 text-center '>
            <h2 className=' font-Gochi text-5xl md:text-6xl lg:text-8xl text-pink'>Paola Sanchez</h2>
            <h3 className=' font-DynaPuff text-xl md:text-2xl lg:text-4xl text-blue'>Developer Full-Stack</h3>
            <p className='max-w-xl font-light font-Quicksand'>
                Ahorita lo hago no se que poner
            </p>

            {/* -----REDES SOCIALES--- */}
            <div className='flex justify-evenly py-4 md:w-1/3 lg:py-10 text-3xl w-full'>
                {REDES.map(({ id, Link, icon }) => (
                    <a href={Link} key={id} target='_blank'
                        className='curson-pointer duration-300 hover:text-pink'
                    >{icon}</a>
                ))}
            </div>
            {/* ----Imagen o Perfil---- */}
            <div>
                <img src={avatar} />
            </div>
        </section>
    )
}

export default Hero;