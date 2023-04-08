import NavBar from "./NavBar";
import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header({ title, index }) {
	return (
		<header className="common-header">
			<h1 className="common-heading"><Link to="/" className="header-home-link">mv</Link>{title ? "/" : ""}<p>{title}</p></h1>
			<NavBar activeIndex={index} />
		</header>
	);
}
