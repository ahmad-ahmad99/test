import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { weatherReducer } from './wetherReducer';

const reducers = combineReducers({
  todo: todoReducer,
  weatherInfo: weatherReducer,
});

export default reducers;
