import { useState } from "react"
import './GridProjects.css';

export default function Projects() {
	const [projects] = useState([

		{
			title: 'Reddit CLone',
			description: 'A reddit clone created in React Native. Has get and fetch requests for posts and uploads',
			backgroundImage: require('./../images/reddit-clone.png'),
			github: 'https://github.com/alexiosiko/reddit-clone',
		},
		{
			title: 'Card Game (Steam Multiplayer)',
			description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTkage Manager, and npm.',
			backgroundImage: require('./../images/background.png'),
			github: 'https://github.com/alexiosiko/Card-Game-Multiplayer',
		},
		{
			title: 'Bilging Puzzle',
			description: 'A bewjewled liked puzzle game that taught me sprites, basic animations, and puzzle algorithums',
			backgroundImage: require('./../images/bilge.png'),
			demo: 'https://alexiosiko.github.io/Bilge/',
			github: 'https://github.com/alexiosiko/Bilge',
		},
		{
			title: 'Calculator',
			description: 'Calculator that got me first started with react-native',
			backgroundImage: require('./../images/calculator.png'),
			github: 'https://github.com/alexiosiko/calculator-react-native',

		},
		{
			title: 'Castle Mystery (NPC Interaction)',
			description: 'An interactive first person shooter. Talk to people, pick up and use objects to unlock interactables and open new paths',
			backgroundImage: require('./../images/castle-npc.png'),
			demo: 'https://alexiosiko.github.io/Castle-Npcs/',
			github: 'https://github.com/alexiosiko/Castle-Npcs',

		},
		{
			title: '2D Slime Game',
			description: 'Break dirts blocks to reveal slime that interact with and spread nutrients that in which you can create larger monsters to defeat the humans',
			backgroundImage: require('./../images/slimes-icon.png'),
			demo: 'https://alexiosiko.github.io/No-Heroes-Allowed/',
			github: 'https://github.com/alexiosiko/No-Heroes-Allowed',

		},
		{
			title: 'A Night with Santa',
			description: 'A silly hide and escape from santa game',
			backgroundImage: require('./../images/background.png'),
			demo: 'https://alexiosiko.github.io/A-Night-A-Mr.-Waters-/',
			github: 'https://github.com/alexiosiko/A-Night-A-Mr.-Waters-',
		},

	]);
	return (<>
		<div className="grid-container">
			{projects.map((project, index) => 
				(	
					<div key={index} className="grid-item" style={{ backgroundImage: `url(${project.backgroundImage}`, backgroundSize: 'cover'}}>
						<div className="grid-item-details">
							<p>{project.description}</p>
							<div>
								{project.demo && <button onClick={() => window.open(project.demo, '_blank')}>Demo</button>}
								{project.video && <button>Video</button>}
								{project.github && <button onClick={() => window.open(project.github, '_blank')} >Github</button>}
							</div>
						</div>
						<h1>{project.title}</h1>
					</div>
			))}
		</div>
	</>)
}