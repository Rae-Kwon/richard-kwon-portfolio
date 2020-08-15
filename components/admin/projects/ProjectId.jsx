const ProjectId = ({ project }) => {
    return (
        <div>
            <h3>Project ID:</h3>
            <p>{project.id}</p>
            <button>Edit</button>
        </div>
    )
}

export default ProjectId