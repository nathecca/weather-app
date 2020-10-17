import { useEffect, useState } from "react"
import {getWeather} from '../helpers/getWeather'

export const useFetchWeather = (city) => {
  const [state, setState] = useState({
    data: null,
    isLoaded: false,
    iError: false
  })

  useEffect(() => {
    setState({
      isLoaded: false,
      data: null,
      isError: false
    });
    getWeather(city)
    .then((data)=>{
      setState({
        data: data,
        isLoaded: true,
        isError: false
      });
    })
    .catch(error => {
      setState({
        data: null,
        isLoaded: true,
        isError: true
      });
    });
  }, [city]);
  return state;
}
