import React from 'react';
import noticias from './noticias.json';
import './section.module.css'
import Tarjeta from './Cards'



const NoticiasList = () => {

    const titulo = "Granada";
    const filteredNoticias = noticias.filter(noticias => noticias.titulo === titulo);

    return (

        <article>

            {/* Asigno valores a las variables de la funcion tarjeta */}
            {filteredNoticias.map((noticias, index) => (
            <Tarjeta 
                // Titulo
                title={noticias.titulo}
                // Texto  
                text={noticias.texto}
                // Imagen 
                imgSrc={noticias.imagen}
            />
        ))}
        </article>
    )
}

export default NoticiasList
