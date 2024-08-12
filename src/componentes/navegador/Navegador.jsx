import { Link } from "react-router-dom";
import "./Navegador.css"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/imgRazas/logo.jpg";

function Navegador() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary customNavbar">
      <Container>
        <Navbar.Brand href="#Home" className="p-2">
          <img
            alt=""
            src={logo}
            width="150"
            height="150"
            className="d-inline-block align-top"
          />{" "}
          <p className="text-danger">Página de Felinos</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="p-2 fs-3 text-danger">Inicio</Nav.Link>

            <Nav.Link href="/Razas" className="p-2 fs-3 text-danger">Razas</Nav.Link>

            <Nav.Link href="/Veterinarios" className="p-2 fs-3 text-danger">Nuestros Vets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;