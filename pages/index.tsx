import Head from 'next/head'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header'

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

      {/* <Hero /> */}

      {/* <About /> */}

      {/* <Experience /> */}

      {/* <Skills /> */}

      {/* <Projects /> */}

      {/* <ContactMe /> */}
    </>
  )
}
