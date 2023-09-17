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
      className='overflow-hidden relative w-full h-[100dvh] flex flex-col items-center justify-center'
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
      <div className='flex flex-col items-center justify-center gap-y-2 mt-16'>
        <h3 className='text-center font-medium text-foreground uppercase' style={{ fontSize: 'clamp(20px, 6vw, 24px)', letterSpacing: 'clamp(12px, 4vw, 20px)' }}>{ title }</h3>
        <h4 className='text-center font-medium text-foreground tracking-widest uppercase'>{ subTitle }</h4>
      </div>
      
      <div className='flex items-center justify-center w-full h-full'>
        { children }
      </div>
    </motion.div>
  )
}