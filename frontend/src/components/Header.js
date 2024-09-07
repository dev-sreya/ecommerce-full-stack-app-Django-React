import React from 'react'
import { Navbar,Nav,Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
      <header>   
       <Navbar expand="lg" bg="dark" variant="dark"className="bg-dark" collapseOnSelect>
      <Container>
        <Nav.Link as={Link} to="/">
        <Navbar.Brand>ELIvate</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Nav.Link as={Link} to="/login"><i className='fas fa-user'></i>Login</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
  )
}

export default Header
