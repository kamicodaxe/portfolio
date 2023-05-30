'use client';
import ContactForm from '@/components/ContactForm';
import Ruler from '@/components/Ruler';
import Title from '@/components/Title';
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

  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <main className="flex min-h-screen flex-col container md:max-w-6xl mx-auto px-8 ">

      <header className='relative'>
        <Ruler height='32px' />
        <nav className='hidden md:flex items-center justify-end'>
          <ul className='flex space-x-16 justify-end'>
            {/* <li className='menu-item active'>Home</li>
            <li className='menu-item'>Skill</li>
            <li className='menu-item'>Tools</li> */}
            {/* <li className='menu-item p-2 px-8'>Blog</li> */}
            <li onClick={() => scrollToSection('contact')} className='menu-item bg-black text-white p-2 px-8 rounded'>Contact</li>
          </ul>
        </nav>
        <Ruler height='64px' />

        <div className=' text-center'>
          <div className='leading-9'>
            <p className='text-gray-500 text-6xl'>Hi,</p>
            <p className='text-gray-500 text-2xl'>I&apos;m Loic KAMI</p>
            <Ruler height='32px' />
            <p className=' text-black text-4xl md:text-5xl letter-spaced'>I&apos;m a  Full Stack(FE-Heavy) <br /> developer.</p>
            <Ruler height='16px' />
            <p className='max-w-xl leading-6 mx-auto'>
              My only real skill is problem solving. Being playing with code for 6+ years,
              I managed to achived 15x speed boost on react-native-map displaying over 500 clustered markers on world map.
              Always from scratch, never used a template!
            </p>
          </div>
          <Ruler height='32px' />
          <div className='flex space-x-8 justify-center'>
            <button onClick={() => scrollToSection('projects')} className='uppercase border-2 border-black p-4 text-white bg-black'>View my Projects</button>
            <button onClick={() => scrollToSection('contact')} className='uppercase border-2 border-black p-4'>Hire me</button>
          </div>
        </div>

      </header>

      <Ruler height='64px' />


      <section className="">
        <Title value='Tools' />
        <Ruler height='32px' />
        <div className="flex space-x-8 flex-wrap">
          <p>React JS</p>
          <p>React Native</p>
          <p>Node JS</p>
          <p>Golang</p>
          <p>Firebase</p>
          <p>Tailwind CSS</p>
          <p>Figma</p>
          <p>Wordpress</p>
          <p>Jira</p>
        </div>
      </section>

      <Ruler height='64px' />

      <section className='' id='projects'>
        <Title value='Projects' />
        <Ruler height='32px' />
        <div className='w-full md:flex'>
          <div className=' md:w-1/3 '>
            <div>
              <h3 className="font-bold text-xl">Gesmax Point-of-sale platform</h3>
              <Ruler height='8px' />
              <p>
                Gesmax is a full-fledged POS system built with React-Native, it is available on web, desktop and mobile.
                One click e-commerce solution.
              </p>
            </div>
            <Ruler height='16px' />
            <div>
              <div className='flex space-x-2'>
                <h4 className="font-bold">Tools</h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>

              </div>

              <Ruler height='8px' />
              <p>
                React Native, Jira, Golang, Next JS, Node JS, Firebase, Tailwind CSS
              </p>
            </div>
            <Ruler height='16px' />
            <div>
              <div className='flex space-x-2'>
                <h4 className="font-bold">Links</h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>

              <Ruler height='8px' />

              <div className='leading-[2.5rem]'>
                <a href='https://github.com/kamicodaxe/gesmax.web' target='_blank' className=' text-base p-1 px-2 border inline-block mr-4 hover:border-black ' >
                  Github
                </a>
                {/* <a href='#' target='_blank' className=' text-base p-1 px-2 border inline-block mr-4 hover:border-black ' >
                  Figma
                </a> */}
                <a href='http://gesmax.vercel.app/' target='_blank' className=' text-base p-1 px-2 border inline-block mr-4 hover:border-black ' >
                  Landing Page
                </a>
                <a href='http://gesmaxapp.vercel.app/' target='_blank' className=' text-base p-1 px-2 border inline-block mr-4 hover:border-black ' >
                  Web demo
                </a>
              </div>
            </div>


          </div>

          <div className='w-full h-48 md:h-96 md:w-2/3 bg-gray-200 bg-[url("/images/gesmax.jpeg")] bg-cover transition-all delay-300 duration-1000 ease-in-out hover:bg-bottom' >

          </div>
        </div>
        <Ruler height='32px' />

        <div className='w-full md:flex'>
          <div className=' md:w-1/3'>
            <div>
              <h3 className="font-bold text-xl">Bogital Web Agency</h3>
              <Ruler height='8px' />
              <p>Bogital is a software development agency I founded in 2017.</p>
            </div>
            <Ruler height='16px' />
            <div>
              <div className='flex space-x-2'>
                <h4 className="font-bold">Tools</h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>

              </div>
              <Ruler height='8px' />
              <p>
                Next JS, Wordpress API, Figma, GraphQL, Tailwind CSS, i18n
              </p>
              <Ruler height='16px' />

              <div className='flex space-x-2'>
                <h4 className="font-bold">Links</h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
              <Ruler height='8px' />

              <div className='leading-[2.5rem]'>
                <a href='https://github.com/kamicodaxe/bogital.com' target='_blank' className=' text-base p-1 px-2 border inline-block mr-4 hover:border-black ' >
                  Github
                </a>
                {/* <a href='#' target='_blank' className=' text-base p-1 px-2 border inline-block mr-4 hover:border-black ' >
                  Figma
                </a> */}
                <a href='http://bogital.com/' target='_blank' className=' text-base p-1 px-2 border inline-block mr-4 hover:border-black ' >
                  Landing Page
                </a>

              </div>

            </div>
          </div>

          <div className='w-full h-48 md:h-96 md:w-2/3 bg-gray-200 bg-[url("/images/bogital.jpeg")] bg-cover transition-all delay-300 duration-1000 ease-in-out hover:bg-bottom' >

          </div>
        </div>
        <Ruler height='32px' />

        {/* <button className='w-full'>Load More...</button> */}

      </section>

      <Ruler height='64px' />

      <section id='contact' className="">
        <Title value='Contact' />
        <Ruler height='32px' />

        <div className="md:flex md:flex-row-reverse justify-stretch">
          <div className=' flex-1 md:ml-8'>
            <div>
              <h5>Github</h5>
              <a href='https://github.com/kamicodaxe' target='_blank'> https://github.com/kamicodaxe </a>
            </div>
            <Ruler height='32px' lgHidden />
            <div>
              <h5>Twitter</h5>
              <a href='' target='_blank'> https://twitter.com/kamicodaxe </a>
            </div>
            <Ruler height='32px' lgHidden />
          </div>

          <div className=' flex-1'>
            <ContactForm />
          </div>

        </div>


      </section>
      <Ruler height='64px' />


    </main>
  )
}
