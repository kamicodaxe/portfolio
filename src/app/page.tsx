'use client';
import ContactForm from '@/components/ContactForm';
import ProjectPreview from '@/components/ProjectPreview';
import Ruler from '@/components/Ruler';
import Title from '@/components/Title';
import { Contact } from '@/components/contact';
import { Header } from '@/components/header';
import { Project } from '@/components/project';
import { Tools } from '@/components/tools';
import db from '@/lib/database';
import { FormEvent, useState } from 'react';

export default function Home() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')



  function onSubmit(e: FormEvent) {
    e.preventDefault()
    console.log({
      firstName,
      lastName,
      email,
      phone,
      message
    })
  }



  return (
    <main className="flex min-h-screen flex-col container md:max-w-6xl mx-auto px-8 ">

      <Header />

      <Ruler height='64px' />

      <Tools />

      <Ruler height='64px' />

      <section className='' id='projects'>
        <Title value='Projects' />
        <Ruler height='32px' />

        {
          db.projects.map((project, i) => <Project key={i} project={project} />)
        }

        {/* <button className='w-full'>Load More...</button> */}

      </section>

      <Ruler height='64px' />

      <Contact />

      <Ruler height='64px' />

    </main>
  )
}
