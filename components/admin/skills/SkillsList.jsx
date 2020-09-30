import React from 'react'
import DeleteSkill from './DeleteSkill'
import Skill from './Skill'

const SkillsList = ({ skill }) => {
    return (
        <div>
            <Skill skill={skill} />
            <DeleteSkill skill={skill} />
        </div>
    )
}

export default SkillsList