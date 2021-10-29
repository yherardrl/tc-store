import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <Container fluid className="productsContainer">
      <Row>
        {products.map((product) => {
          return (
            <Col xs={3} className="mb-4" key={product._id}>
              <Card className="mx-auto card">
                <div className="view view-eighth">
                  <img src={product.pictures[0]} />
                  <div className="mask">
                    <h2>{product.name}</h2>
                    <p>{product.brand}</p>
                    <Link to={`/products/${product._id}`} className="info">
                      More info
                    </Link>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
