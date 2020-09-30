import { useState } from "react"
import projects from './styles.module.scss'

import Project from "./Project"
import DeleteProject from './DeleteProject'

const ProjectList = ({ project }) => {
    const [edit, setEdit] = useState(false)

    const editHandler = () => {
        setEdit(!edit)
    }

    return (
        <div className={projects.card}>
            <Project 
                project={project}
                edit={edit}
                setEdit={setEdit}
                editHandler={editHandler}
            />
            {!edit && (
                // <button onClick={editHandler}>Back</button>
                <div className={projects.buttons}>
                    <button className={projects.button} onClick={editHandler}>Edit</button>
                    <DeleteProject project={project} />
                </div>
            )
                // <div className={projects.buttons}>
                //     <button className={projects.button} onClick={editHandler}>Edit</button>
                //     <DeleteProject project={project} />
                // </div>
            }
        </div>
    )
}

export default ProjectList
