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
						<h5>Github</h5>
						<a href='https://github.com/kamicodaxe' target='_blank'> https://github.com/kamicodaxe </a>
					</div>
					<Ruler height='32px' lgHidden />
					<div>
						<h5>Linkedin</h5>
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
