import Ruler from '@/components/Ruler'
import TextInput from '@/components/TextInput'
import Title from '@/components/Title'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container md:max-w-6xl mx-auto px-8 ">

      <header className='relative'>
        <Ruler height='32px' />
        <nav className='hidden md:flex items-center justify-end'>
          <ul className='flex space-x-16 justify-end'>
            <li className='menu-item active'>Home</li>
            <li className='menu-item'>Skill</li>
            <li className='menu-item'>Tools</li>
            <li className='menu-item'>Projects</li>
            <li className='menu-item'>Contact</li>
          </ul>
        </nav>
        <Ruler height='64px' />

        <div className=''>
          <div className='leading-9'>
            <p className='text-gray-500 text-6xl'>Hi,</p>
            <p className='text-gray-500 text-2xl'>I&apos;m Loic KAMI</p>
            <Ruler height='32px' />
            <p className=' text-black text-4xl md:text-5xl letter-spaced'>I&apos;m a get-the-job-done <br /> Full Stack(FE-Heavy) developer.</p>
            <Ruler height='16px' />
            <p className='max-w-xl leading-6'>
              I have my backgrounds in start-up environments. Being playing with code for 6+ years,
              I managed to achived 15x speed boost on react-native-map displaying over 500 clustered markers on world map.
              Always from scratch, never used a template!
            </p>
          </div>
          <Ruler height='32px' />
          <div className='flex space-x-8'>
            <button className='uppercase border-2 border-black p-4 text-white bg-black'>View my Projects</button>
            <button className='uppercase border-2 border-black p-4'>Hire me</button>
          </div>
        </div>

      </header>

      <Ruler height='64px' />

      <section className="">
        <Title value='My Only Skill' />
        <Ruler height='32px' />
        <div className="flex space-x-8">
          <p>Problem Solving.</p>
        </div>
      </section>

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

      <section className=''>
        <Title value='Projects' />
        <Ruler height='32px' />
        <div className='w-full md:flex'>
          <div className=' md:w-1/3 '>
            <div>
              <h3>Gesmax App</h3>
              <Ruler height='8px' />
              <p>
                Gesmax is a full-fledged POS system built with React-Native, it is available on web, desktop and mobile.
                One click e-commerce solution.
              </p>
            </div>
            <Ruler height='16px' />
            <div>
              <h4>Tools</h4>
              <Ruler height='8px' />
              <p>
                React Native, Jira, Golang, Next JS, Node JS, Firebase, Tailwind CSS
              </p>
            </div>

          </div>

          <div className='w-full h-48 md:h-96 md:w-2/3 bg-gray-200'>

          </div>
        </div>
        <Ruler height='32px' />

        <div className='w-full md:flex'>
          <div className=' md:w-1/3'>
            <div>
              <h3>Bogital Website</h3>
              <Ruler height='8px' />
              <p>Bogital is a software development agency I founded in Cameroun</p>
            </div>
            <Ruler height='16px' />
            <div>
              <h4>Tools</h4>
              <Ruler height='8px' />
              <p>
                Next JS, Wordpress API, Figma, GraphQL, Tailwind CSS
              </p>
            </div>
          </div>

          <div className='w-full h-48 md:h-96 md:w-2/3 bg-gray-200'>

          </div>
        </div>
        <Ruler height='32px' />

        <button className='w-full'>Load More...</button>

      </section>

      <Ruler height='64px' />

      <section className="">
        <Title value='Contact' />
        <Ruler height='32px' />

        <div className="md:flex md:flex-row-reverse justify-stretch">
          <div className=' flex-1 md:ml-8'>
            <div>
              <h5>Github</h5>
              <a href='' target='_blank'> https://github.com/kamicodaxe </a>
            </div>
            <Ruler height='32px' lgHidden />
            <div>
              <h5>Twitter</h5>
              <a href='' target='_blank'> https://twitter.com/kamicodaxe </a>
            </div>
            <Ruler height='32px' lgHidden />
          </div>

          <div className=' flex-1'>
            <div className='w-full'>
              <div className='w-full space-y-8 md:space-y-0 md:space-x-4 md:flex'>
                <TextInput label='First Name' />
                <TextInput label='Last Name' />
              </div>
              <Ruler height='32px' />
              <div className='w-full space-y-8 md:space-y-0 md:space-x-4 md:flex'>
                <TextInput label='Email' />
                <TextInput label='Phone' />
              </div>
              <Ruler height='32px' />

              <div className='relative'>
                <label htmlFor={"Message"} className=' absolute leading-4 -top-2 bg-white px-2'>{"Message"}</label>
                <textarea
                  className='w-full leading-6 px-2 pt-2 border-2 border-black'
                  name="message"
                  id="message"
                  rows={6}
                />
              </div>
              <Ruler height='32px' />

              <button className='uppercase border-2 border-black p-4 text-white bg-black'>Send Message</button>

            </div>
          </div>

        </div>


      </section>
      <Ruler height='64px' />


    </main>
  )
}
