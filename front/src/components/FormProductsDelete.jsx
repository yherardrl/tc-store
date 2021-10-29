import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { deleteProduct } from "../store/actions/productAction"


export default ({ singleProduct, handleDeleteProduct }) => {
  return (

    <Form onSubmit={handleDeleteProduct}>
      <Form.Group >
        <Form.Label><b>Name</b></Form.Label>
        <Form.Control name="name" type="text" placeholder="Name" defaultValue={singleProduct && singleProduct.name} disabled/>
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Brand</b></Form.Label>
        <Form.Control name="brand" type="text" placeholder="Brand" defaultValue={singleProduct && singleProduct.brand}disabled/>
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Categories</b></Form.Label>
        <Form.Control name="categories" type="text" placeholder="Categories" defaultValue={singleProduct && singleProduct.categories} disabled/>
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Price</b></Form.Label>
        <Form.Control name="price" type="text" placeholder="Price" defaultValue={singleProduct && singleProduct.price} disabled/>
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control name="description" type="text" placeholder="Description" defaultValue={singleProduct && singleProduct.description} disabled/>
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Product Id</b></Form.Label>
        <Form.Control name="_id" type="text" placeholder="Id" defaultValue={singleProduct && singleProduct._id} disabled disabled/>
      </Form.Group>

      <Button variant="warning" className="buttonsDiv" type="submit">Delete</Button>

    </Form>

  )
}