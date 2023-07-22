import { useState } from "react"
import './GridProjects.css';
import VideoPlayer from "./VideoPlayer";
export default function Projects() {
	const [selectedVideoId, setSelectedVideoId] = useState(null);

	function handleOpenVideo(videoId) {
		setSelectedVideoId(videoId);
	}
	function handleCloseVideo() {
		setSelectedVideoId(null);
	}

	const [projects] = useState([
		{
			title: 'Reddit CLone',
			description: 'A reddit clone created in React Native. Has get and fetch requests for posts and uploads',
			backgroundImage: require('./../images/reddit-clone.png'),
			tags: ['React-Native', 'Python Backend'],
			github: 'https://github.com/alexiosiko/reddit-clone',
			videoId: 'VScaI4mdjIk',
		},
		{
			title: 'Card Game (Steam Multiplayer)',
			description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTkage Manager, and npm.',
			backgroundImage: require('./../images/cards-icon.png'),
			tags: ['Unity', 'C#', "Netcode"],
			github: 'https://github.com/alexiosiko/Card-Game-Multiplayer',
			videoId: 'vrnBL6YnJ48',
		},
		{
			title: 'Bilging Puzzle',
			description: 'A bewjewled liked puzzle game that taught me sprites, basic animations, and puzzle algorithums',
			backgroundImage: require('./../images/bilge.png'),
			tags: ['Sprites', 'Tween Animations', 'Algorithums'],
			demo: 'https://alexiosiko.github.io/Bilge/',
			github: 'https://github.com/alexiosiko/Bilge',
			videoId: 'r7YQPCpkdQc',
		},
		{
			title: 'A Night with Santa',
			description: 'A silly hide and escape from santa game',
			backgroundImage: require('./../images/santa.png'),
			tags: ['Unity', 'Pathfinding'],
			demo: 'https://alexiosiko.github.io/A-Night-A-Mr.-Waters-/',
			github: 'https://github.com/alexiosiko/A-Night-A-Mr.-Waters-',
			videoId: 'bY5-YUApvAY',
		},

		{
			title: 'Castle Mystery (NPC Interaction)',
			description: 'An interactive first person shooter. Talk to people, pick up and use objects to unlock interactables and open new paths',
			backgroundImage: require('./../images/castle-npc.png'),
			tags: ['NPC Behaviours', 'Inventory', 'Props'],
			demo: 'https://alexiosiko.github.io/Castle-Npcs/',
			github: 'https://github.com/alexiosiko/Castle-Npcs',
			videoId: '227b1uaZAvI',
		},
		{
			title: '2D Slime Game',
			description: 'Break dirts blocks to reveal slime that interact with and spread nutrients',
			backgroundImage: require('./../images/slimes-icon.png'),
			tags: ['Animations', 'Entity Behaviours'],
			demo: 'https://alexiosiko.github.io/No-Heroes-Allowed/',
			github: 'https://github.com/alexiosiko/No-Heroes-Allowed',
			videoId: 'e8b_tnTwuWw',
		},
		{
			title: 'Calculator',
			description: 'Calculator that got me first started with react-native',
			backgroundImage: require('./../images/calculator.png'),
			tags: ['React Native', 'useReducer'],
			github: 'https://github.com/alexiosiko/calculator-react-native',
		},


	]);

	return (<>
		<div  className="grid-container">
			{projects.map((project, index) => 
				<div key={index} className="grid-item" style={{ backgroundImage: `url(${project.backgroundImage}`, backgroundSize: 'cover'}}>
					<div className="grid-item-details">
						<p>{project.description}</p>
						<div style={{ display: "flex", flexDirection: "row-reverse"}}>
							{project.tags && project.tags.map((framework, index) => (
								<p key={index} className="framework">{framework}</p>
							))}
						</div>
						<div>
							{project.demo && <button onClick={() => window.open(project.demo, '_blank')}>Demo</button>}
							{project.videoId && <button onClick={() => handleOpenVideo(project.videoId)}>Video</button>}
							{project.github && <button onClick={() => window.open(project.github, '_blank')} >Github</button>}
							
						</div>
					</div>
					<h1>{project.title}</h1>
				</div>
			)}
			{selectedVideoId && <VideoPlayer videoId={selectedVideoId} handleCloseVideo={handleCloseVideo} />}
			<div id="contact" />
		</div>	
	</>)
}