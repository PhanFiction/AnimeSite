import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Navigation extends React.PureComponent {
  render() {
    return (
      <Offcanvas show={show} onHide={handleClose} responsive="lg">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p className="mb-0">
          This is content within an <code>.offcanvas-lg</code>.
        </p>
      </Offcanvas.Body>
    </Offcanvas>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/genre">Genre</Nav.Link>
              <Nav.Link as={Link} to="/subbed-anime">Subbed Anime</Nav.Link>
              <Nav.Link as={Link} to="/dubbed-anime">Dubbed Anime</Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/dubbed-anime">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
