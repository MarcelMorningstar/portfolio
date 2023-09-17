'use client'

import React from 'react'
import Link from 'next/link'
import LinkToHash from './LinkToHash'
import { motion } from 'framer-motion'
import { AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdOutlineMail } from "react-icons/md";
import styles from '../styles/Header.module.css'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="absolute z-50 top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl flex flex-row justify-between p-5">
      <motion.div 
        className="flex flex-row gap-x-2"
        initial={{
          x: -500,
          scale: 0.5,
          opacity: 0
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
      >
        <Link href='https://www.linkedin.com/in/rolands-bluks-423994191/' target='_blank' className={styles.link} aria-label="linkedin">
          <AiFillLinkedin />
        </Link>
        <Link href='https://github.com/marcelmorningstar' target='_blank' className={styles.link} aria-label="github">
          <AiOutlineGithub />
        </Link>
        <Link href='https://www.instagram.com/marcelcoldwater/' target='_blank' className={styles.link} aria-label="instagram">
          <AiOutlineInstagram />
        </Link>
      </motion.div>

      <motion.div 
        className="flex flex-row gap-x-2"
        initial={{
          x: 500,
          scale: 0.5,
          opacity: 0
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
      >
        <LinkToHash to="/#contact" className={styles.link}>
          <MdOutlineMail />
          <p>GET IN TOUCH</p>
        </LinkToHash>
      </motion.div>
    </header>
  )
}