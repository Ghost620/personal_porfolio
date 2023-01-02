import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {

    const [text, count] = useTypewriter({
        words: ["Welcome", "The Name's Huzaifa"],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-60 w-60 mx-auto' src='https://cdn.pixabay.com/photo/2021/12/26/20/49/christmas-6895856__340.jpg' alt='' />
        <h1>
            <span> {text} </span>
            <Cursor cursorColor='dark-green' />
        </h1>
    </div>
  )
}

export default Hero