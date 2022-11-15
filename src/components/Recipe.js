import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'


export const Recipe = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://636dd76cb567eed48acaa59d.mockapi.io/Recipe`)
        .then((getData) => {
            setApiData(getData.data)
        })
    }, []);


  return (
    <Container>
        {apiData.map((data) => {
            return(
                <Card key={data.id}>
                    <Card.Title>
                        {data.name}
                    </Card.Title>
                    <Card.Body>
                        {data.ingredients}
                        {data.instructions}
                    </Card.Body>
                </Card>
        )
    })}
    </Container>
  )
}
