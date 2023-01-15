import Head from 'next/head'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { PageInfo, Experience, Skill, Social, Project } from '../typings'
import { fetchPageInfos } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchSkills } from '../utils/fetchSkills'
import { GetStaticProps } from 'next'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({ pageInfo, experiences, skills, projects, socials }: Props) {
  return (
    <div className="dark:bg-slate-900 dark:text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-thin scrollbar-track-teal-800/20 scrollbar-thumb-teal-700">
      <Head>
        <title> Huzaifa&apos;s Portfolio </title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-center'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contactMe' className='snap-start'>
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0' src={urlFor(pageInfo.profilePic).url()} alt='' />
          </div>
        </footer>
      </Link>

    </div>
  )
}


export const getStaticProps: GetStaticProps<Props> = async  () => {
  const pageInfo: PageInfo = await fetchPageInfos();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },

    revalidate: 10
  }
}