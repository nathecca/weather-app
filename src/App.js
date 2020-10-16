import React, { useState } from 'react';
import { Container,Row,Col,FormControl, InputGroup,Button, Jumbotron } from 'react-bootstrap';
import {CONFIG} from './config';

export const App = () => {
  const [city, setCity] = useState("Guayaquil")
  const handleClick = ()=>{
    console.log(city)
    getClima(city)
  }
  const handleChange = ()=>{
    console.log(city)
  }
  const getClima = (city)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+CONFIG.api_key
    console.log(url);
  }

  return (
    <Container className="p-5">
      <Row>
        <Col xs={11}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Ciudad</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={city} onChange={handleChange}/>
          </InputGroup>
        </Col>
        <Col xs={1}>
          <Button variant="primary" onClick={handleClick}>Clima</Button>
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