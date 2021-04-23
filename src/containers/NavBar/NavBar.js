import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../../components/CartWidget/CartWidget';
import { 
    Navbar,
    Nav,
    NavDropdown,
    Container
 } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="success" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Deportes Apalta</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">Todas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/category/1">Casual</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/2">Deportiva</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
