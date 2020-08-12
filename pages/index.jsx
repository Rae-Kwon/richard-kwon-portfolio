import Head from "next/head"
import Link from "next/link"
import Navbar from "../components/index/navbar"
import Hero from "../components/index/hero"
import Projects from "../components/index/projects"
import Skills from "../components/index/skills"

import { projectDatabase } from "../lib/firebase"

const Home = ({ projects, skills }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <Projects projectsData={projects} />
                <Skills skillsData={skills} />
            </main>
            <footer>
                <Link href="/admin">
                    <a>Go to admin</a>
                </Link>
            </footer>
        </>
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
        projects.push(docs.data())
    })

    querySkills.forEach(docs => {
        skills.push(docs.data())
    })

    return {
        props: {
            projects,
            skills,
        },
        unstable_revalidate: 1,
    }
}

export default Home