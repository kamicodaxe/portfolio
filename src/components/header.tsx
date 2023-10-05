/**
 * landing->Header
 * Header section of the landing page
 */
import * as React from "react"
import Ruler from "./Ruler"
import { scrollToSection } from "@/lib"

export interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ }) => {
	return (
		<header className='relative'>
			<Ruler height='32px' />
			<nav className='hidden md:flex items-center justify-end'>
				<ul className='flex space-x-16 justify-end'>
					{
						/* <li className='menu-item active'>Home</li>
							<li className='menu-item'>Skill</li>
							<li className='menu-item'>Tools</li>
						*/
					}
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
					<p className=' text-black text-4xl md:text-5xl letter-spaced'>Full-Stack Software Engineer.</p>
					<Ruler height='16px' />
					<p className='max-w-xl leading-6 mx-auto'>
						Seasoned Software Engineer adept in React (Next.js, React Native), Node.js, Golang, and C.
						My forte lies in problem-solving, crafting innovative solutions from scratch.
						No templates used; each project showcases my dedication, creativity and expertise.
					</p>
				</div>
				<Ruler height='32px' />
				<div className='flex space-x-8 justify-center'>
					<button onClick={() => scrollToSection('projects')} className='uppercase border-2 border-black p-4 text-white bg-black'>View my Projects</button>
					<button onClick={() => scrollToSection('contact')} className='uppercase border-2 border-black p-4'>Hire me</button>
				</div>
			</div>

		</header>
	)
}

Header.displayName = "Header"

export { Header }
