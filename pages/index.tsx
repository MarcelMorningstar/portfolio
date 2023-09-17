import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
// import LinkToHash from '@/components/LinkToHash'
// import { BiSolidUpArrow } from 'react-icons/bi'
import { client } from '@/sanity'
import { Experience, PageInfo, Skill } from '@/typings'

type Props = {
  pageInfo: PageInfo
  experience: Experience[]
  skills: Skill[]
}

export default function Home({ pageInfo, experience, skills }: Props) {
  return (
    <main className='h-[100dvh] snap-y snap-mandatory z-0 overflow-y-scroll scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/75'>
      <Head>
        <title>{ `${ pageInfo.name }'s Portfolio` }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`${ pageInfo.name }'s Portfolio`} />
        <meta name="theme-color" content="#242424" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experience={experience} />
      </section>

      <section id='skills' className='snap-center'>
        <Skills skills={skills} />
      </section>

      <section id='contact' className='snap-center'>
        <Contact pageInfo={pageInfo} />
      </section>

      {/* <LinkToHash to='/#hero' className='absolute z-50 bottom-5 right-8 w-5 h-5 box-content p-1.5 rounded-full border-2 text-foreground hover:text-primary/80 border-foreground hover:border-primary/80 focus:outline-none transition-all'>
        <BiSolidUpArrow className='w-full h-full text-inherit' />
      </LinkToHash> */}
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await client.fetch(`*[_type == "pageInfo"][0]`);
  const experience: Experience[] = await client.fetch(`*[_type == "experience"] | order(dateStarted) {..., technologies[] -> }`);
  const skills: Skill[] = await client.fetch(`*[_type == "skill"] | order(_createdAt)`);

  return {
    props: {
      pageInfo: pageInfo,
      experience: experience,
      skills: skills
    }
  };
}
