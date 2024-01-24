"use client"

import { loginFormSchema } from '../../../lib/form'
import { IBM_Plex_Mono } from 'next/font/google'
import styles from './styles.module.scss'
import { MouseEventHandler, useState } from 'react'
import { sendMail } from '@/lib/mail'
import { ZodIssue } from 'zod/lib'
import { useForm, useFormContext } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast'
interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}


const IBM = IBM_Plex_Mono({
  variable: '--font-IBM',
  weight: ['400', '500'],
  subsets: ['latin'],
})





export function Contact() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')



  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const validatedData = loginFormSchema.safeParse({ email, name, message })

    if (!validatedData.success) {
      let errorMessage = '';


      validatedData.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage +
          issue.message + ". ";

      })


      toast.error(errorMessage)

    } else {
      await sendMail({
        to: "jefdev53@gmail.com",
        subject: "Proposta",
        name: name,
        body: JSON.stringify(validatedData),

      })
      setEmail('');

      setName('');
      setMessage('');
      toast.success('E-mail enviado com sucesso!')
    }




  }

  return (
    <div className={styles.main}>
      <h6 className={IBM.className}>../Contato</h6>
      <h1>Vamos trabalhar juntos?
        Entre em contato
      </h1>
      <Toaster position={'bottom-right'} />
      <form className={styles.Block}>
        <input onChange={(e) => setName(e.target.value)} placeholder='Nome' value={name} required />

        <input onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' value={email} required />
        <textarea onChange={(e) => setMessage(e.target.value)} placeholder='Mensagem' value={message} required />
        <button onClick={(e) => handleSubmit(e)} className={styles.buttom}>Enviar mensagem →</button>
      </form>


    </div>
  )
}