import React from 'react'
import styles from './contenido.module.css'
import BarraNav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Cartas from './Cartas'
import ControlledCarousel from './Carousel'
import SeleccionarHeroes from './Desplegable'
import NoticiasList from './Noticias'

function Contenido() {
  return (
    <>
      <Router>
        <BarraNav />
        <main>
          {/* ---------------------section------------------------------------------ */}
          <section>
            <Routes>
              <Route exact path="/" element={<Cartas />} />
              <Route path="/noticias" element={<Noticias />}>
                <Route path="/noticias/jefatura" element={<Jefatura />} />
                <Route path="/noticias/informatica" element={<Informatica />} />
              </Route>
              <Route exact path="/galeria" element={<ControlledCarousel />} />
              <Route path="/about" element={<About />} />
              <Route path="/defensa" element={<NoticiasList />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>


          {/* ---------------------aside------------------------------------------ */}
          <aside>
            <p>Seleccionar Heroes</p>
            <SeleccionarHeroes />
            <div >
              <iframe width="70%" height="60%" src="https://www.youtube.com/embed/HQIiYqOVTWo?si=e5jf8TedFOLDmpYR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="70%" height="60%" src="https://www.youtube.com/embed/wGxDfSWC4Ww?si=M8v6MB5VOe5Z156H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </aside>
        </main>
      </Router>
    </>
  )
}



function About() {
  return <h1>Parametro introducido 👉 contacto</h1>;
}


// Contenido de Noticias
function Noticias() {
  return <div>
    <h1>NOTICIAS DE HUÉRCAL OVERA</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <hr />
    <Outlet />
    </div>
}

function Jefatura() {
  return <div><h2>NOTICIAS DE JEFATURA</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt nam dolore cum quibusdam! Nemo eum quae exercitationem culpa repudiandae veniam nihil, accusamus, 
    laboriosam, ullam nostrum obcaecati velit porro quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat eius ut? Enim reprehenderit quis aspernatur error ipsum repellat temporibus consequuntur, a soluta cum unde illum itaque ipsa cumque. Molestias.</p>
  </div>;
}
function Informatica() {
  return <div><h2>NOTICIAS DE INFORMÁTICA</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt nam dolore cum quibusdam! Nemo eum quae exercitationem culpa repudiandae veniam nihil, accusamus, 
    laboriosam, ullam nostrum obcaecati velit porro quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat eius ut? Enim reprehenderit quis aspernatur error ipsum repellat temporibus consequuntur, a soluta cum unde illum itaque ipsa cumque. Molestias.</p>
  </div>;
}








function Producto() {
  //Lectura del parámetro de la URL
  const params = useParams();

  if (params.numero < 1 || params.numero > 100) {
    return <h2>ESE PRODUCTO NO EXISTE</h2>
  }
  return <h2>PRODUCTO ELEGIDO: {params.numero}</h2>;
}
function NotFound() {
  return <h2>ESTA RUTA NO ES VÁLIDA</h2>;
}




export default Contenido;