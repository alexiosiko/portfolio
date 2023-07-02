import { useState } from "react"
import Project from "./Project";
import './Projects.css';

export default function Projects() {
	const [projects] = useState([
		{
			title: 'Reddit Clone',
			description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
			dependencies: ['React-Native'],
			url: 'https://github.com/AlexiosIko/reddit-clone'
		},
		{
			title: 'Bilging Puzzle',
			description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
			dependencies: ['Unity', 'C#'],
			url: 'https://github.com/AlexiosIko/Bilge'
		},
		{
			title: 'Bilging Puzzle',
			description: 'descriptionnn',
			dependencies: ['Unity', 'C#'],
			url: 'https://github.com/AlexiosIko/Bilge'
		},
		{
			title: 'Calculator',
			description: 'descriptionnn',
			dependencies: ['React-Native'],
			url: 'https://github.com/AlexiosIko/calculator-react-native'
		},
		{
			title: 'Bilging Puzzle',
			description: 'descriptionnn',
			dependencies: ['Unity', 'C#'],
			url: 'https://github.com/AlexiosIko/Bilge'
		},
	]);
	return (<>
		<div className="grid-container">
			{projects.map((project, index) => 
				<Project key={index} project={project} />
			)}
		</div>
	</>)
}