import { useState } from "react"
import UpdateProject from "../updateProject"

const ProjectName = ({ project, edit, setEdit, editHandler }) => {

    return (
        <div>
            <h3>Project Name:</h3>
            {edit ? (
                <UpdateProject
                    edit={edit}
                    setEdit={setEdit}
                    editHandler={editHandler}
                    projectId={project.id}
                    section={"name"}
                />
            ) : (
                <p>{project.name}</p>
            )}
        </div>
    )
}

export default ProjectName
