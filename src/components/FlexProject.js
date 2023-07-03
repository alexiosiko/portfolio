import './FlexProject.css';
export default function Project({ flexProject, isEven }) {
	const flexDirection = isEven ? 'row' : 'row-reverse';
	const right = isEven ? '18%' : '0%';
	const textAlign = isEven ? 'right' : 'left';
	const justifyContent = isEven ? 'flex-end' : 'flex-start';
	return (
		<>
			<div className="flex-left-right-container" style={{ flexDirection }}>
				<div className="flex-left flex-img-container">
					<img src={require('./../images/reddit-clone.png')} alt='' />
					<div className="flex-tint" onClick={() => "window.open('https:/alexiosiko.github.io/Bilge/Build', '_blank');"}></div>
				</div>
				<div className="flex-right">
					<h1 style={{ textAlign }}>{flexProject.title}</h1>
					<div className="flex-description" style={{ right }}>{flexProject.description}</div>
					<div style={{ display: 'flex', justifyContent }}>
						{flexProject.frameworks.map((framework) => 
							<div style={{ margin: 10 }}>{framework}</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}