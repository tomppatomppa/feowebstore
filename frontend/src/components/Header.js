import React from 'react'
import { Navbar, Nav, Container, color } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar variant='dark' expand='lg' CollapseOnSelect>
        <Container>
          <Navbar.Brand color='blue' href='/'>
            Feo By Tika
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
