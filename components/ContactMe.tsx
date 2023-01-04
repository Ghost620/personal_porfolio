import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

const ContactMe = (props: Props) => {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Contact Me</h3>

        <div className='flex flex-col space-y-10'>

            <h4 className='text-4xl font-semibold text-center'>
                I've got just what you need. {" "}
                <span className='underline decoration-green-900'>Let's talk</span> 
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-teal-700 h-7 w-7 animate-pulse' />
                    <p className='text-2xl'> +92 3418183070 </p>
                </div>
                <div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-teal-700 h-7 w-7 animate-pulse' />
                        <p className='text-2xl'> faghost6201@gmail.com </p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-teal-700 h-7 w-7 animate-pulse' />
                        <p className='text-2xl'> Dastagir Society, F.B.Area, Karachi, Pakistan </p>
                    </div>
                </div>
                
            </div>

            <form className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input type="text" placeholder='Name' className='contactInput' /> 
                    <input type="text" placeholder='Email' className='contactInput' />
                </div>

                <input type="text" placeholder='Subject' className='contactInput' />
                <textarea placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-gradient-to-b from-teal-300 to-teal-800 py-5 hover:from-teal-500 px-10 rounded-md font-bold text-lg text-black'> Submit </button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe