'use client'

import React from 'react'
import Image from 'next/image'
import LinkToHash from './LinkToHash'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundAnimation from './BackgroundAnimation'
import styles from '../styles/Hero.module.css'
import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hello, I'm ${ pageInfo?.name }`,
      "<FunProgramming />",
      "while (alive) work();",
      `${ pageInfo?.name }.DoMagic();`
    ],
    loop: true,
    delaySpeed: 2500
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundAnimation />

      <Image 
        className='rounded-full w-32 h-32 nx-auto object-cover'
        width={128}
        height={128}
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Roland"
        priority
      />

      <div className='relative flex flex-col items-center max-w-[90vw]'>
        <h2 className='text-xs sm:text-sm uppercase text-foreground pb-2 tracking-[12px] transition-all'>WEB DEVELOPER</h2>

        <h1 className='px-10 text-4xl md:text-5xl lg:text-6xltext-text font-semibold text-text transition-all'>
          <span>{text}</span>
          <Cursor cursorColor='var(--primary)' />
        </h1>

        <div className="flex flex-row flex-wrap justify-center gap-x-1 gap-y-3 my-4">
          <LinkToHash to="/#about" className={styles.btn}>ABOUT</LinkToHash>
          <LinkToHash to="/#experience" className={styles.btn}>EXPERIENCE</LinkToHash>
          <LinkToHash to="/#skills" className={styles.btn}>SKILLS</LinkToHash>
        </div>
      </div>
    </div>
  )
}