import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import SubmitButton from "./SubmitButton";
const Carosul = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.daysoftheyear.com/wp-content/uploads/world-student-day1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Container>
            <Row>
              <Col md={6}>
                <h3>Learn Development</h3>
                <p>
                  Business, Technology and Creative Skills taught by industry
                  experts. Explore a wide range of skills with our professional
                  tutorials.
                </p>
                <SubmitButton value="Read More" variant="light" size="lg" />
              </Col>
              <Col md={6}>
                <img
                  src="http://tutorio-bootstrap.frontendmatter.com/assets/images/macbook.png"
                  alt=""
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carosul;
