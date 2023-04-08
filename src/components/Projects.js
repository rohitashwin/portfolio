import Header from "./Header";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import "../styles/Projects.css";

function Projects() {
	// Projects JSON located in /assets/projectList.json
	const [projects, setProjects] = useState();
	fetch("/assets/projectList.json")
		.then((response) => response.json())
		.then((data) => setProjects(data));
	return (
		<>
			<Header title="projects" index={1} />
			<div className="common-container">
				<p className="projects-intro">
					Here are some of my projects (click the images for more info). This is not an exhaustive
					list, but you can find more on my{" "}
					<a
						href="https://github.com/rohitashwin"
						target="_blank"
						rel="noreferrer"
						className="projects-github-link"
					>
						GitHub.
					</a>
				</p>
				<div className="projects-content">
					{
						projects &&
							projects.map((project) => (
								<ProjectCard
									title={project.title}
									description={project.description}
									link={project.link}
									imageLink={project.imageLink}
								/>
							))
					}
				</div>
			</div>
		</>
	);
}

export default Projects;
