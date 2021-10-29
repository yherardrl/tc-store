import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default ({ categories }) => {
  return (
    <Container className="elContainerDeCat">
      <h3 className="h2category">CATEGORIES</h3>
      <Row>
        {categories
          ? categories.map((cat) => {
            return (
              <Col xs={6} md={2} key={cat.id}>
                <Link to={`/categories/${cat.name}`}>
                  <Image
                    src={cat.image}
                    className="catImg"
                    fluid
                    roundedCircle
                  />
                  <h3 className="cath3">{cat.name}</h3>
                </Link>
              </Col>
            );
          })
          : null}
      </Row>
    </Container>
  );
};
