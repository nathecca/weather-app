import {CONFIG} from '../config';

export const getWeather = async (city)=>{
  const url = `${CONFIG.url_base}/weather?appid=${CONFIG.api_key}&lang=${CONFIG.lang}&units=${CONFIG.units}&q=${encodeURI(city)}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    weather: data.weather[0].description,
    weather_icon : data.weather[0].icon,
    temp : data.main.temp,
    temp_min : data.main.temp_min,
    temp_max : data.main.temp_max,
    pressure : data.main.pressure,
    humidity : data.main.humidity
  }
}