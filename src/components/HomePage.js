import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateNewBtn from './button';
import { Header } from './Header';
import ShowBooksBtn from './ShowBooksBtn';
import cardBg2 from '../images/cook-healthy-food-eat2.jpg'

export const HomePage = () => {
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
                <Header />
                <Col>
                    <Link style={{textDecoration: 'none'}} to='/CreateCookbook'>
                        <CreateNewBtn />
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/OpenCookbook'>
                        <ShowBooksBtn />
                    </Link>    
                </Col>
            </div>
            <Col></Col>
        </Row>
   </Container>
  );
}
