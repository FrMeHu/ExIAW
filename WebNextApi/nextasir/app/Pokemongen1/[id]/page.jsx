// Importamos las funciones y componentes necesarios
import { fetchData } from "@/componentes/funciones";
import { notFound } from "next/navigation";
import ModalComponent from "@/componentes/Modal"; // Ajusta la ruta si es necesario

// Definimos la función asíncrona para la página
export default async function Page({ params }) {

  // Extraemos el id de los parámetros de la URL
  const { id } = await params;

  // Verificamos si el id es válido (debe estar entre 1 y 1000)
  if (id <= 0 || id > 1000) {
    return notFound(); // Si el id no es válido, retornamos una página de "no encontrado"
  }

  let pokemon = null;
  try {
    // Intentamos obtener los datos del Pokémon usando la función fetchData
    pokemon = await fetchData({ id });
  } catch (error) {
    // Si ocurre un error durante la obtención de datos, lo mostramos en la consola
    console.error("Error fetching data: ", error);
    return notFound(); // Retornamos una página de "no encontrado"
  }

  // Definimos las variables para el modal
  const modalTitle = `Número: ${pokemon.numero} - ${pokemon.nombre}`; // Título del modal
  const modalBodyContent = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={pokemon.img} alt={pokemon.nombre} /> {/* Imagen del Pokémon */}
      <h4>HP:{pokemon.hp} - Ataque:{pokemon.ataque} - Defensa:{pokemon.defensa}</h4> {/* Estadísticas del Pokémon */}
    </div>
  );
  const modalSecondaryButtonText = "Cerrar"; // Texto del botón secundario

  return (
    <>
      {/* Renderizamos el componente ModalComponent con las propiedades definidas */}
      <ModalComponent 
        title={modalTitle}
        bodyContent={modalBodyContent}
        secondaryButtonText={modalSecondaryButtonText}
      />
    </>
  );
}
