import React from 'react'
import {Container, Nav, Navbar, NavDropdown,Button} from 'react-bootstrap';



const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <div className="justify-content-end">
          <Button variant="link" href="/login">Sign In</Button>
          <Button variant="link" href="/register">Sign Up</Button>
        </div>

      </Container>
    </Navbar>
  )
}

export default Navigation
