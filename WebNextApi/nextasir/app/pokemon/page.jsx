"use client"; // Asegura que este componente se renderiza en el lado del cliente

import { useEffect, useState } from "react";
import { fetchData } from "@/componentes/funciones";
import Tarjeta from "@/componentes/Tarjeta"; // Asegúrate de ajustar la ruta según sea necesario
import Image from "next/image";


// Define y exporta el componente RandomPokemonPage como predeterminado
export default function RandomPokemonPage() {

  // Declara una variable de estado llamada pokemon, inicializada en null
  const [pokemon, setPokemon] = useState(null);

  // Utiliza useEffect para realizar un efecto secundario cuando el componente se monta
  useEffect(() => {
    // Genera un número aleatorio entre 1 y 1000
    const randomId = Math.floor(Math.random() * 1000) + 1;

    // Define una función asíncrona para obtener los datos del Pokémon
    async function getPokemon() {
      try {

        // Llama a fetchData con el ID aleatorio y obtiene los datos del Pokémon
        let pokemonData = await fetchData({ id: randomId });

        // Actualiza la variable de estado pokemon con los datos obtenidos
        setPokemon(pokemonData);
      } catch (error) {
        // Muestra un error en la consola si ocurre algún problema al obtener los datos
        console.error("Error fetching data: ", error);
      }
    }

    // Llama a la función getPokemon
    getPokemon();
  }, []);// El array vacío significa que este efecto solo se ejecuta una vez al montar el componente

   // Si no hay datos del Pokémon, muestra un mensaje de carga
  if (!pokemon) {
    return <div>
      <img className="imagen" src="/Loading_2.gif"></img>
    </div>;
  }

  return (
    <>
      <Tarjeta 
        nombre={pokemon.nombre}
        id={pokemon.numero}
        imgSrc={pokemon.img}
        pokert="pokemon"
      />
    </>
  );
}
