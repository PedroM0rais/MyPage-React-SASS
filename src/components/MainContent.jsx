import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import '../styles/components/maincontest.sass'
import ProjectsContainer from './ProjectsContainer'

import React from 'react'

const MainContent = () => {
  return (
    
      <main id="main-content">

        <AboutContainer />
        <TechnologiesContainer />
        <ProjectsContainer />

      </main>

  )
}

export default MainContent