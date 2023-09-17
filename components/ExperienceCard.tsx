'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../styles/Experience.module.css'
import { urlFor } from '@/sanity'
import { Experience } from '@/typings'

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className={styles.card}>
      <motion.div
        className='place-self-center'
        initial={{
          y: -100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.9
        }}
      >
        <Image 
          className='w-28 h-28 xs:w-32 xs:h-32 object-cover object-center rounded-full'
          width={128}
          height={128}
          src={urlFor(experience.companyImage).url()}
          alt=""
        />
      </motion.div>
      
      <div className='flex flex-col'>
        <span className='text-center text-3xl 2xs:text-4xl font-light text-text'>{ experience.jobTitle }</span>
        <span className='text-center text-xl 2xs:text-2xl font-bold mt-1 text-text'>{ experience.company }</span>
      </div>

      <div>
        <div className='flex space-x-2 mt-4'>
          {
            experience.technologies.map(technology => (
              <Image 
                key={technology._id}
                className='w-8 h-8 xs:w-10 xs:h-10 object-contain'
                width={50}
                height={50}
                src={urlFor(technology.image).url()}
                alt="" 
              />
            ))
          }
        </div>
        
        <p className='pt-1 pb-5 text-sm 3xs:text-base font-light text-foreground'>
          { new Date(experience?.dateStarted).toDateString() } - { experience?.isCurrentlyWorkingHere ? "PRESENT" : new Date(experience?.dateEnded).toDateString() }
        </p>
      </div>

      <ul className='overflow-y-scroll ml-1 pr-5 space-y-4 text-base sm:text-lg  text-text list-disc list-inside scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary/60 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        {
          experience?.summery.map((item, index) => (
            <li key={index}>{ item }</li>
          ))
        }
      </ul>
    </article>
  )
}