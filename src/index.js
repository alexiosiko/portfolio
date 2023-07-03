import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from 			'./components/Nav.js';
import Header from 			'./components/Header.js';
import ProjectsGrid from 	'./components/GridProjects.js';
import Projects from 		'./components/FlexProjects.js';
import Break from 			'./components/Break.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Nav />
	<Header />
	<Break />
	<Projects />
	<Break />
	<ProjectsGrid />
  </React.StrictMode>
);