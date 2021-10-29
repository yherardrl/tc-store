import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"

export default ({ handleChange, products, filterValue, setSingleProduct }) => {

  const [options, setOptions] = useState("")


  return (
    <Form.Group>
      <Form.Label>Search by name</Form.Label>
      <Form.Control onChange={handleChange} value={filterValue && filterValue.search} name="search" type="text" placeholder="search by name" />
      <Form.Control as="select" onClick={(e) => { setOptions(e.target.value) }}>
        {products &&
          products.filter(product => product.name.includes(filterValue && filterValue.search)).map(product => {
            return (
              <option key={product._id} value={product._id}>{product.name}{product.brand}</option>
            )
          })
        }
      </Form.Control>
      <Button className="buttonsDiv" onClick={(e) => setSingleProduct(e, options)}>Fulfill</Button>


    </Form.Group>
  )
}