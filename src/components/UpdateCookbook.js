import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cardBg2 from '../images/cook-healthy-food-eat2.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const UpdateCookbook = () => {
const [cookbookName, setCookbookName] = useState('');
const [ID, setID] = useState(null);

  useEffect(() => {
    setCookbookName(localStorage.getItem('cookbookName'));
    setID(localStorage.getItem('ID'))
    
}, [])

const sendDataToAPI = () => {
  axios.put(`https://636dd76cb567eed48acaa59d.mockapi.io/Cookbook/${ID}`, {
      cookbookName,
  });
};


  return (
    <Container className='mt-3'>
        <Row>
            <Col></Col> 
            <div
            style={{backgroundImage: `url(${cardBg2})`,
            backgroundRepeat: 'no-repeat',
            width: 910,
            height: 814
            }}>
                <div className='text-center mt-3 text-white'>
                    <h1>Name Your Cookbook!</h1>
                </div>
                <Col>
                <Form>
                    <Form.Group className="mt-5" controlId="cookbookName">        
                    <Form.Control type="text" placeholder="Cookbook Name" onChange={(e) => setCookbookName(e.target.value)} />
                    </Form.Group>
            
                    <Link to = '/ShowCookbooks'>
                    <Button variant="success" type="submit" className='mt-3' onClick={sendDataToAPI} >
                        Update
                    </Button>
                    </Link>
            
                </Form>  
                </Col>
            </div>
            <Col></Col>
        </Row>
   </Container>
  )
}
