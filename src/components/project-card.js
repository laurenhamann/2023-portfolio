import React from "react";
import { Link } from "gatsby";

const ProjectCard = ({url, title, p}) => {
    return (
        <article className="project-card" data-test="project-card">
            <p>{p}</p>
            <Link to={url} data-test="project-url">
                <h1 id="project-title">{title}</h1>
            </Link>
        </article>
    )
}

export default ProjectCard;