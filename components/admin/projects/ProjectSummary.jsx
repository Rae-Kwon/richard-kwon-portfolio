import UpdateProject from '../updateProject'

const ProjectSummary = ({ project, edit, setEdit, editHandler }) => {
    return (
        <div>
            <h3>Project Summary:</h3>
            {edit ? (
                <UpdateProject
                    edit={edit}
                    setEdit={setEdit}
                    editHandler={editHandler}
                    projectId={project.id}
                    section={"summary"}
                />
            ) : (
                <p>{project.summary}</p>
            )}
        </div>
    )
}

export default ProjectSummary