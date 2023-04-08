import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar({ activeIndex }) {
	return (
		<nav className="common-nav">
			<Link to="/" className={`nav-link ${activeIndex === 0 ? 'active' : ''}`}>Home</Link>
			<Link to="/projects" className={`nav-link ${activeIndex === 1 ? 'active' : ''}`}>Projects</Link>
			<Link to="/contact" className={`nav-link ${activeIndex === 2 ? 'active' : ''}`}>Contact</Link>
		</nav>
	);
}