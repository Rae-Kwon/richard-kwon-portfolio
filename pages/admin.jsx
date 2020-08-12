import Link from 'next/link'
import ProjectForm from '../components/admin/projectsForm'

const Admin = () => {
    return (
        <div>
            <Link href="/">
                <a>Go back</a>
            </Link>
            <h1>This is the admin page</h1>
            <ProjectForm />
        </div>
    )
}

export default Admin