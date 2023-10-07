/**
 * landing->Tools
 * Tools section of the landing page
 */
import * as React from "react"
import Ruler from "./Ruler"
import Title from "./Title"

export interface ToolsProps { }

const Tools: React.FC<ToolsProps> = ({ }) => {
	return (
		<section className="">
			<Title value='Tools' />
			<Ruler height='32px' />
			<div className="flex space-x-8 flex-wrap">
				<p>React JS</p>
				<p>React Native</p>
				<p>Typescript</p>
				<p>Tailwind CSS</p>
				<p>Figma</p>
				<p>Node JS</p>
				<p>Firebase</p>
				<p>C/C++</p>
				<p>Golang</p>
				<p>Wordpress</p>
			</div>
			<Ruler height='16px' />
			<div className="flex space-x-8 flex-wrap">
				<p>MySQL</p>
				<p>MongoDB</p>
				<p>PostgresSQL</p>
				<p>Jira</p>
				<p>AWS</p>
				<p>Git</p>
				<p>CI/CD</p>
				<p>Redux Toolkit</p>
				<p>Scrum Master</p>
			</div>
		</section>
	)
}

Tools.displayName = "Tools"

export { Tools }
