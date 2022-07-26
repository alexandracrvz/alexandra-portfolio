import './App.css'
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/contact" element={<Contact/>} />
			</Routes>
		</div>
	)
}

export default App