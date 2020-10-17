import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import { useFetchWeather } from '../hooks/useFetchWeather';

export const Jumboweather = ({city}) => {
  const {data} = useFetchWeather(city);
  return (
    <Jumbotron>
      <p><strong>Clima:</strong> {data.weather}</p>
      <p><strong>Temperatura:</strong> {data.temp}</p>
      <p><strong>Humedad:</strong> {data.humidity}</p>
    </Jumbotron>
  )
}
