import React from 'react'
import avatar from '../assets/avatar.png'
import { BsArrowBarDown } from 'react-icons/bs'

const Hero = () => {

    return (
        <div name="Home" className=' min-h-screen flex flex-col items-center p-4  text-center '>
            <h2 className='font-DynaPuff  text-3xl md:text-4xl lg:text-6xl text-pink mt-32'>Paola Sanchez</h2>
            <h3 className='  text-xl md:text-2xl lg:text-4xl text-blue'>Developer Full-Stack</h3>

            {/* ----Imagen o Perfil---- */}
            <div>
                <img src={avatar} alt='avatar' className='w-50 h-60 object-cover pt-4'/>
            </div>

            <p className='flex justify-center items-cente  px-5 font-Quicksand font-bold md:text-base'>
            Soy una desarrolladora Full-Stack apasionada por el diseño y la parte Frontend. En su portafolio se muestran sus habilidades en la creación de aplicaciones web, trabajo en equipo, implementación de diseños utilizando tecnologías como React, por otro lado la gestión de datos en la parte Backend utilizando tecnologías para bases de datos. En resumen, tiene experiencia en el desarrollo de aplicaciones web, combina habilidades de diseño y funcionalidad para crear soluciones innovadoras y atractivas.
            </p>

    
            <div className='flex  justify-center items-center animate-bounce pt-8 text-3xl '>
                    <BsArrowBarDown />
                </div>
            <a href='/public/CV-PaolaSanchez.pdf' target='_blank' className='flex  justify-center items-center mt-5 relative px-6 py-3 font-bold text-black group dark:text-white'>
                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 dark:bg-blue group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full border-4 border-black dark:border-white"></span>
                    <span class="text-focus-in relative font-DynaPuff text-xl">Resume o CV</span>
                </a>
                
            {/* -----Animacion-de-flecha---- */}
            <div>
            </div>
        </div>
    )
}
export default Hero;
