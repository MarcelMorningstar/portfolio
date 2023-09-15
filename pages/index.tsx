import React from 'react'
import { GetStaticProps } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { client } from '@/sanity'
import { Experience, PageInfo, Skill } from '@/typings'

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
}

export default function Home({ pageInfo, experiences, skills }: Props) {
  return (
    <main className='main h-screen snap-y snap-mandatory z-0 overflow-y-scroll scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/75'>
      <Header />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      <section id='contact' className='snap-center'>
        <Contact />
      </section>
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await client.fetch(`*[_type == "pageInfo"][0]`);
  const experiences: Experience[] = await client.fetch(`*[_type == "experience"] {..., technologies[] -> }`);
  const skills: Skill[] = await client.fetch(`*[_type == "skill"] | order(_createdAt)`);

  return {
    props: {
      pageInfo: pageInfo,
      experiences: experiences,
      skills: skills
    }
  };
}
