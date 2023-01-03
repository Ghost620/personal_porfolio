import Head from 'next/head'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'

export default function Home() {
  return (
    <div className="dark:bg-slate-900 dark:text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title> Huzaifa's Portfolio </title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* <Skills /> */}

      {/* <Projects /> */}

      {/* <ContactMe /> */}
    </div>
  )
}
