import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;