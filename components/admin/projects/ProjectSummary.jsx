const ProjectSummary = ({ project }) => {
    return (
        <div>
            <h3>Project Summary:</h3>
            <p>{project.summary}</p>
            <button>Edit</button>
        </div>
    )
}

export default ProjectSummary