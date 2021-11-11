import { WeatherType } from '../constans/action-type';
// const userInfoFromLocalStorage = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
// let date = moment;
const initialState = {
  city: '',
  weather: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WeatherType.SET_CITY:
      console.log(action);
      return {
        ...state,
        city: action.payload,
      };

    case WeatherType.SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};
