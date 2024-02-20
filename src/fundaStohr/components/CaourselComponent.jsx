import React from "react";
import { Carousel, Container } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel style={{ paddingTop: "15vh", width: "80%" }}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-70"
          src="assets/HomePage1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>This is the first slide!</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-70"
          src="assets/HomePage2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-70"
          src="assets/HomePage3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
