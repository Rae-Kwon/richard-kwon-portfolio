import { useState } from 'react'
import { projectDatabase } from '../../../lib/firebase'

const DeleteProject = ({ project }) => {
    const [checkDelete, setCheckDelete] = useState(false)

    const checkDeleteHandler = () => {
        setCheckDelete(!checkDelete)
    }

    const deleteProjectHandler = async () => {
        console.log(project.id)
        await projectDatabase.collection("projects").doc(project.id).delete()
    }
    
    return (
        <>
            {
                checkDelete ?
                <div>
                    <p>Are you sure you want to delete {project.name}?</p>
                    <button onClick={deleteProjectHandler}>Yes</button>
                    <button onClick={checkDeleteHandler}>No</button>
                </div> :
                <button onClick={checkDeleteHandler}>Delete</button>
            }
        </>
    )
}

export default DeleteProject