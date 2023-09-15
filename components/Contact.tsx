'use client'

import React from 'react'
import Layout from './Layout'
import { useForm, SubmitHandler } from "react-hook-form";
import { HiPhone, HiMail } from "react-icons/hi"
import styles from '../styles/Contact.module.css'
import { PageInfo } from '@/typings';

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {
  pageInfo: PageInfo
}

export default function Contact({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Layout title='contact'>
      <div className='flex flex-col items-center gap-9'>
        <h4 className="text-center text-4xl font-semibold text-text" style={{ fontSize: 'min(8vw, 36px)' }}>Found what you were looking for? <span className='underline decoration-primary'>Let&apos;s talk!</span></h4>

        <div className='space-y-1'>
          <a href={`tel:${ pageInfo.phone }`} className='flex items-center justify-center gap-5 text-text'>
            <HiPhone className='w-7 h-7 text-primary animate-pulse' />
            <p style={{ fontSize: 'min(6vw, 24px)' }}>{ pageInfo.phone }</p>
          </a>
          <a href={`mailto:${ pageInfo.email }`} className='flex items-center justify-center gap-5 text-text'>
            <HiMail className='w-7 h-7 text-primary animate-pulse' />
            <p style={{ fontSize: 'min(6vw, 24px)' }}>{ pageInfo.email }</p>
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