import React, { useState } from 'react';
import { Container,Row,Col,FormControl, InputGroup,Button, Jumbotron } from 'react-bootstrap';
//import {CONFIG} from './config';
import {getWeather} from './helpers/getWeather';

export const App = () => {

  const [city, setCity] = useState("")

  const handleClick = (e)=>{
    console.log(city)
    //getClima(city);
    getWeather(city).then((data)=>{
      console.log(data);
    });
    
  }
  const handleChange = (e)=>{
    setCity(e.target.value)
  }
  /*const getClima = (city)=>{
    //const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+CONFIG.api_key
    //console.log(url);
  }*/

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