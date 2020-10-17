import {CONFIG} from '../config';

export const getWeather = async (city)=>{
  const url = `${CONFIG.url_base}/weather?appid=${CONFIG.api_key}&lang=${CONFIG.lang}&units=${CONFIG.units}&q=${encodeURI(city)}`;
  const res = await fetch(url);
  const data = await res.json();
  /*console.log(data.weather[0].description);
  console.log(data.main.temp);
  console.log(data.main.temp_min,data.main.temp_max);
  console.log(data.main.pressure);
  console.log(data.main.humidity);*/
  return {
    weather: data.weather[0].description,
    temp : data.main.temp,
    temp_min : data.main.temp_min,
    temp_max : data.main.temp_max,
    pressure : data.main.pressure,
    humidity : data.main.humidity
  }
}