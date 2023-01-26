import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import SubmitButton from "./SubmitButton";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Input from "./Input";
import { BiSearch } from "react-icons/bi";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <HiBars3BottomLeft />
          </Navbar.Toggle>
          <Navbar.Brand href="/">Student App</Navbar.Brand>
        </div>
        <Form className="navSearch me-5 ms-5">
          <Form.Group controlId="formBasicEmail">
            <InputGroup>
              <Input placeholder="Search Course" />
              <Button>
                <BiSearch />
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="d-none"
            >
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
          <SubmitButton href="/login" variant="link" value="Login" /> &nbsp;
          <SubmitButton href="/register" variant="link" value="Register" />
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
