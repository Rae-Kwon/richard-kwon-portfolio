import { useState } from 'react'

import { projectDatabase } from '../../../lib/firebase'

const SkillsForm = () => {
    const [skillsData, setSkillsData] = useState({
        name: ""
    })
    
    const inputHandler = (e) => {
        const {name, value} = e.target
        setSkillsData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await projectDatabase.collection('skills').add(skillsData)

        setSkillsData({
            name: ""
        })

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Name:
                <input type="text" name="name" id="name" value={skillsData.name} onChange={inputHandler} />
            </label>
            <input type="submit" value="Send skill to firebase"/>
        </form>
    )
}

export default SkillsForm