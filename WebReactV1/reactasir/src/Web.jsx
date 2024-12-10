import React from 'react'
import Header from './Header'
import Contenido from './Contenido'
import Footer from './Footer'

function Web() {
  return (
    <>
    <Header/>
    <Contenido/>
    <Footer RRSS={[{nombre:"Facebook",url:"https://www.facebook.com/pages/IES%20Cura%20Valera/115645025115521/"},{nombre:"Instagram",url:"https://www.instagram.com/ies_curavalera/"},{nombre:"Linkedin",url:"https://es.linkedin.com/"},{nombre:"Google",url:"https://www.google.es/"}]}/>
    </>
  )
}

export default Web