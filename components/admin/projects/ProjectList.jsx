import ProjectName from './ProjectName'
import ProjectId from './ProjectId'
import ProjectDescription from './ProjectDescription'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ project }) => {
    return (
        <div>
            <ProjectName project={project} />
            <ProjectId project={project} />
            <ProjectDescription project={project} />
            <ProjectSummary project={project} />
        </div>
    )
}

export default ProjectList