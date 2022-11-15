import React from 'react'
// import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import CreateNewBtn from './button';
// import ShowBooksBtn from './ShowBooksBtn';
import cardBg2 from '../images/cook-healthy-food-eat2.jpg'
import { NewCookbookForm } from './NewCookbookForm';

export const CreateCookbook = () => {
  

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
                    <NewCookbookForm />  
                </Col>
            </div>
            <Col></Col>
        </Row>
   </Container>
  )
}
