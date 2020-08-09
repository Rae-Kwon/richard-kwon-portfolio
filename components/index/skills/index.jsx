import SkillItem from "./SkillItem"

const Skills = ({ skillsData }) => {
    return (
        <section className="skills">
            {skillsData.map((skill, index) => {
                return <SkillItem key={index} skill={skill} />
            })}
        </section>
    )
}

export default Skills