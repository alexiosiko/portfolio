import { projects } from "./../data/ProjectsData";

export default function Projects() {
	
	const imageStyle = { width: 50, height: 50, marginBottom: 50}
	const buttonStyle = "m-2 bg-blue-400 hover:bg-blue-200 transition p-2 rounded-lg text-black";

	return (
		<div className="">
			<h1 style={{ marginTop: 400, marginBottom: 100, fontSize: 50 }} >Projects</h1>
			<hr style={{ marginBottom: 100 }}/>
			<div className="columns-2" >
				{projects.map((project, index) => 
					<div className="mb-24" key={index}>
						<img className="m-auto" src={project.image} alt="any" style={imageStyle} />
						<h2 className="text-4xl mb-6 bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">{project.title}</h2>
						<p className="description text-lg max-w-md m-auto">
							{project.description}
						</p>
						<div className="flex justify-center gap-5 mt-8">
							{project.tags && project.tags.map((tag) =>
								<p className="tag" style={{ width: 'auto'}}>{tag}</p>
							)}
						</div>
						<div className="mt-6">
							{project.demo && 
								<button className={buttonStyle} onClick={() => window.open(project.demo, '_blank')} >Demo</button>
							}
							{project.videoId && 
								<button className={buttonStyle} onClick={() => window.open(project.videoId, '_blank')} >Video</button>
							}
							{project.github && 
								<button className={buttonStyle} onClick={() => window.open(project.github, '_blank')} >Github</button>
							}
						</div>
					</div>
				)}
			</div>	
		</div>
	)
}