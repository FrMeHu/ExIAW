"use client"; // Asegura que este componente se renderiza en el lado del cliente

import { useEffect, useState } from "react"; // Importa los hooks useEffect y useState de React
import { fetchData } from "@/componentes/funciones"; // Importa la función fetchData
import Tarjeta from "@/componentes/Tarjeta"; // Importa el componente Tarjeta

// Componente principal que se exporta por defecto
export default function RandomPokemonGen1Page() {
  // Define un estado local llamado 'pokemons' que se inicializa como un array vacío
  const [pokemons, setPokemons] = useState([]);

  // useEffect es una función que se ejecuta cuando el componente se monta
  useEffect(() => {
    // Define una función asíncrona para obtener datos de Pokémon de la generación 1
    const getRandomPokemonsGen1 = async () => {
      try {
        // Obtén la lista de Pokémon de la generación 1 desde la API
        const response = await fetch('https://pokeapi.co/api/v2/generation/1/');
        const data = await response.json();
        const pokemonSpecies = data.pokemon_species; // Lista de especies de Pokémon

        // Crea un array de promesas para obtener 10 Pokémon aleatorios
        const pokemonPromises = [];
        for (let i = 0; i < 10; i++) {
          // Selecciona un índice aleatorio de la lista de Pokémon
          const randomIndex = Math.floor(Math.random() * pokemonSpecies.length);
          const randomPokemonUrl = pokemonSpecies[randomIndex].url; // URL del Pokémon aleatorio
          const urlParts = randomPokemonUrl.split('/');
          const randomId = urlParts[urlParts.length - 2]; // Extrae el ID del Pokémon de la URL

          // Añade una promesa al array para obtener los datos del Pokémon con el ID aleatorio
          pokemonPromises.push(fetchData({ id: randomId }));
        }

        // Espera a que todas las promesas se resuelvan y obtiene los datos de los Pokémon
        const pokemonsData = await Promise.all(pokemonPromises);
        // Actualiza el estado con los datos de los Pokémon
        setPokemons(pokemonsData);
      } catch (error) {
        // En caso de error, muestra un mensaje en la consola
        console.error("Error fetching data: ", error);
      }
    };

    // Llama a la función para obtener los Pokémon al montar el componente
    getRandomPokemonsGen1();
  }, []);

  // Si la lista de Pokémon está vacía, muestra un mensaje de carga
  if (pokemons.length === 0) {
    return <div>      <img className="imagen" src="/Loading_2.gif"></img>
</div>;
  }

  // Renderiza una sección con las tarjetas de los Pokémon obtenidos
  return (
    <>
      <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemons.map((pokemon, index) => (
          <Tarjeta 
            key={index} // Clave única para cada componente Tarjeta
            nombre={pokemon.nombre} // Nombre del Pokémon
            id={pokemon.numero} // ID del Pokémon
            imgSrc={pokemon.img} // URL de la imagen del Pokémon
            pokert="Pokemongen1" // Propiedad adicional (podrías usarla como clase CSS o para otro propósito)
          />
        ))}
      </section>
    </>
  );
}
