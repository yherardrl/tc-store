import React from "react"
import { Form, Button } from "react-bootstrap"




export default ({ singleProduct, handleOptions, handleSubmit, categories }) => {
  
  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Label><b>Name:</b></Form.Label>
        <Form.Control name="name" type="text" placeholder="Name" defaultValue={singleProduct && singleProduct.name} />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Brand:</b></Form.Label>
        <Form.Control name="brand" type="text" placeholder="Brand" defaultValue={singleProduct && singleProduct.brand} />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Category:</b></Form.Label>
        <Form.Control as="select" onClick={handleOptions}>
          {categories &&
            categories.map(category => {
              return (
                <option key={category._id} value={category._id}>{category.name}</option>
              )
            })
          }
        </Form.Control>
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Price:</b></Form.Label>
        <Form.Control name="price" type="text" placeholder="Price" defaultValue={singleProduct && singleProduct.price} />
      </Form.Group>

      

{singleProduct.pictures && singleProduct.pictures.map(pic => (
  <Form.Group >
        <Form.Label><b>Pictures:</b></Form.Label>
        <Form.Control name="pictures" type="text" placeholder="Pictures" defaultValue={pic} />
      </Form.Group>

))}
      
      <Form.Group >
        <Form.Label><b>Description:</b></Form.Label>
        <Form.Control name="description" type="text" placeholder="Description" defaultValue={singleProduct && singleProduct.description} />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Product Id:</b></Form.Label>
        <Form.Control name="_id" type="text" placeholder="Id" defaultValue={singleProduct && singleProduct._id} disabled />
      </Form.Group>

      <Button variant="success" className="buttonsDiv" type="submit">Submit</Button>

    </Form>

  )
}