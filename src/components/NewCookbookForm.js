import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export const NewCookbookForm = () => {
const [ cookbookName, setCookbookName] = useState('');

const sendDataToAPI = () => {
    axios.post(`https://636dd76cb567eed48acaa59d.mockapi.io/Cookbook`, {
     cookbookName
    }, [])
}

  return (
    <Form>
      <Form.Group className="mt-5" controlId="cookbookName">        
        <Form.Control type="name" placeholder="Cookbook Name" onChange={(e) => setCookbookName(e.target.value)} />
      </Form.Group>

      <Link to = '/ShowCookbooks'>
        <Button variant="success" type="submit" className='mt-3' onClick={sendDataToAPI} >
            Submit
        </Button>
      </Link>

    </Form>
)}
