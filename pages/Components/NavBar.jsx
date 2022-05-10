import styles from "../../styles/Nav.module.css";
import Image from 'next/image';
import imgLogo from "../../public/DWLogo.png";
import { Navbar, Container,Nav, NavDropdown } from "react-bootstrap";



function NavbarTop () {
    return(
      <Navbar bg="dark" expand="lg" variant="dark" className={styles.navbarFixed}>
        <Navbar.Brand href="#home" className={styles.logo}>
          <Image src={imgLogo} width={500} height={120}/> 
          </Navbar.Brand>
      <Container className={styles.navlinks}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">         
            <NavDropdown title="Ventas" id="basic-nav-dropdown"className={styles.spaceBet}>
              <NavDropdown.Item href="#action/3.1">Lotes a la venta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Casas a la venta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Desarrollos Urbanos</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Alquileres" id="basic-nav-dropdown"className={styles.spaceBet}>
              <NavDropdown.Item href="#action/3.1">Casas en alquiler</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Locales en Alquiler</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Desarrollos Urbanos</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#link"className={styles.spaceBet}>Tasaciones</Nav.Link>
            <Nav.Link href="#link"className={styles.spaceBet}>Quienes Somos</Nav.Link>
            <Nav.Link href="#link"className={styles.spaceBet}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarTop