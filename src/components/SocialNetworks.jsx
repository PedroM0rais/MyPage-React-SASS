import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

import React from 'react'

const socialNetworks = [

    {name: "linkedin", icon: <FaLinkedinIn />},
    {name: "github", icon: <FaGithub />},
    {name: "instagram", icon: <FaInstagram />},

]

const SocialNetworks = () => {
  return (
    <section id="social-networks">

        {socialNetworks.map((network) => (

            <a href="https://github.com/PedroM0rais" target='_blank' className='social-btn' id={network.name} key={network.name}>

                {network.icon}

            </a>

        ))}

    </section>
  )
}

export default SocialNetworks