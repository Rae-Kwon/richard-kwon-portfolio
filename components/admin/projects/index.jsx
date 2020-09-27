import ProjectList from './ProjectList'
import { useCollection } from '@nandorojo/swr-firestore'

const Projects = () => {
    const { data, update, error } = useCollection('projects', { listen: true })
    
    if (error) return <p>Error!</p>
    if (!data) return <p>Loading...</p>
    return (
        <div>
            {data.map((project, index) => {
                return <ProjectList key={index} project={project} />
            })}
        </div>
    )
}

export default Projects