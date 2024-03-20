import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact
} from "react-icons/di"
import '../styles/components/technologiescontainer.sass'

import React from 'react'

const technologies = [

  {icon: <DiHtml5 />, name:"HTML", id: "html"},
  {icon: <DiCss3 />, name:"CSS", id: "css"},
  {icon: <DiJsBadge />, name:"Javascript", id: "js"},
  {icon:<DiReact />, name:"React", id: "react"},

]

const TechnologiesContainer = () => {
  return (
    
    <section className="technologies-container">

      <h2>Tecnologias</h2>

      <div className="technologies-grid">

        {technologies.map((tech) => (

          <div className="technology-card" id={tech.id} key={tech.id}>

            {tech.icon}

            <div className="technology-info">

              <h3>{tech.name}</h3>
              <p>
                Essas são as Linguagens que eu tenho um melhor domínio!
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>


  )
}

export default TechnologiesContainer