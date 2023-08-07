import { Button } from "react-bootstrap";
import RedditIcon from './resources/reddit.png';
import { projects } from "./ProjectsData";
import './Projects.css';



export default function Projects() {
	
	const imageStyle = { width: 50, height: 50, marginBottom: 50}

	return (
		<div className="grid-container">
			{projects.map((project, index) => 
				<div>
					<img src={project.image} alt="any" style={imageStyle} />
					<h2>{project.title}</h2>
					<p>
						{project.description}
					</p>
					<div>
						{project.demo && <Button onClick={() => window.open(project.demo, '_blank')} className="m-2">Demo</Button>}
						{project.videoId && <Button onClick={() => window.open(project.videoId, '_blank')} className="m-2">Video</Button>}
						{project.github && <Button onClick={() => window.open(project.github, '_blank')} className="m-2">Github</Button>}
					</div>
				</div>
			)}
		</div>	
	)
}