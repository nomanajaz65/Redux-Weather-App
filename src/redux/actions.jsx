import { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } from './reducers';

export const fetchWeather = (city) => async (dispatch) => {
  dispatch(fetchWeatherRequest());
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_ACTUAL_API_KEY`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    dispatch(fetchWeatherSuccess(data));
  } catch (error) {
    dispatch(fetchWeatherFailure(error.message));
  }
};
