import { useState } from "react"
import { projectDatabase } from "../../../lib/firebase"

const UpdateProject = ({ project, edit, setEdit, editHandler, projectId, section }) => {
    const [projectData, setProjectData] = useState({
        name: project.name,
        summary: project.summary,
        description: project.description
    })

    const editNameHandler = (e) => {
        const { name, value } = e.target
        setProjectData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const submitEditHandler = async (e) => {
        e.preventDefault()
        await projectDatabase.collection("projects").doc(projectId).update({
            name: projectData.name,
            summary: projectData.summary,
            description: projectData.description
        })
        setProjectData({
            name: "",
            summary: "",
            description: ""
        })
        setEdit(!edit)
    }

    if (edit) {
        return (
            <div>
                <form onSubmit={submitEditHandler}>
                    <label htmlFor="name">
                        Project Name:
                        <input
                            name="name"
                            type="text"
                            onChange={editNameHandler}
                        />
                    </label>

                    <label htmlFor="summary">
                        Project Summary:
                        <input
                            name="summary"
                            type="text"
                            onChange={editNameHandler}
                        />
                    </label>

                    <label htmlFor="description">
                        Project Description:
                        <input
                            name="description"
                            type="text"
                            onChange={editNameHandler}
                        />
                    </label>
                    <input type="submit" value="Edit this" />
                </form>
            </div>
        )
    } else {
        return <button onClick={editHandler}></button>
    }
}

export default UpdateProject
