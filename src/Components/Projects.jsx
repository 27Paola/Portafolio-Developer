import React from 'react';
import gato from "../assets/gatito-2.gif";
import { FiGithub, FiClipboard } from "react-icons/fi"
import uno from "../assets/avatar-2.png"
import dos from "../assets/avatar-3.png"
import tres from "../assets/avatar-4.png"
import cuatro from "../assets/avatar-5.png"
import cinco from "../assets/avatar-6.png"
import seis from "../assets/avatar-7.png"

const Projects  = () => {

    const projects  = [
        
        
        {
            id: 3,
            imagen: tres,
            title: "Zschop",
            github: "https://github.com/27Paola/Proyecto-zShop.git",
            demo: "https://proyecto-zshop.vercel.app/"
        },
        {
            id: 4,
            imagen: cuatro,
            title: "Calculadora",
            github: "https://github.com/27Paola/Calculadora-.git",
            demo: "https://calculadora-six-rho.vercel.app/"
        },
        {
            id: 5,
            imagen: seis,
            title: "Tik Tak",
            github: "https://github.com/27Paola/Coffe-tiktak.git",
            demo: "https://coffe-tiktak.vercel.app/"
        },
        {
            id: 6,
            imagen: cinco,
            title: "Programate School",
            github: "https://github.com/programateacademy/PROGRAMATE-SCHOOL-BACK.git",
            demo: "https://programate-team-front.vercel.app/"
        },
        {
            id: 1,
            imagen: uno,
            title: "Horimiya",
            github: "https://github.com/27Paola/Horimiya",
            demo: "https://horimiya-sa3s.vercel.app/"
        },
        {
        
            id: 6,
            imagen: dos,
            title: "PowerFix",
            github: "https://github.com/TheLostHeaven/Front-End-Grupo5",
        },

    ]

    return (
        <div name="Projects">
            <h3 className='flex flex-row justify-center items-center font-DynaPuff font-semibold text-3xl md:text-5xl'><img src={gato} width={50} />Proyectos</h3>

            <div className='grid gap-4 px-8 md:px-36 md:grid-cols-2 lg:gap-14 lg:grid-cols-3'>

                {projects.map(({ id, imagen, title, github, demo }) => (
                    <div key={id} className='max-w-lg flex flex-col justify-center items-center shadow-md shadow-yellow dark:shadow-blue rounded-3xl overflow-hidden m-0'>
                    <br/>
                        <h2 className=' font-Gochi font-bold text-2xl md:text-4xl'>{title}</h2>
                        <img className='' src={imagen} alt={title} width={250} />
                        <div className='w-full flex flex-row justify-center gap-5 items-end text-xl'>
                            <a href={github} target='_blank'><FiGithub  className='mb-3' /></a>
                            <a href={demo} target='_blank'><FiClipboard   className='mb-3'/></a>
                        </div>
                    </div>
                ))}
            </div>

            <div  className='flex flex-col items-center p-4 text-center'>
                <a href='https://github.com/27Paola?tab=repositories' target='_blank' className='flex  justify-center items-center mt-8 relative px-28 py-4 font-bold text-black group dark:text-white'>
                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 dark:bg-blue group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full border-4 border-black dark:border-white"></span>
                    <span class="text-focus-in relative font-DynaPuff text-xl">Ver mas</span>
                </a>
            </div>
        </div>
    )
}

export default Projects;