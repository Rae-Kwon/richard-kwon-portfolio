import ProjectList from './ProjectList'

const Projects = ({ projectsData }) => {
    return (
        <div>
            {projectsData.map((project, index) => {
                return <ProjectList key={index} project={project} />
            })}
        </div>
    )
}

export default Projects