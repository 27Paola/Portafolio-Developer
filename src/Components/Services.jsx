import React from 'react'
import gato from '../assets/gatito-3.gif'
import { comment } from 'postcss'

const Services = () => {

const Services = [
    {
        id: 1,
        image: comment,
        name: "Desarrollo Frontend",
        comment: "crear diseños personalizados y modernos utilizando herramientas de diseño como Figma, y luego implementarlos utilizando tecnologías Frontend como HTML, CSS entre otras."

    },
    {
        id: 2,
        image: comment,
        name: "Desarrollo Backend",
        comment: "trabajar en la parte Backend de la aplicación utilizando tecnologías como Node.js y gestionar eficazmente los datos de la aplicación utilizando bases de datos."

    },
    {
        id: 3,
        image: comment,
        name: "Analisis de requisitos",
        comment: "análisis de requisitos para garantizar que las soluciones se desarrollen y cumplan con los requisitos del cliente, objetivos y necesidades para una mejora del los proyectos."
    }
]

  return (
    <section>
        <h3 className='flex flex-row justify-center items-center text-3xl font-DynaPuff font-bold'>Servicios<img src={gato} width={50} /> </h3>
        <p className='flex justify-center items-cente px-5 font-Quicksand font-bold md:text-xl'>Te ofreco varios servicios como desarrolladora, Full-Stack.</p>
    </section>
  )
}

export default Services;