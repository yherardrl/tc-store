import React from "react";
import { Carousel } from "react-bootstrap";

//FALTA CORREGIR TAMANIO DE LAS IMGS

export default () => (
  <Carousel className="carousel">
    <Carousel.Item interval={1500} className="carouselItem">
      <img
        className="d-block w-100 align-middle maxHeight"
        src="images/Instruments/baterias/carrusel/carlos-coronado-YVA1_EIjatQ-unsplash.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h3>Baterias</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500} className="carouselItem">
      <img
        className="d-block w-100 align-middle maxHeight"
        src="images/Instruments/bongos/carrusel/amir-yalon-hQBIFwLpoik-unsplash.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        {/* <h3>Bongos</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500} className="carouselItem">
      <img
        className="d-block w-100 align-middle maxHeight"
        src="images/Instruments/guitarras/carrusel/thomas-kelley-2ZWCDBuw1B8-unsplash.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        {/* <h3>Guitarras</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500} className="carouselItem">
      <img
        className="d-block w-100 align-middle maxHeight"
        src="images/Instruments/teclados/carrusel/kelly-sikkema-4qnhBQv4qcg-unsplash.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        {/* <h3>Teclados</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
