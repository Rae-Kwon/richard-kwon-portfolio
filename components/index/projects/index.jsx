import ProjectCard from './ProjectCard'

const Projects = ({ projectsData }) => {
    return (
        <section className="project">
            {projectsData.map((project, index) => {
                return <ProjectCard key={index} project={project}/>
            })}
        </section>
    )
}

export default Projects