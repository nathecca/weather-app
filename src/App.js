import React, { useState } from 'react';
import { Container,Row,Col,FormControl, InputGroup,Button } from 'react-bootstrap';
import { Jumboweather } from './components/Jumboweather';

export const App = () => {

  const [city, setCity] = useState("Guayaquil")

  const [show, setShow] = useState(false)

  const handleClick = (e)=>{
    setShow(true)
  }

  const handleChange = (e)=>{
    setCity(e.target.value)
    setShow(false)
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
        {show && <Jumboweather city={city} />}
        </Col>
      </Row>

    </Container>
  )
}