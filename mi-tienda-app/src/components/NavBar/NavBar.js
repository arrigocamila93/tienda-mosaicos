import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Icono from '../cartwidget/CartWidget.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavBar = () => {


    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Tienda de Mosaicos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Contacto</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Nosotros</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ofertas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Icono />
        </Navbar>
    )

};

export default NavBar;