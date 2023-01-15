import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"
import { PageInfo } from '../typings';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

type Props = {
    pageInfo: PageInfo
}

const ContactMe = ({pageInfo}: Props) => {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:siddiq4203362@cloud.neduet.edu.pk?subject=${formData.subject}&body=Hi, I'm ${formData.name}, ${formData.message}`;
    }

  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-xl md:text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-10'>

            <h4 className='md:text-4xl font-semibold text-center mt-16 md:mt-0 opacity-0 md:opacity-100'>
                I've got just what you need. {" "}
                <span className='underline decoration-green-900'>Let's talk</span> 
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-teal-700 h-7 w-7 animate-pulse' />
                    <p className='md:text-2xl'> {pageInfo.phoneNumber} </p>
                </div>
                <div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-teal-700 h-7 w-7 animate-pulse' />
                        <p className='md:text-2xl'> {pageInfo.email} </p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-teal-700 h-7 w-7 animate-pulse' />
                        <p className='md:text-2xl'> {pageInfo.address} </p>
                    </div>
                </div>
                
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} type="text" placeholder='Name' className='contactInput w-40 md:w-auto' /> 
                    <input {...register('email')} type="email" placeholder='Email' className='contactInput w-40 md:w-auto' />
                </div>

                <input {...register('subject')} type="text" placeholder='Subject' className='contactInput' />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-gradient-to-b from-teal-300 to-teal-800 py-5 hover:from-teal-500 px-10 rounded-md font-bold text-lg text-black'> Submit </button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe