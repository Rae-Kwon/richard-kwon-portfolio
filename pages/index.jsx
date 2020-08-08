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
  
  const projectData = await querySnapshot
  .data()  
  .projects
    
  const data = projectData.map(project => project)

  return {
    props: {
      data
    }
  }
}

const Home = ({ data }) => {
  return (
    <>
      <header>
        {console.log(data)}
        <Navbar />
        <Hero />
        <Projects projectsData={data}/>
      </header>
    </>
  )
}

export default Home