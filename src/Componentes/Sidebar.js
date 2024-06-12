import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

import Perfil1 from "./Imagenes/Perfil1.jpeg";
import Perfil2 from "./Imagenes/Perfil2.jpeg";
import Perfil3 from "./Imagenes/Perfil3.jpeg";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Carousel>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src={Perfil1} alt="Imagen 1" />
            <Card.Body>
              <Card.Title>Nicolas Contreras</Card.Title>
              <Card.Text>Sit officia qui incididunt laboris tempor incididunt nostrud. Irure laboris ut consectetur veniam proident.</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card >
            <Card.Img variant="top" src={Perfil2} alt="Imagen 2" />
            <Card.Body>
              <Card.Title>Joaquin Jara</Card.Title>
              <Card.Text>
              Sit officia qui incididunt laboris tempor incididunt nostrud. Irure laboris ut consectetur veniam proident.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src={Perfil3} alt="Imagen 3" />
            <Card.Body>
              <Card.Title>Joaquin Coronel</Card.Title>
              <Card.Text>Sit officia qui incididunt laboris tempor incididunt nostrud. Irure laboris ut consectetur veniam proident.</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Sidebar;
