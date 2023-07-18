import React from 'react';
import './Header.css';
import devicesSvg from './../images/hero-devices.svg';

export default function Headers() {
	return (
		<div id='home' style={{ margin: 'auto',marginTop: 250 , width: '40%', textAlign: 'center' }}>
			<div id='name'>Hi, I'm Alexi</div>
			<div id='description'>
				A passionate developer with expertise in Unity and React.
				I love turning ideas into reality through
				creative problem-solving and innovative solutions. Over the past 2 years, I have worked
				on various projects, honing my skills and delivering exciting outcomes
			</div>
			<img src={devicesSvg} height={500}alt='img'/>
		</div>
	);
}