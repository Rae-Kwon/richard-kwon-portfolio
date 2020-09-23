import { useState } from "react"
import UpdateProject from "../updateProject"

const Project = ({ project, edit, setEdit, editHandler }) => {
    return (
        <div>
            <h3>{project.name}</h3>
            <p>{project.id}</p>
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
                <>
                    <p>{project.summary}</p>
                    <p>{project.description}</p>
                </>
            )}
        </div>
    )
}

export default Project
