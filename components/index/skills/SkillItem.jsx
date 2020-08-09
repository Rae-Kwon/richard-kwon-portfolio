const SkillItem = ({ skill }) => {
    return (
        <div className="skill__item">
            <h3 className="skill__name">{skill.name}</h3>
        </div>
    )
}

export default SkillItem