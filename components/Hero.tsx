import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

const Hero = (props: Props) => {

    const [text, count] = useTypewriter({
        words: ["Welcome", "The Name's Huzaifa"],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div>
        <h1>
            <span> {text} </span>
            <Cursor cursorColor='green' />
        </h1>
    </div>
  )
}

export default Hero