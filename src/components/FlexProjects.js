import { useState } from "react"
import Project from "./FlexProject.js";

export default function Projects() {
	const [flexProjects] = useState([
		{
			title: 'Reddit Clone',
			description: 'A basic reddit clone created in react-native',
			frameworks: ['Unity', 'C#', 'Netcode'],
			image: 'reddit-clone.png'
		},
		{
			title: 'titlee',
			description: 'descriptionnn',
			frameworks: ['Unity', 'C#', 'Netcode'],
			image: 'calculator.png'
		},
		{
			title: 'titlee',
			description: 'descriptionnn',
			frameworks: ['Unity', 'C#', 'Netcode'],
			image: 'calculator.png'
		},

							
	]);
	return (
	<>
		{flexProjects.map((flexProject, index) => 
			<Project key={index} flexProject={flexProject} isEven={index % 2 === 0} />)
		}
	</>)
}