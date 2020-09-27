import { useState } from "react"

import { projectDatabase } from "../../../lib/firebase"

const ProjectForm = () => {
    const [projectData, setProjectData] = useState({
        name: "",
        summary: "",
        description: ""
    })

    const inputHandler = (e) => {
        const { name, value } = e.target
        setProjectData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await projectDatabase.collection('projects').add(projectData)
        setProjectData({
            name: "",
            summary: "",
            description: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
                <input type="text" name="name" id="name" value={projectData.name} onChange={inputHandler} />
            </label>

            <label htmlFor="summary">
                Summary:
                <input type="text" name="summary" id="summary" value={projectData.summary} onChange={inputHandler} />
            </label>

            <label htmlFor="description">
                Description:
                <input type="text" name="description" id="description" value={projectData.description} onChange={inputHandler} />
            </label>

            <input type="submit" value="Send to Firebase"/>
        </form>
    )
}

export default ProjectForm
