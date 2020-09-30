import ProjectList from './ProjectList'
import projects from './styles.module.scss'

import { useCollection } from '@nandorojo/swr-firestore'

const Projects = () => {
    const { data, update, error } = useCollection('projects', { listen: true })
    
    if (error) return <p>Error!</p>
    if (!data) return <p>Loading...</p>
    return (
        <div>
            <h2 className={projects.title}>Projects</h2>
            {data.map((project, index) => {
                return <ProjectList key={index} project={project} />
            })}
        </div>
    )
}

export default Projects