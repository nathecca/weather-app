import React from 'react'
import { Jumbotron } from 'react-bootstrap';

export const Jumboweather = ({data}) => {
  return (
    <Jumbotron className="jumbo">
      <img src={`http://openweathermap.org/img/wn/${data.weather_icon}@2x.png`} alt=""/>
      <p><strong>Clima:</strong> {data.weather}</p>
      <p><strong>Temperatura:</strong> {data.temp}</p>
      <p><strong>Humedad:</strong> {data.humidity}</p>
    </Jumbotron>
  )
}
