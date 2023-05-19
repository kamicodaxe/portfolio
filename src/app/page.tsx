import TextInput from '@/components/TextInput'
import Title from '@/components/Title'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container md:max-w-7xl mx-auto p-8 md:p-24 md:pt-0  space-y-8">

      <header className='relative pb-16'>
        <nav className='hidden md:flex items-center justify-end h-32'>
          <ul className='flex space-x-16 justify-end'>
            <li className='menu-item active'>Home</li>
            <li className='menu-item'>Skill</li>
            <li className='menu-item'>Tools</li>
            <li className='menu-item'>Projects</li>
            <li className='menu-item'>Contact</li>
          </ul>
        </nav>

        <div className='space-y-8 pt-4'>
          <div className='leading-9'>
            <p className='text-gray-500 text-6xl'>Hi,</p>
            <p className='text-gray-500 text-2xl pb-8'>I'm Loic KAMI</p>
            <p className=' text-black text-4xl md:text-5xl letter-spaced'>I'm a get-the-job-done <br /> Full Stack(FE-Heavy) developer.</p>
            <p className=' max-w-xl leading-6 pt-4'>
              I have my backgrounds in start-up environments. Being playing with code for 6+ years,
              I managed to achived 15x speed boost on react-native-map displaying over 500 clustered markers on world map.
              Always from scratch, never used a template!
            </p>
          </div>

          <div className='flex space-x-8 md:pt-8'>
            <button className='uppercase border-2 border-black p-4 text-white bg-black'>View my Projects</button>
            <button className='uppercase border-2 border-black p-4'>Hire me</button>
          </div>
        </div>

      </header>

      <section className="space-y-8 pb-16">
        <Title value='My Only Skill' />
        <div className="flex space-x-8">
          <p>Problem Solving.</p>
        </div>
      </section>

      <section className="space-y-8 pb-16">
        <Title value='Tools' />
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

      <section className='space-y-8 pb-16'>
        <Title value='Projects' />

        <div className='w-full md:flex'>
          <div className=' md:w-1/3 space-y-4 pb-4'>
            <div>
              <h3>Gesmax App</h3>
              <p>
                Gesmax is a full-fledged POS system built with React-Native, it is available on web, desktop and mobile.
                One click e-commerce solution.
              </p>
            </div>

            <div>
              <h4>Tools</h4>
              <p>
                React Native, Jira, Golang, Next JS, Node JS, Firebase, Tailwind CSS
              </p>
            </div>

          </div>

          <div className='w-full h-48 md:h-96 md:w-2/3 bg-gray-200'>

          </div>
        </div>

        <div className='w-full md:flex'>
          <div className=' md:w-1/3 space-y-4 pb-4'>
            <div>
              <h3>Bogital Website</h3>
              <p>Bogital is a software development agency I founded in Cameroun</p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>
                Next JS, Wordpress API, Figma, GraphQL, Tailwind CSS
              </p>
            </div>
          </div>

          <div className='w-full h-48 md:h-96 md:w-2/3 bg-gray-200'>

          </div>
        </div>

        <button className='w-full'>Load More...</button>

      </section>

      <section className="space-y-8 pb-16">
        <Title value='Contact' />

        <div className="space-y-8 md:flex md:flex-row-reverse justify-stretch">

          <div className=' flex-1 space-y-8 mt-8 md:ml-8'>
            <div>
              <h5>Github</h5>
              <a href='' target='_blank'> https://github.com/kamicodaxe </a>
            </div>
            <div>
              <h5>Twitter</h5>
              <a href='' target='_blank'> https://twitter.com/kamicodaxe </a>
            </div>
          </div>

          <div className=' flex-1'>
            <div className='w-full space-y-8'>
              <div className='w-full space-y-8 md:space-y-0 md:space-x-4 md:flex'>
                <TextInput label='First Name' />
                <TextInput label='Last Name' />
              </div>

              <div className='w-full space-y-8 md:space-y-0 md:space-x-4 md:flex'>
                <TextInput label='Email' />
                <TextInput label='Phone' />
              </div>

              <div className='relative'>
                <label htmlFor={"Message"} className=' absolute leading-4 -top-2 bg-white px-2'>{"Message"}</label>
                <textarea
                  className='w-full leading-6 px-2 border-2 border-black'
                  name="message"
                  id="message"
                  rows={6}
                />
              </div>

              <button className='uppercase border-2 border-black p-4 text-white bg-black'>Send Message</button>

            </div>
          </div>

        </div>


      </section>


    </main>
  )
}
