import './Intro.css';
import Face from './../resources/face.png';
import { Image } from "react-bootstrap";
import Github from './../resources/github.png';
import Resume from './../resources/resume.png';
import ResumePdf from './../resources/react-resume.pdf';

export default function Intro() {
	return (
		<div className="hidden">
			<img src={Face} height={200} width={130} style={{marginTop: 300, marginBottom: 100}} alt='face' />
			<div style={{  margin: 'auto', marginBottom: 50, marginTop: -40}}> 
				<Image onClick={() => window.open("https://github.com/alexiosiko", '_blank')} src={Github} className='m-2 icon' alt='github'/>
				<Image onClick={() => window.open(ResumePdf, '_blank')} src={Resume} className='m-2 icon'alt='resume'/>
			</div>
			<h1 style={{ fontSize: 60}}>
				Hi, I'm Alexi
			</h1>
			<h3 style={{ lineHeight: 1.7, marginTop: 50}}>
				Over the past 2 years, I have worked on various projects
				developing my skills and delivering exciting outcomes.
				If you're looking for a creative and enthusiastic
				developer, let's connect and build amazing projects
				together!
			</h3>
		</div>
	)
}