import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import '../styles/components/informationcontainer.sass'

import React from 'react'

const InformationContainer = () => {
  return (
    
    <section id="information">

        <div className="info-card">

            <AiFillPhone id='phone-icon' />

            <div>

                <h3>Telefone</h3>
                <p>(83) 99602-2317</p>

            </div>

        </div>
        <div className="info-card">

            <AiOutlineMail id='email-icon' />

            <div>

                <h3>E-mail</h3>
                <p>pedrohmorais05@gmail.com</p>

            </div>

        </div>
        <div className="info-card">

            <AiFillEnvironment id='pin-icon' />

            <div>

                <h3>Localização</h3>
                <p>João Pessoa / PB</p>

            </div>

        </div>

    </section>

  )
}

export default InformationContainer