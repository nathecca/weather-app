import React, { useState } from 'react';
import { Container,Row,Col,FormControl, InputGroup,Button, Jumbotron } from 'react-bootstrap';
//import {CONFIG} from './config';
import {getWeather} from './helpers/getWeather';
import { useFetchWeather } from './hooks/useFetchWeather';

export const App = () => {

  const [city, setCity] = useState("Guayaquil")

  const {data , loading} = useFetchWeather(city);

  const handleClick = (e)=>{
    console.log(city)
    getWeather(city).then((data)=>{
      console.log(data);
    });
  }

  const handleChange = (e)=>{
    setCity(e.target.value)
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
          <p><strong>Clima:</strong> {data.weather}</p>
          <p><strong>Temperatura:</strong> {data.temp}</p>
          <p><strong>Humedad:</strong> {data.humidity}</p>
        </Jumbotron>
        </Col>
      </Row>

    </Container>
  )
}