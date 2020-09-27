import Link from 'next/link'
import 'firebase/firestore'
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore'
import { config as firebaseConfig } from '../lib/firebase'

import ProjectForm from '../components/admin/projectsForm'
import SkillsForm from '../components/admin/skillsForm'
import Projects from '../components/admin/projects'
import Skills from '../components/admin/skills'

const fuego = new Fuego(firebaseConfig)

const Admin = () => {
    return (
        <FuegoProvider fuego={fuego}>
            <div>
                <Link href="/">
                    <a>Go back</a>
                </Link>
                <h1>This is the admin page</h1>
                <ProjectForm />
                <SkillsForm />
                <Projects />
                <Skills />
            </div>
        </FuegoProvider>
    )
}

export default Admin