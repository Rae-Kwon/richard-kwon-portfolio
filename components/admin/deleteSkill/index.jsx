import { useState } from 'react'
import { projectDatabase } from '../../../lib/firebase'

const DeleteSkill = ({ skill }) => {
    const [checkDelete, setCheckDelete] = useState(false)

    const checkDeleteHandler = () => {
        setCheckDelete(!checkDelete)
    }

    const deleteSkillHandler = async () => {
        await projectDatabase.collection("skills").doc(skill.id).delete()
    }
    
    return (
        <div>
            {
                checkDelete ?
                <div>
                    <p>Are you sure you want to delete {skill.name}?</p>
                    <button onClick={deleteSkillHandler}>Yes</button>
                    <button onClick={checkDeleteHandler}>No</button>
                </div> :
                <button onClick={checkDeleteHandler}>Delete</button>
            }
        </div>
    )
}

export default DeleteSkill