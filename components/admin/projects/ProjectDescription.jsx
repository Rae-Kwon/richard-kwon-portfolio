const ProjectDescription = ({ project }) => {
    return (
        <div>
            <h3>Project Description:</h3>
            <p>{project.description}</p>
            <button>Edit</button>
        </div>
    )
}

export default ProjectDescription