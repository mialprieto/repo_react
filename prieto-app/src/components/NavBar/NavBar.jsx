import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import cartWidget from './cartWidget'
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Mial Makeup</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Nosotras</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Kit lifting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lidherma</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Idraet</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
                <cartWidget/>
            </Nav.Link>
            <cartWidget/>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
        
      </Navbar>
       
    )}

    export default NavBar