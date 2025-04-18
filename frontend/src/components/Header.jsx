import React from 'react'
import { Navbar,Nav,Container, Row, NavDropdown  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../actions/userActions'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
      dispatch(logout())
  }

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

            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <Nav.Link as={Link} to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </Nav.Link>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                              <Nav.Link as={Link} to="/login"><i className='fas fa-user'></i>Login</Nav.Link>
                                )}          
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
  )
}

export default Header
