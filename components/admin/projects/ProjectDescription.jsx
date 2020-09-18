import { useState } from "react"
import UpdateProject from "../updateProject"

const ProjectDescription = ({ project, edit, setEdit, editHandler }) => {
    // const [edit, setEdit] = useState(false)

    // const editHandler = () => {
    //     setEdit(!edit)
    // }

    return (
        <div>
            <h3>Project Description:</h3>
            {edit ? (
                <UpdateProject
                    edit={edit}
                    setEdit={setEdit}
                    editHandler={editHandler}
                    projectId={project.id}
                    section={"description"}
                />
            ) : (
                <p>{project.description}</p>
            )}
        </div>
    )
}

export default ProjectDescription
