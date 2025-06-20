import React from 'react'
import gato from "../assets/gato-5.gif"

const Contact = () => {
    return (
        <div name="Contact">
        <section>
            <h3 className='flex flex-row justify-center items-center font-DynaPuff font-semibold text-3xl md:text-6xl'><img src={gato} className='flex flex-row' width={50} />Contactame</h3>
            <br />
            <p className='text-xl font-Quicksand font-bold text-center'>Si necesitas saber mas información contactame 😁</p>
            <br />

            {/* ---bottom form------- */}
            <div className='flex justify-center items-center'>

                <div className='form p-8 text-left w-5/6 md:w-3/5'>

                    <form action="https://getform.io/f/beacd1d6-b10f-49b9-8563-7c1ee3f439b9" method='POST'>
                        <div className='w-full font-Quicksand font-bold'>
                            <div className='flex flex-col'>
                                <label className='capitalize text-xl py-2 text-pink'>
                                    Nombre
                                </label>
                                <input type='text' name='name' className='border-2 border-pink rounded-xl p-3 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2 text-pink'>
                                    Telefono
                                </label>
                                <input type='text' name='name' className='border-2 border-pink rounded-xl p-3 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2 text-pink'>
                                    Correo
                                </label>
                                <input type='text' name='name' className='border-2 border-pink rounded-xl p-3 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2 font-bold text-pink'>
                                    Mensaje
                                </label>
                                <textarea
                                    name='mensaje'
                                    rows="7"
                                    className='border-2 rounded-xl p-3 flex focus:outline-none border-pink resize-none'
                                ></textarea>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mt-8 mx-10 text-xs font-DynaPuff font-bold md:text-xl lg:text-xl'>
                            <button className="relative px-6 py-3 font-bold text-black group h-12">
                                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
                                <span class="relative">Enviar Mensaje</span></button>
                        </div>
                    </form>
                </div>

                {/*------ Animacion---- */}
                
            </div>
        </section>
        </div>
    )
}

export default Contact;