import './Project.css';

export default function Project({ project, isEven }) {
	return (
		<div className="grid-item">
			<div className='left-right-container' style={{ display: 'flex'}}>
				<h2>{project.title}</h2>
				<div className='icon-container'>
					<img className='icon' src={require('./../sprites/github-icon.png')} onClick={() => window.open(project.url)} alt=''/>
				</div>
			</div>
			<div className='description'>{project.description}</div>
			<div className='frameworks' style={{ display: 'flex'}}>
				{project.dependencies.map((depend, index) => 
					<div style={{ marginRight: '25px'}} key={index}>{depend}</div>)}
			</div>
		</div>
	)
}

