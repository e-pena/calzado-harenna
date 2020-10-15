import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavbarBootstrap() {
	return (
		<Navbar id="navbar" bg="primary" expand="lg">
            <Navbar.Brand href="#home">Calzado Harenna</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#link">Login</Nav.Link>
                    <Nav.Link href="#link">Contáctenos</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Adultos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Niños</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
	);
}

export default NavbarBootstrap;