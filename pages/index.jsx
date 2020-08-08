import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Projects from '../components/projects'
import Skills from '../components/skills'

import { loadDB } from '../lib/firebase'


export async function getStaticProps() {
  const firebaseDb = await loadDB()
  const db = firebaseDb.firestore()
  const queryProjects = await db
    .collection('portfolio')
    .doc('projects')
    .get()

  const querySkills = await db
    .collection('portfolio')
    .doc('skills')
    .get()
  
  const projectData = await queryProjects
  .data()  
  .projects

  const skillsData = await querySkills
    .data()
    .skills
    
  const projects = projectData.map(project => project)
  const skills = skillsData.map(skills => skills)

  return {
    props: {
      projects,
      skills
    }
  }
}

const Home = ({ projects, skills }) => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <Projects projectsData={projects}/>
        <Skills skillsData={skills} />
      </header>
    </>
  )
}

export default Home