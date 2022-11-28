import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


export const RecipeList = () => {
  const [recipes, setRecipes] = useState([
    
  ])
      return (
          <div>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    Breakfast Casserole
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Spaghetti
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    Eggs, Cheese, Sausage Cook at 325 degrees for 40 minutes
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    Noodles, Tomato Sauce, Tomato Paste, Hamburger, Parmesan. Boil Noodles, Combine ingredients.
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
  </div>
  )        
  }
