import Avatar from '../img/MinhaFoto.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import '../styles/components/sidebar.sass'

import React from 'react'

const Sidebar = () => {
  return (
    
    <aside id='sidebar'>

      <img src={Avatar} alt="Pedro Henrique Morais"/>

      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />

      <a href="#" className="btn">
        Download currículo
      </a>

    </aside>

  )
}

export default Sidebar