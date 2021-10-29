import React, { useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { fetchSingleOrder } from "../store/actions/ordersAction";
import { useDispatch } from "react-redux";

export default ({ orders, handleSubmitOrder }) => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState("");
  const [newOptions, setNewOptions] = useState("");

  function setOrder(e, id) {
    e.preventDefault();
    dispatch(fetchSingleOrder(id));
  }

  return (
    <Form>
      <Form className="orderAdminForm">
        <h1>Find and modify orders</h1>
        <Form.Group>
          <Form.Label>Orders by state:</Form.Label>
          <Form.Control
            onClick={(e) => {
              setOptions(e.target.value);
            }}
            as="select"
          >
            <option value="">Select order status</option>
            <option value="Confirmado">Confirmed</option>
            <option value="En Camino">On Delivery</option>
            <option value="Entregado">Delivered</option>
            <option value="Devuelto">Rejected</option>
          </Form.Control>
          <thead>
            <tr>
              <th>#</th>
              <th>Client</th>
              <th>Purchase Date</th>
              <th>Products</th>
              <th>Select</th>
            </tr>
          </thead>
          {orders &&
            orders
              .filter((order) => order.state.includes(options))
              .map((order, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    {order.user ? (
                      <td>
                        <li>{order.user.name}</li>
                        <li>{order.user.email}</li>
                      </td>
                    ) : (
                        <td />
                      )}
                    <td>{order.date}</td>
                    {order.products.length > 0 ? (
                      <td>
                        {order.products.map((OP) => (
                          <li>
                            {OP.product.name} : {OP.quantity}
                          </li>
                        ))}
                      </td>
                    ) : (
                        <td />
                      )}
                    <td>
                      <Button
                        className="buttonsDivOrder"
                        onClick={(e) => {
                          setOrder(e, order._id);
                        }}
                      >
                        Choose
                      </Button>
                    </td>
                  </tr>
                );
              })}
        </Form.Group>
        <Form.Group>
          <Form.Label>Select new status</Form.Label>
          <Form.Control
            as="select"
            onClick={(e) => {
              setNewOptions(e.target.value);
            }}
          >
            <option value="Confirmado">Confirmed</option>
            <option value="En Camino">On Delivery</option>
            <option value="Entregado">Delivered</option>
            <option value="Devuelto">Rejected</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <div className="buttonsDivUser">
              <Button
                onClick={(e) => handleSubmitOrder(e, newOptions)}
                className="buttonformAdmin"
                type="submit"
                variant="info"
              >
                Update
              </Button>
            </div>
          </Col>
        </Form.Group>
      </Form>
    </Form>
  );
};
