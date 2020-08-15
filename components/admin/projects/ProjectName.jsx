import { useState } from "react"
import UpdateProject from "../updateProject"

const ProjectName = ({ project }) => {
    const [edit, setEdit] = useState(false)

    const editHandler = () => {
        setEdit(!edit)
    }

    return (
        <div>
            <h3>Project Name:</h3>
            <p>{project.name}</p>
            {edit ? (
                <UpdateProject edit={edit} editHandler={editHandler} />
            ) : (
                <button onClick={editHandler}>Edit</button>
            )}
        </div>
    )
}

export default ProjectName
