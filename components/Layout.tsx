'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  title: string
  subTitle?: string
}

export default function Layout({ children, title, subTitle }: Props) {
  return (
    <motion.div 
      className='overflow-hidden relative h-screen flex flex-col items-center justify-center gap-3 my-1'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.2
      }}
    >
      <div className='flex flex-col items-center justify-center h-1/6'>
        <h3 className='text-center font-medium text-foreground uppercase' style={{ fontSize: 'clamp(20px, 6vw, 24px', letterSpacing: 'clamp(12px, 4vw, 20px)' }}>{ title }</h3>
        <h4 className='mt-2 text-center font-medium text-foreground tracking-widest uppercase'>{ subTitle }</h4>
      </div>
      
      <div className='flex flex-col items-center justify-center h-5/6'>
        { children }
      </div>
    </motion.div>
  )
}