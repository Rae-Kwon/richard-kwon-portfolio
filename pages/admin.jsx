import Link from 'next/link'
import ProjectForm from '../components/admin/projectsForm'
import SkillsForm from '../components/admin/skillsForm'

const Admin = () => {
    return (
        <div>
            <Link href="/">
                <a>Go back</a>
            </Link>
            <h1>This is the admin page</h1>
            <ProjectForm />
            <SkillsForm />
        </div>
    )
}

export async function getStaticProps() {
    const projects = []
    const skills = []

    const queryProjects = await projectDatabase
        .collection("projects")
        .get()

    const querySkills = await projectDatabase
        .collection("skills")
        .get()

    queryProjects.forEach(docs => {
        projects.push({...docs.data(), id: docs.id})
    })

    querySkills.forEach(docs => {
        skills.push({...docs.data(), id: docs.id})
    })

    return {
        props: {
            projects,
            skills,
        },
        unstable_revalidate: 1,
    }
}

export default Admin