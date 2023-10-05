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
				<p>Node JS</p>
				<p>Golang</p>
				<p>Firebase</p>
				<p>Tailwind CSS</p>
				<p>Figma</p>
				<p>Wordpress</p>
				<p>Jira</p>
			</div>
		</section>
	)
}

Tools.displayName = "Tools"

export { Tools }
