import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Projects from './components/Projects.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Nav />
	<Header />
	<Projects />
  </React.StrictMode>
);