'use client'

import React from 'react'
import Layout from './Layout'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props = {
  experience: Experience[]
}

export default function WorkExperience({ experience }: Props) {
  return (
    <Layout title='experience'>
      <div className='w-full h-full flex items-center space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/75'>
        {
          experience?.map(experience => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))
        }
      </div>
    </Layout>
  )
}
