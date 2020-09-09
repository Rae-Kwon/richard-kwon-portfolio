import { useState } from 'react'
import { ProjectDatabase, projectDatabase } from '../../../lib/firebase'


const UpdateProject = ({ edit, setEdit, editHandler, projectId }) => {
    const [projectName, setProjectName] = useState("")

    const editNameHandler = (e) => {
        const { name, value } = e.target
        setProjectName({[name]: value})
        console.log(projectName)
    }

    const submitEditHandler = async (e) => {
        e.preventDefault()
        console.log(projectName.name)
        await projectDatabase.collection('projects').doc(projectId).update({name: projectName.name})
        setProjectName({name: ""})
        setEdit(!edit)
    }

    if (edit) {
        return (
            <div>
                <form onSubmit={submitEditHandler}>
                    <label htmlFor="edit-project">
                        <input name="name" type="text" onChange={editNameHandler} />
                        <input type="submit" value="Edit this" />
                    </label>
                </form>
                <button onClick={editHandler}>Back</button>
            </div>
        )
    } else {
        return <button onClick={editHandler}></button>
    }
}

export default UpdateProject
