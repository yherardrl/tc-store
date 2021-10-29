import React from "react"
import { Form, Button } from "react-bootstrap"

export default ({ handleSubmitCreate, categories, handleOptions }) => {

  return (

    <Form onSubmit={handleSubmitCreate}>
      <Form.Group >
        <Form.Label><b>Name:</b></Form.Label>
        <Form.Control name="name" type="text" placeholder="Name" />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Brand:</b></Form.Label>
        <Form.Control name="brand" type="text" placeholder="Brand" />
      </Form.Group>


      <Form.Group >
        <Form.Label><b>Category:</b></Form.Label>
        {/*  <Form.Control name="categories" type="text" placeholder="Categories" /> */}
        <Form.Control as="select" onChange={handleOptions}>
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
        <Form.Control name="price" type="text" placeholder="Price" />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Pictures:</b></Form.Label>
        <Form.Control name="picture1" type="text" placeholder="Picture 1" />
      </Form.Group>
      <Form.Group >
        <Form.Label><b></b></Form.Label>
        <Form.Control name="picture2" type="text" placeholder="Picture 2" />
      </Form.Group>
      <Form.Group >
        <Form.Label><b></b></Form.Label>
        <Form.Control name="picture3" type="text" placeholder="Picture 3" />
      </Form.Group>
      <Form.Group >
        <Form.Label><b></b></Form.Label>
        <Form.Control name="picture4" type="text" placeholder="Picture 4" />
      </Form.Group>

      <Form.Group >
        <Form.Label><b>Description:</b></Form.Label>
        <Form.Control name="description" type="text" placeholder="Description" />
      </Form.Group>

      <Button variant="success" className="buttonsDiv" type="submit">Submit</Button>

    </Form>

  )
}