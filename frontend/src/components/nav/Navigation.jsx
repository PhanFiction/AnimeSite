import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Hamburger from '../hamburger/Hamburger';

const StyledButton = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  &&:hover {
    background-color: grey;
    border-color: transparent;
  }
`;

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    const { show } = this.state;
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <StyledButton onClick={this.handleShow}>
            <Hamburger />
          </StyledButton>
          <Offcanvas show={show} onHide={this.handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav.Link as={Link} to="/dubbed-anime">Login</Nav.Link>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/genre">Genre</Nav.Link>
              <Nav.Link as={Link} to="/subbed-anime">Subbed Anime</Nav.Link>
              <Nav.Link as={Link} to="/dubbed-anime">Dubbed Anime</Nav.Link>
            </Offcanvas.Body>
          </Offcanvas>
          <Navbar.Brand>
            <Nav.Link as={Link} to="/">Anime Site</Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Item className="ml-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Anime"
                  className="me-1"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
