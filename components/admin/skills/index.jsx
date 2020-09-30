import React from 'react'
import { useCollection } from '@nandorojo/swr-firestore'
import SkillsList from './SkillsList'

const Skills = () => {
    const { data, update, error } = useCollection('skills', { listen: true })
    if (error) return <p>Error</p>
    if (!data) return <p>Loading...</p>
    return (
        <div>
            <h2>Skills</h2>
            {data.map((skill, index) => {
                return <SkillsList key={index} skill={skill} />
            })}
        </div>
    )
}

export default Skills