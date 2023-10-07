/**
 * landing->Contact
 * Contact section of the landing page
 */
import * as React from "react"
import Ruler from "./Ruler"
import Title from "./Title"
import ContactForm from "./ContactForm"

export interface ContactProps { }

const Contact: React.FC<ContactProps> = ({ }) => {
	return (
		<section id='contact' className="">
			<Title value='Contact' />
			<Ruler height='32px' />

			<div className="md:flex md:flex-row-reverse justify-stretch">
				<div className=' flex-1 md:ml-8'>
					<div>
						<div className='flex space-x-2'>
							<h5>Github</h5>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
							</svg>
						</div>
						<a href='https://github.com/kamicodaxe' target='_blank'> https://github.com/kamicodaxe </a>
					</div>
					<Ruler height='32px' lgHidden />
					<div>
						<div className='flex space-x-2'>
							<h5>Linkedin</h5>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
							</svg>
						</div>
						<a href='https://www.linkedin.com/in/loic-kami/' target='_blank'> https://www.linkedin.com/in/loic-kami/ </a>
					</div>
					<Ruler height='32px' lgHidden />
				</div>

				<div className=' flex-1'>
					<ContactForm />
				</div>

			</div>

		</section>
	)
}

Contact.displayName = "Contact"

export { Contact }
