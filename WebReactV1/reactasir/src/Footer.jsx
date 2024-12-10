import React from 'react'
import './footer.module.css'
/* Iconos MaterialUI */
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Define el componente Footer, que recibe una propiedad 'RRSS' (una lista de redes sociales).
function Footer({RRSS}) {
  return (
    <footer>
        {
            // Itera sobre cada objeto 'red' en la lista 'RRSS'.
            RRSS.map((red, index) => {

              // Si 'red.nombre' es "Facebook", renderiza un enlace con el icono de Facebook.
              if (red.nombre === "Facebook") {
                return <a key={index} href={red.url} >  <FacebookIcon sx={{ fontSize: 40, color: "blue" }} />   {red.nombre}</a>
              }
              else if (red.nombre === "Instagram") {
                return <a key={index} href={red.url} >  <InstagramIcon sx={{ fontSize: 40, color: "black" }} />  {red.nombre}</a>
              }
              else if (red.nombre === "Linkedin") {
                return <a key={index} href={red.url} >  <LinkedInIcon sx={{ fontSize: 40, color: "blue" }} />  {red.nombre}</a>
              }
              // Para cualquier otro nombre de red social, renderiza un enlace con el icono de Google.
              else {
                return <a key={index} href={red.url} >  <GoogleIcon sx={{ fontSize: 40, color: "black" }} />  {red.nombre}</a>
              }
            })            
        }

        {/*Enlace del instituto */}
        <a href="https://iescuravalera.es" > <img src="/logo.png" width="50" alt="logoIES"/> IES Cura Valera </a>
    </footer>
  )
}

export default Footer