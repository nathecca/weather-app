import { useEffect, useState } from "react"
import {getWeather} from '../helpers/getWeather'

export const useFetchWeather = (city) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getWeather(city).then((data)=>{
      setState({
        data: data,
        loading: false
      });
    });
  }, [city]);
  return state;
}
