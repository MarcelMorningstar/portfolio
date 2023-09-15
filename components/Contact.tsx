'use client'

import React from 'react'
import Layout from './Layout'
import { useForm, SubmitHandler } from "react-hook-form";
import { HiPhone, HiMail } from "react-icons/hi"
import styles from '../styles/Contact.module.css'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Layout title='contact'>
      <div className='flex flex-col items-center gap-9'>
        <h4 className={styles.title}>Found what you were looking for? <span className='underline decoration-primary'>Let&apos;s talk!</span></h4>

        <div className='space-y-1'>
          <a href={`tel:`} className='flex items-center justify-center gap-5'>
            <HiPhone className='w-7 h-7 text-primary animate-pulse' />
            <p className={styles.contacts}>{}</p>
          </a>
          <a href={`mailto:`} className='flex items-center justify-center gap-5'>
            <HiMail className='w-7 h-7 text-primary animate-pulse' />
            <p className={styles.contacts}>{}</p>
          </a>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input {...register('name')} type="text" placeholder='Name' className={styles.input} />
          <input {...register('email')} type="email" placeholder='Email' className={styles.input} />
          <input {...register('subject')} type="text" placeholder='Subject' className={styles.input2} />
          <textarea {...register('message')} placeholder='Message' rows={3} className={styles.textarea}></textarea>

          <button type='submit' className={styles.btn}>Send</button>
        </form>
      </div>
    </Layout>
  )
}