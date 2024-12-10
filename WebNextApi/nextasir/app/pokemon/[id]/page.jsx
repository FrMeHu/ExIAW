import { fetchData } from "@/componentes/funciones";
import { notFound } from "next/navigation";
import ModalComponent from "@/componentes/Modal"; // Ajusta la ruta si es necesario

// Definición de la función asíncrona que actúa como la página principal
export default async function Page({ params }) {

  // Extrae el parámetro id de los parámetros de la URL, asegurándose de esperar a que params esté disponible
  const { id } = await params;
  
  // Validación del id para asegurar que esté en el rango permitido
  if (id <= 0 || id > 1000) {
    return notFound();  // Si no es válido, retorna la página de "no encontrado"
  }

  // Inicialización de la variable para almacenar los datos del Pokémon
  let pokemon = null;
  // Intentar obtener los datos del Pokémon con el id proporcionado
  try {
    pokemon = await fetchData({ id });  // Llamada asíncrona para obtener los datos
  } catch (error) {
    console.error("Error fetching data: ", error);  // Manejo del error en la consola
    return notFound();  // Si ocurre un error, retorna la página de "no encontrado"
  }

  // Definir las variables para el modal
  const modalTitle = `Número: ${pokemon.numero} - ${pokemon.nombre}`;
  const modalBodyContent = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={pokemon.img} alt={pokemon.nombre} />
      <h4>HP:{pokemon.hp} - Ataque:{pokemon.ataque} - Defensa:{pokemon.defensa}</h4>
    </div>
  );
  const modalSecondaryButtonText = "Cerrar";

  return (
    <>
      
      <ModalComponent 
        title={modalTitle}
        bodyContent={modalBodyContent}
        secondaryButtonText={modalSecondaryButtonText}
      />
    </>
  );
}
