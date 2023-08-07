import './App.css';
// import Navigation from './components/Navigation.js';
import Intro from './Intro.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';


function App() {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry)
				if (entry.isIntersecting)
					entry.target.classList.add("show");
				else
					entry.target.classList.remove("show");
			});
		});

		const hiddenElements = document.querySelectorAll(".hidden");
		hiddenElements.forEach((element) => observer.observe(element));
	}, [])

	return (
		<div className="App" style={{ textAlign: 'center'}}> 
			{/* <Navigation /> */}
			<Intro />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
