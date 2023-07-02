import React from 'react';
import './Header.css';

export default function Headers() {
	return (
		<div id="home" style={{ marginTop: 800 }}>
			<div id='name'>Alexi Ikonomou</div>
			<div style={{ textAlign: 'center', marginBottom: 500 }}>A react developer</div>
			{/* <div className="left" style={{ width: '70%' }}>
				<p id="first">Hi, my name is</p>
				<p id="second">Alexi 
					<img alt='' src={require('../sprites/wave.png')} width="60px" height="60px" />
				</p>
				<p id="third">React / Unity Developer</p>
				<p id="fourth">I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
				<a href="https://github.com/alexiosiko">
					<img alt='' src={require("../sprites/github-icon.png")} height="40" width="40" className="my-custom-control" />
				</a>
			</div>
			<div className="right" style={{ width: '30%' }}>
				<img alt='' src={require("../sprites/profile-pic.png")} width="100%" height="100%" />
			</div> */}
		</div>
	);
}