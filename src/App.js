import './App.css';
import Navigation from './Navigation.js';
import Intro from './Intro.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
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
