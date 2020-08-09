const ProjectCard = ({ project }) => {
    return (
        <div className="project__card">
            <h2 className="project__header">{project.name}</h2>
            <p className="project__summary">{project.summary}</p>
        </div>
    )
}

export default ProjectCard