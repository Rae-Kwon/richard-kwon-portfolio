import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Projects from '../components/projects'
import Skills from '../components/index/skills'

import { projectDatabase } from '../lib/firebase'


export async function getStaticProps() {
  const queryProjects = await projectDatabase
    .collection('portfolio')
    .doc('projects')
    .get()

  const querySkills = await projectDatabase
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