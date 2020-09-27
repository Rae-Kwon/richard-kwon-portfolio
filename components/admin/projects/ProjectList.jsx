import { useState } from "react"
import Project from "./Project"
import DeleteProject from '../deleteProject'

const ProjectList = ({ project }) => {
    const [edit, setEdit] = useState(false)

    const editHandler = () => {
        setEdit(!edit)
    }

    return (
        <div>
            <Project 
                project={project}
                edit={edit}
                setEdit={setEdit}
                editHandler={editHandler}
            />
            {edit ? (
                <button onClick={editHandler}>Back</button>
            ) : (
                <>
                    <button onClick={editHandler}>Edit</button>
                    <DeleteProject project={project} />
                </>
            )}
        </div>
    )
}

export default ProjectList
