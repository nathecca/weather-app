import React, { useState } from 'react';
import { Container,Row,Col,FormControl, InputGroup,Button, Jumbotron } from 'react-bootstrap';

export const App = () => {
  return (
    <Container className="p-5">
      <Row>
        <Col xs={11}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Ciudad</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        </Col>
        <Col xs={1}>
          <Button variant="primary">Clima</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
        <Jumbotron>
          
        </Jumbotron>
        </Col>
      </Row>

    </Container>
  )
}