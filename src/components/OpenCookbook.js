import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import axios from 'axios';



export const OpenCookbook = () => {
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
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                        <Card>
                            <Card.Header><h3>{data.cookbookName}</h3></Card.Header>
                                <Card.Body>
                                        <div className='m-3'>
                                            <Button variant='success'>Open Cookbook</Button>
                                            <Button variant='danger' onClick={() => onDelete(data.id)}>Delete</Button>
                                            <Link to='/'>
                                                <Button variant='success'>Home</Button>
                                            </Link>
                                        </div>
                                </Card.Body>
                        </Card>
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
