import axios from 'axios';

const FETCH_WEATHER = 'FETCH_WEATHER';

const WEATHER_API_KEY = '486750564c7aece24383120037744607';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

const fetchWeather = (city) => {
  const url = `${WEATHER_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

export { FETCH_WEATHER, fetchWeather }