import React from 'react';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageIcon from '@mui/icons-material/Image';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function BarraNav() {
  return (
    <Navbar>



        <Nav>
        <Nav.Link as={Link} to="/">
          <HomeIcon style={{ color: 'brown' }}/>Inicio
        </Nav.Link>

        <NavDropdown title={<span><NewspaperIcon style={{ color: 'orange' }}/> Noticias</span>} id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/noticias/jefatura">Noticias Jefatura</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/noticias/informatica">Departamento Informática</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link as={Link} to="/galeria">
        <ImageIcon style={{ color: 'blue' }}/> Galería</Nav.Link>

        <Nav.Link as={Link} to="/about">
        <AssignmentIndIcon style={{ color: 'green' }}/>Contacto</Nav.Link>

        <Nav.Link as={Link} to="/defensa">
        <AssignmentIndIcon style={{ color: 'green' }}/>Defensa</Nav.Link>
        
        </Nav>



    </Navbar>
  );
}

export default BarraNav;





