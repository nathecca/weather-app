import { useEffect, useState } from "react"
import {getWeather} from '../helpers/getWeather'

export const useFetchWeather = (city) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    iError: false
  })

  useEffect(() => {
    setState({
      loading: true,
      data: null,
      isError: false
    });
    getWeather(city)
    .then((data)=>{
      setState({
        data: data,
        loading: false,
        isError: false
      });
    })
    .catch(error => {
      setState({
        data: null,
        loading: false,
        isError: true
      });
    });
  }, [city]);
  return state;
}
