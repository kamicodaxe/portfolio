/**
 * landing->Project
 * Project section of the landing page
 */
import * as React from "react"
import Ruler from "./Ruler"
import ProjectPreview from "./ProjectPreview"
import { TProject } from "@/lib/database"

export interface ProjectProps {
	project: TProject
}

const Project: React.FC<ProjectProps> = ({ project }) => {
	return (
		<>
			<div className='w-full md:flex'>
				<div className=' md:w-1/3 '>
					<div>
						<h3 className="font-bold text-xl">{project.name}</h3>
						<Ruler height='8px' />
						<p>
							{project.description}
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
							{project.tools.join(", ")}
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
							{
								project.links.map(link => (
									<a key={link.url} href={link.url} target='_blank' className='text-base p-1 px-2 border inline-block mr-4 hover:border-black ' >
										{link.title}
									</a>
								))
							}
						</div>
					</div>

				</div>

				<ProjectPreview src={project.media.src} alt={project.media.alt} />

			</div>

			<Ruler height='32px' />
		</>
	)
}

Project.displayName = "Project"

export { Project }
