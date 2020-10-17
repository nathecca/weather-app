import React, { useState } from 'react';
import { Container,Row,Col,FormControl, InputGroup,Button, Jumbotron, Spinner } from 'react-bootstrap';
//import {CONFIG} from './config';
import { useFetchWeather } from './hooks/useFetchWeather';

export const App = () => {

  const [city, setCity] = useState("Guayaquil");
  const [finalCity, setFinalCity] = useState("Guayaquil");

  const {data , loading, isError} = useFetchWeather(finalCity);

  const handleClick = (e)=>{
    e.preventDefault();
    setFinalCity(city);
  }

  const handleChange = (e)=>{
    setCity(e.target.value)
  }

  const style = { position: "fixed", top: "30%", left: "50%" };
  let output;
  if(loading) {
    output = <Spinner style={style} animation="border" />
  } else {
    if(isError) {
      output = <div style={style}>Invalid City</div>;
    } else {
      output = <Row>
                <Col xs={12}>
                <Jumbotron>
                  <p><strong>Clima:</strong> {data.weather}</p>
                  <p><strong>Temperatura:</strong> {data.temp}</p>
                  <p><strong>Humedad:</strong> {data.humidity}</p>
                </Jumbotron>
                </Col>
              </Row>;
    }
  }

  return (
    <Container className="p-5">
      <Row>
        <Col xs={11}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Ciudad</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={city} onChange={handleChange} />
          </InputGroup>
        </Col>
        <Col xs={1}>
          <Button variant="primary" onClick={handleClick}>Clima</Button>
        </Col>
      </Row>
      {output}
    </Container>
  )
}