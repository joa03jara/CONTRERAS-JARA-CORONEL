import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <div className="menu">
      <Container>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>

            <Navbar.Brand href="#">Inicio</Navbar.Brand>

            <Navbar.Brand 
            href="#">Editar</Navbar.Brand>

            <Navbar.Brand href="#">Ver</Navbar.Brand>

            <Navbar.Brand href="https://compragamer.com/" target="_Blank">Tienda</Navbar.Brand>

            <Navbar.Brand href="#">Acerda De</Navbar.Brand>

          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Menu;
