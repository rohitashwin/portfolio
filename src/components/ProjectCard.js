import "../styles/ProjectCard.css";

export default function ProjectCard({ title, description, link, imageLink }) {
	return (
		<>
			<div className="project-container">
				<div className="project-description">
					<h2 className="project-title">{title}</h2>
					<p className="project-description-text">{description}</p>
				</div>
				{
					// make the image clickable to the project link
				}
			 	<div className="project-image-container">
					<a href={link} target="_blank" rel="noreferrer" className="project-link">
						{imageLink && <img src={imageLink} alt="project" className="project-image" />}
					</a>
				</div>
			</div>
		</>
	);
}
