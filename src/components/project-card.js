import React from "react";
import { Link } from "gatsby";

const ProjectCard = ({url, title, p, classname}) => {
    return (
        <article className="project-card" data-test="project-card">
            <p>{p}</p>
            <Link to={url} data-test="project-url">
                <img src={title} className={classname} />
            </Link>
        </article>
    )
}

export default ProjectCard;