import React from 'react'
import {useState} from 'react'

import Header from './components/Header'
import './App.css'
import backgroundImage from './assets/backgorund.jpg'

function App(){

   const [projects, setProjects] = useState([
      'Maritimus',
      'Super'
   ])

   function handleAddProject() {
      // projects.push(`Novo projeto ${Date.now()}`)
      setProjects([...projects, `Novo projeto ${Date.now()}`]);
      console.log(projects)
   }

   return (

      <>
         <Header title="Home" />

         <img width={300} src={backgroundImage} alt="Backgorund"/>

         <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
         </ul>

         <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
      </>
   )
}

export default App