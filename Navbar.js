import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Employee Management System</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/about">About</NavLink>
            <NavLink className="link" to="/user">User</NavLink>
          </Nav>
          <Nav>
            <NavLink className="link" to="/login">Login</NavLink>
            <NavLink className="link" to="/search">Search</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
