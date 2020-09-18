import { useState } from "react"
import ProjectName from "./ProjectName"
import ProjectId from "./ProjectId"
import ProjectDescription from "./ProjectDescription"
import ProjectSummary from "./ProjectSummary"
import UpdateProject from "../updateProject"

const ProjectList = ({ project }) => {
    const [edit, setEdit] = useState(false)

    const editHandler = () => {
        setEdit(!edit)
    }

    return (
        <div>
            <ProjectName
                project={project}
                edit={edit}
                setEdit={setEdit}
                editHandler={editHandler}
            />
            <ProjectId
                project={project}
                edit={edit}
                setEdit={setEdit}
                editHandler={editHandler}
            />
            <ProjectDescription
                project={project}
                edit={edit}
                setEdit={setEdit}
                editHandler={editHandler}
            />
            <ProjectSummary
                project={project}
                edit={edit}
                setEdit={setEdit}
                editHandler={editHandler}
            />
            {edit ? (
                <>
                    <UpdateProject
                        edit={edit}
                        setEdit={setEdit}
                        editHandler={editHandler}
                        projectId={project.id}
                    />
                    <button onClick={editHandler}>Back</button>
                </>
            ) : (
                <button onClick={editHandler}>Edit</button>
            )}
        </div>
    )
}

export default ProjectList
