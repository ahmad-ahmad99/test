import { WeatherType } from '../constans/action-type';
import axios from 'axios';
export const fetchCity = () => async (dispatch) => {
  const response = await axios.get('https://ipapi.co/json/');
  dispatch({ type: WeatherType.SET_CITY, payload: response.data.city });
};

export const fetchWeather = (city) => async (dispatch) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b039040eb619a0a958ecd93280601d97`);
  dispatch({ type: WeatherType.SET_WEATHER, payload: response.data });
};
