import React from 'react'
import logo from '../assets/logo.png'
import { Navbar, Nav} from 'react-bootstrap';

function NavbarComponent() {
    return (
      <div class="mt-3">
      <Navbar bg="black" variant="dark" expand="lg" style={{width: "100%" }}>
        <Navbar.Brand href="#home">
          <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="logo" style={{marginRight: "15px"}} />
          COLEARN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ml-auto navbar-content"> 
              
                <Nav.Link href="#products">Product</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#signIn">Sign In</Nav.Link>
                </Nav>
                </Navbar.Collapse>   
      </Navbar>

      </div>
    )
}

export default NavbarComponent;