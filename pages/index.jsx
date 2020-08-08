import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Projects from '../components/projects'

import { loadDB } from '../lib/firebase'


export async function getStaticProps() {
  const firebaseDb = await loadDB()
  const db = firebaseDb.firestore()
  const querySnapshot = await db
    .collection('portfolio')
    .doc('projects')
    .get()

  const querySkills = await db
    .collection('portfolio')
    .doc('skills')
    .get()
  
  const projectData = await querySnapshot
  .data()  
  .projects

  const skillsData = await querySkills
    .data()
    .skills
    
  const data = projectData.map(project => project)
  const skills = skillsData.map(skills => skills)

  return {
    props: {
      data,
      skills
    }
  }
}

const Home = ({ data, skills }) => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <Projects projectsData={data}/>
      </header>
    </>
  )
}

export default Home