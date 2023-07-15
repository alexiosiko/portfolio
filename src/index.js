import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from 			'./components/Nav.js';
import Header from 			'./components/Header.js';
import ProjectsGrid from 	'./components/GridProjects.js';
import Title from './components/Title.js';
import Introduction from 	'./components/Introduction.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Nav />
		<Header />
		<Introduction />
		<Title />
		<ProjectsGrid />
	</React.StrictMode>
);