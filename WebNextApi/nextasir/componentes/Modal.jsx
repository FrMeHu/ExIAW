'use client'; // Indica que el componente se debe renderizar en el cliente

import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { redirect } from 'next/navigation';

// Definición del componente ModalComponent
function ModalComponent({ title, bodyContent, secondaryButtonText }) {
  
  // Estado local para manejar la visibilidad del modal
  const [show, setShow] = useState(false);
  
  // useEffect para mostrar el modal al montar el componente
  useEffect(() => {
    setShow(true); // Muestra el modal al montar el componente
  }, []);
  
  // Función para manejar el cierre del modal
  const handleClose = () => redirect("/pokemon"); // Redirige a "/pokemon" al cerrar

  // Renderizado del modal
  return (
    <Modal show={show} size="lg" onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title> {/* Título del modal, pasado como prop */}
      </Modal.Header>

      <Modal.Body>{bodyContent}</Modal.Body> {/* Contenido del cuerpo del modal, pasado como prop */}
      <Modal.Footer>
        <Link href="/pokemon" passHref> 
          <Button variant="secondary" onClick={handleClose}> 
            {secondaryButtonText} 
          </Button>
        </Link>
        <Link href="/pokemon" passHref>
        <Button variant="primary" onClick={handleClose}>
            Anterior
          </Button>
          </Link>
          <Link href="/pokemon" passHref>
          <Button variant="tertiary" onClick={handleClose}>
            Siguiente
          </Button>
          </Link>


          
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent; // Exportación del componente
