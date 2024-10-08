import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import Search from './components/search/Search';
import WeatherDisplay from './components/weatherdisplay/WeatherDisplay';
import { fetchWeather } from './redux/actions';
import './App.css';


const App = () => {
  const dispatch = useDispatch();
  // Update the selector to get only the weather part of the state
  const weather = useSelector(state => state.weather);

  const handleSearch = (city) => {
    dispatch(fetchWeather(city));
  };

  return (
    <div className="container">
      <Header />
      <Search onSearch={handleSearch} />
      <WeatherDisplay data={weather.data} loading={weather.loading} error={weather.error} />
    </div>
  );
};

export default App;
