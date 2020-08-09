const ProjectForm = () => {
    return (
        <form>
            <label htmlFor="project-name">
                Name:
                <input type="text" name="project-name" id="project-name"/>
            </label>
            <label htmlFor="project-summary">
                Summary:
                <input type="text" name="project-summary" id="project-summary"/>
            </label>
            <label htmlFor="project-description">
                Description:
                <input type="text" name="project-description" id="project-description"/>
            </label>
        </form>
    )
}

export default ProjectForm