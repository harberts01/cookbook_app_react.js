import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export const CreateRecipeModal = () => {
  const [show, setShow] = useState(false);
  const [apiData, setApiData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    axios.get(`https://636dd76cb567eed48acaa59d.mockapi.io/Cookbook`)
    .then((getData) => {
        setApiData(getData.data)
    })
}, []);
  
    const getData = () => {
      axios.get(`https://636dd76cb567eed48acaa59d.mockapi.io/Cookbook`)
      .then((getData) => {
          setApiData(getData.data)
      })
  }
  const sendDataToAPI = (id) => {
    axios.post(`https://636dd76cb567eed48acaa59d.mockapi.io/Cookbook`, 
     
   [])
}
 

  return (
    <div>
    <Button className='mb-3' variant="primary" onClick={handleShow}>
        Add New Recipe
      </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="recipeName">
              <Form.Label>Name Your Recipe</Form.Label>
              <Form.Control
                type="name"
                placeholder="Recipe Name"
                autoFocus
                
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="ingredients"
            >
              <Form.Label>Add Ingredients</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="instructions">
              <Form.Label>Add Instructions</Form.Label>
              <Form.Control as="textarea" rows={3}  />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}
