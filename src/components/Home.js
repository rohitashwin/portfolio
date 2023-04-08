import Header from "./Header";
import "../styles/Home.css";

function Home() {
	return (
		<>
			<Header title="" index={0} />
			<div className="common-container-home">
				<div className="home-content">
					<h2>Hello, I'm Mr. Vallus</h2>
					<br />
					<div>
						I'm a Computer Engineering student at{" "}
						<p className="university-name-0">
							University of California
						</p>
						<p className="university-name-1">, San Diego</p>, I work
						on minimalist websites, AI, and systems programming.
					</div>
					<br />
					<div>
						I have worked on various web development projects for
						university work in the past. If you want to know more
						about me see what I've done, visit any of the links in
						my contacts page. If you are a recruiter, check out my{" "}
						<a href="/assets/Ashwin Rohit Alagiri Rajan - Resume.pdf">
							resume.
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
