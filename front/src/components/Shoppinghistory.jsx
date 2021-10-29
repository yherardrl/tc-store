import React from "react";
import { Jumbotron, Table } from "react-bootstrap";

export default ({ orders }) => {
  return (
    <Jumbotron fluid>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Products</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {orders
            ? orders.map((order, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{order.date}</td>
                  <td>
                    {order.products.map((p) => (
                      <li>
                        {p.product.name} : {p.quantity}
                      </li>
                    ))}
                  </td>
                  <td>{order.state}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </Jumbotron>
  );
};
