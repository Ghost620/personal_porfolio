import Head from 'next/head'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title> Huzaifa's Portfolio </title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section>
        <Hero />
      </section>
      {/* <Hero /> */}

      {/* <About /> */}

      {/* <Experience /> */}

      {/* <Skills /> */}

      {/* <Projects /> */}

      {/* <ContactMe /> */}
    </>
  )
}
