import React from 'react'
import gato from "../assets/gato-5.gif"

const Contact = () => {
    return (
        <section>
            <h3 className='flex flex-row justify-center items-center font-DynaPuff font-semibold text-3xl md:text-6xl'><img src={gato} className='flex flex-row' width={50} />Contactame</h3>
            <br />
            <p className='text-xl font-Quicksand font-bold text-center'>Si necesitas saber mas información contactame 😁</p>
            <br />

            {/* ---bottom form------- */}
            <div className='flex justify-center items-center'>

                <div className='form p-8 text-left w-5/6'>

                    <form action="https://getform.io/f/beacd1d6-b10f-49b9-8563-7c1ee3f439b9" method='POST'>
                        <div className='w-full'>
                            <div className='flex flex-col'>
                                <label className='capitalize text-xl py-2 font-bold font-Gochi text-pink'>
                                    Nombre
                                </label>
                                <input type='text' name='name' className='border-2 border-pink rounded-xl p-3 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2  font-bold font-Gochi text-pink'>
                                    Telefono
                                </label>
                                <input type='text' name='name' className='border-2 border-pink rounded-xl p-3 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2 font-bold font-Gochi text-pink'>
                                    Correo
                                </label>
                                <input type='text' name='name' className='border-2 border-pink rounded-xl p-3 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2 font-bold font-Gochi text-pink'>
                                    Mensaje
                                </label>
                                <textarea
                                    name='mensaje'
                                    rows="7"
                                    className='border-2 rounded-xl p-3 flex focus:outline-none border-pink resize-none'
                                ></textarea>
                            </div>
                        </div>

                        <div className='flex items-center justify-center'>
                            <button className='my-8 bg-gradient-to-r from-dark to-teal-500 text-white px-6 py-3 font-bold font-DynaPuff uppercase rounded-2xl tracking-wider cursor-pointer hover:scale-105 duration-200'> Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;