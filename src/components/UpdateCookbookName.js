import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export const UpdateCookbookName = () => {

  const [cookbookName, setCookbookName] = useState('');
  const [ID, setID] = useState(null);

  useEffect(() => {
    setCookbookName(localStorage.getItem('cookbookName'));
    setID(localStorage.getItem('ID'))
    
}, [])

const sendDataToAPI = (id) => {
  axios.put(`https://636dd76cb567eed48acaa59d.mockapi.io/Cookbook/${id}`, {
      cookbookName,
  });
};


  
    return (
      <Form>
        <Form.Group className="mt-5" controlId="cookbookName">        
          <Form.Control type="text" value={cookbookName} placeholder="Cookbook Name" onChange={(e) => setCookbookName(e.target.value)} />
        </Form.Group>
  
        <Link to = '/ShowCookbooks'>
          <Button variant="success" type="submit" className='mt-3' onClick={sendDataToAPI} >
              Update
          </Button>
        </Link>
  
      </Form>
  )}
  