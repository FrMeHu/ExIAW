import React from 'react'
import './section.module.css'
import { Card } from '@mui/material'
import Tarjeta from './Cards'

function Cartas() {
  return (
    <article>

      {/* Asigno valores a las variables de la funcion tarjeta */}
      <Tarjeta 
      // Titulo
      title="La Alhambra"
      // Texto  
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores deserunt dolorem rem, fuga"
      // Imagen 
      imgSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f9/e4/c5/alhambra-granada.jpg?w=900&h=500&s=1" 
      />



      <Tarjeta title="Castillo de Gibralfaro"  
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores deserunt dolorem rem, fuga." 
      imgSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/69/c2/5b/caption.jpg?w=900&h=500&s=1"  
      />

      <Tarjeta title="Castillo de Almodovar"  
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores deserunt dolorem rem, fuga" 
      imgSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a9/8e/55/castillo-de-almodovar.jpg?w=800&h=500&s=1"  
      />
      
    </article>
  )
}

export default Cartas

