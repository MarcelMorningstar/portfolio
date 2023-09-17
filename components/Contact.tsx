'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Layout from './Layout'
import { useForm, SubmitHandler } from "react-hook-form";
import { HiPhone, HiMail } from "react-icons/hi"
import confetti from "@/assets/confetti.gif"
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
  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<{ ok: boolean, message: string } | null>(null)
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    setLoading(true)

    const dataBack = (await response).json()
    dataBack.then(value => { setResult({ ok: value.ok, message: value.message }) })

    setLoading(false)
  }

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
          <input {...register('name')} type="text" placeholder='Name' required className={styles.input} />
          <input {...register('email')} type="email" placeholder='Email' required className={styles.input} />
          <input {...register('subject')} type="text" placeholder='Subject' required className={styles.input2} />
          <textarea {...register('message')} placeholder='Message' required rows={3} className={styles.textarea}></textarea>

          {
            result ? (
              <div className='relative flex items-center justify-center h-12' style={{ gridColumn: '1 / 3' }}>
                {
                  result.ok && (
                    <Image src={confetti} width={320} height={320} className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="contact me success" />
                  )
                }
                <span className='relative z-20 w-full text-center text-lg text-text'>{ result.message }</span>
              </div>
            ) : loading ? (
              <div className='relative flex items-center justify-center h-12' style={{ gridColumn: '1 / 3' }}>
                <div className={styles.loader}></div>
              </div>
            ) : (
              <button type='submit' className="flex items-center justify-center h-12 text-lg font-bold text-background bg-primary hover:bg-primary/90 active:bg-primary/70 rounded-md" style={{ gridColumn: '1 / 3' }}>Send</button>
            )
          }
        </form>
      </div>
    </Layout>
  )
}