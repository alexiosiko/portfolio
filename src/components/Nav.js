import './Nav.css';
import resume from './../files/resume.pdf';

export default function Nav() {
	return (
		<div id='nav'>
			<a href='#home'>Home</a>
			<a href='#portfolio'>Portfolio</a>
			<a href='#contact'>Contact</a>
			<a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>

		</div>
	)
}