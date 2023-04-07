import React from 'react'
import gato from '../assets/gatito-3.gif'
import comment from "../assets/comment-1.png"
import commentDos from "../assets/comment-2.png"
import commentTres from "../assets/comment-3.png"

const Services = () => {

    const services = [
        {
            id: 1,
            image: comment,
            name: "Desarrollo Frontend",
            comment: "crear diseños personalizados y modernos utilizando herramientas de diseño como Figma, y luego implementarlos utilizando tecnologías Frontend como HTML, CSS entre otras."

        },
        {
            id: 2,
            image: commentDos,
            name: "Desarrollo Backend",
            comment: "trabajar en la parte Backend de la aplicación utilizando tecnologías como Node.js y gestionar eficazmente los datos de la aplicación utilizando bases de datos."

        },
        {
            id: 3,
            image: commentTres,
            name: "Analisis de requisitos",
            comment: "análisis de requisitos para garantizar que las soluciones se desarrollen y cumplan con los requisitos del cliente, objetivos y necesidades para una mejora del los proyectos."
        }
    ]

    return (
        <section className=''>
            <h3 className='flex flex-row justify-center items-center text-3xl font-DynaPuff font-bold'>Servicios<img src={gato} width={50} /> </h3>

            <div className='flex justify-center mt-20'>
                <div className='max-w-xl flex flex-col gap-8 bg-center items-center justify-center px-8'>
                    {services.map(({ id, image, name, comment }) => (
                        <div className='flex p-4 justify-center items-center rounded-xl shadow-md shadow-dark dark:shadow-dark'>
                            <div className='w-1/3'>
                                <img
                                    src={image}
                                    alt={name}
                                    className=' object-cover object-top pt-2'/>
                            </div>
                            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
                                <h3 className='text-xl font-DynaPuff font-semibold'>{name}</h3>
                                <p className=' font-Quicksand font-bold text-sm'>{comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
               
            </div>
            <br/>
            <p className='flex justify-center items-cente px-5 font-Quicksand font-bold text-xl md:text-xl'>Te ofreco varios servicios como desarrolladora, Full-Stack.</p>
        </section>
    )
}

export default Services;