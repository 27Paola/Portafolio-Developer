import React from 'react'
import avatar from '../assets/avatar.png'
import {BsArrowBarDown} from 'react-icons/bs'

const Hero = () => {
    

    return (
        <section className='min-h-screen flex flex-col items-center p-4  text-center '>
            <h2 className='font-Gochi text-5xl md:text-6xl lg:text-8xl text-pink mt-24'>Paola Sanchez</h2>
            <h3 className=' font-DynaPuff text-xl md:text-2xl lg:text-4xl text-blue'>Developer Full-Stack</h3>
            <p className='max-w-xl font-bold font-Quicksand'>
                Ahorita lo hago no se que poner
            </p>

            

            {/* ----Imagen o Perfil---- */}
            <div>
                <img src={avatar} alt='avatar' className='w-60 h-60 object-cover object-top pt-5'
                />
                <a
                    href='/src/assets/mi-resum.pdf'
                    target='_blank'
                    className='flex  justify-center items-center mt-5 relative px-6 py-3 font-bold text-black group dark:text-white'>
                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 dark:bg-blue group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full border-4 border-black dark:border-white"></span>
                    <span class="text-focus-in relative font-Gochi text-xl">Resume</span>
                </a>
                <div className='flex  justify-center items-center animate-bounce pt-8 text-3xl '>
                <BsArrowBarDown />
                </div>
            </div>

            {/* -----Animacion-de-flecha---- */}
            <div>
                
            </div>
        </section>
    )
}




export default Hero;