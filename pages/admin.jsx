import Link from 'next/link'
import 'firebase/firestore'
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore'
import { projectDatabase } from '../lib/firebase'

import ProjectForm from '../components/admin/projectsForm'
import SkillsForm from '../components/admin/skillsForm'
import Projects from '../components/admin/projects'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}

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
            </div>
        </FuegoProvider>
    )
}

// Replace with client side rendering
// export async function getStaticProps() {
//     const projects = []
//     const skills = []

//     const queryProjects = await projectDatabase
//         .collection("projects")
//         .get()

//     const querySkills = await projectDatabase
//         .collection("skills")
//         .get()

//     queryProjects.forEach(docs => {
//         projects.push({...docs.data(), id: docs.id})
//     })

//     querySkills.forEach(docs => {
//         skills.push({...docs.data(), id: docs.id})
//     })

//     return {
//         props: {
//             projects,
//             skills,
//         },
//         unstable_revalidate: 1,
//     }
// }

export default Admin