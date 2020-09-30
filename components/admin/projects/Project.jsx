import projects from './styles.module.scss'

import UpdateProject from "./UpdateProject"

const Project = ({
    project,
    edit,
    setEdit,
    editHandler,
}) => {
    return (
        <>
            {edit ? (
                <UpdateProject
                    project={project}
                    edit={edit}
                    setEdit={setEdit}
                    editHandler={editHandler}
                    projectId={project.id}
                    section={"name"}
                />
            ) : (
                <div className={projects.content}>
                    <h3 className={projects.name}>{project.name}</h3>
                    <h4>Summary:</h4>
                    <p className={projects.summary}>{project.summary}</p>
                    <h4>Description:</h4>
                    <p className={projects.description}>{project.description}</p>
                </div>
            )}
        </>
    )
}

export default Project
