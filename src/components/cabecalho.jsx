import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cabecalho.css'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default props => 

<Navbar bg="dark" variant="light" expand="lg">
  <Navbar.Brand>
    <Link to='/perfil'>Protfolio</Link>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>
        <Link to='/projetos'>Projetos</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>