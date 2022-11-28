import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import cardBg2 from '../images/cook-healthy-food-eat2.jpg'
import axios from 'axios';



export const CookbookCard = () => {
    const [apiData, setApiData] = useState([]);

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

    const setID = (id) => {
        localStorage.setItem('ID', id)
    }

    const onDelete = (id) => {
        axios.delete(`https://636dd76cb567eed48acaa59d.mockapi.io/Cookbook/${id}`)
        .then (() => {
            getData();
        })
    }
  return (
    <div>
      
        {apiData.map((data) => {
            return(
            <div>
                <Container className='mb-3'>
                    <Row>
                        <Col></Col>
                        <Col>
                        <div
                          style={{backgroundImage: `url(${cardBg2})`,
                          backgroundRepeat: 'no-repeat',
                          width: 910,
                          height: 814
                          }}>
                        <div className='mt-3 mb-3'>
                            <h1 className='text-center text-white text-decoration-underline'>{data.cookbookName}</h1>
                                  <div className='text-center mt-5'>
                                    <Link to='/OpenCookbook'><Button style={{width: 350}} variant='success'>Open</Button></Link>
                                      
                                    </div>
                                    <div className='text-center mt-5'>
                                      <Button style={{width: 350}} variant='danger' onClick={() => onDelete(data.id)}>Delete</Button>
                                  </div>
                                <div className='text-center mt-5'>
                                    <Link to='/' >
                                        <Button style={{width: 175, color:'white'}} variant='Link'>Home</Button>
                                    </Link>
                                    <Link to='/UpdateCookbook' >
                                        <Button style={{width: 175, color: 'white'}} variant='Link' onClick={() => setID(data.id)}>Rename</Button>
                                    </Link>

                                </div>
                          </div>
                        </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
            )
        })}
    </div>
  )
}
