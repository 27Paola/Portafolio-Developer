import React from 'react'
import html from "../assets/html.png"
import css from "../assets/CSS.png"
import figma from "../assets/figma.png"
import trello from "../assets/trello.png"
import javascript from "../assets/Java.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import mysql from "../assets/mysql.png"
import mongo from "../assets/Mongo.png"
import node from "../assets/node.png"
import exprees from "../assets/exprees.png"
import gato from "../assets/gatito-1.gif"


const Skills = () => {

  const Skills = [
    {
      id: 1,
      imagen: html,
      title: "HTML"
    },
    {
      id: 2,
      imagen: css,
      title: "CSS"
    },
    {
      id: 3,
      imagen: figma,
      title: "Figma"
    },
    {
      id: 4,
      imagen: trello,
      title: "Trello"
    },
    {
      id: 5,
      imagen: javascript,
      title: "Javascript"
    },
    {
      id: 6,
      imagen: react,
      title: "React.JS"
    },
    {
      id: 7,
      imagen: tailwind,
      title: "Tailwind"
    },
    {
      id: 7,
      imagen: mysql,
      title: "MySQL"
    },
    {
      id: 8,
      imagen: mongo,
      title: "MongoDB"
    },
    {
      id: 9,
      imagen: node,
      title: "Node JS"
    },
    {
      id: 10,
      imagen: exprees,
      title: "Exprees Js"
    },

  ]

  return (
    <div name="Skills" >
      <h3 className='flex flex-row justify-center items-center font-DynaPuff font-semibold text-3xl md:text-6xl'>Habilidades<img className='' src={gato} width={50} /></h3>
      <br />
      <p className='flex justify-center items-cente px-5 font-Quicksand font-bold md:text-xl '>En este apartado te enseño los programas y lenguajes en los cuales tengo conocimiento como programadora Full-Stack.</p>
      <br/>
      <br/>

      {/* --------HERRAMIENTAS------- */}
      <div className='grid gap-6 px-8 grid-cols-2 md:px-36 md:grid-cols-3'>
      {Skills.map(({id, imagen, title}) => (
          <div key={id} className='flex flex-col items-center p-5 shadow-sm shadow-blue dark:shadow-pink rounded-2xl duration-200 ease-in-out hover:scale-75'>

            <img src={imagen} alt={title} className='object-contain' width={90}/>
            <h3 className='mt-5 font-Gochi font-bold text-2xl'>{title}</h3>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Skills;