import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [location, setLocation] = useState('Rajkot');
  const Api_Key = "721f270d85612739d8f338db9ec2145d";
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  const [weatherData, setWeatherData] = useState(null);

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case '01d': // clear sky (day)
        return 'https://cdn-icons-png.flaticon.com/512/861/861059.png';
      case '01n': // clear sky (night)
        return 'https://cdn-icons-png.flaticon.com/512/861/861059.png';
      case '02d': // few clouds (day)
        return 'https://cdn-icons-png.flaticon.com/512/252/252035.png';
      case '02n': // few clouds (night)
        return 'https://cdn-icons-png.flaticon.com/512/252/252035.png';
      case '03d': // scattered clouds (day)
        return 'https://cdn-icons-png.flaticon.com/512/252/252035.png';
      case '03n': // scattered clouds (night)
        return 'https://cdn-icons-png.flaticon.com/512/252/252035.png';
      case '04d': // broken clouds (day)
        return 'https://cdn-icons-png.flaticon.com/512/252/252035.png';
      case '04n': // broken clouds (night)
        return 'https://cdn-icons-png.flaticon.com/512/252/252035.png';
      case '09d': // shower rain (day)
        return 'https://cdn-icons-png.flaticon.com/512/531/531254.png';
      case '09n': // shower rain (night)
        return 'https://cdn-icons-png.flaticon.com/512/531/531254.png';
      case '10d': // rain (day)
        return 'https://cdn-icons-png.flaticon.com/512/531/531254.png';
      case '10n': // rain (night)
        return 'https://cdn-icons-png.flaticon.com/512/531/531254.png';
      case '11d': // thunderstorm (day)
        return 'https://cdn-icons-png.flaticon.com/512/495/495963.png';
      case '11n': // thunderstorm (night)
        return 'https://cdn-icons-png.flaticon.com/512/495/495963.png';
      case '13d': // snow (day)
        return 'https://cdn-icons-png.flaticon.com/512/250/250224.png';
      case '13n': // snow (night)
        return 'https://cdn-icons-png.flaticon.com/512/250/250224.png';
      case '50d': // mist (day)
        return 'https://cdn-icons-png.flaticon.com/512/252/252035.png';
      case '50n': // mist (night)
        return 'https://cdn-icons-png.flaticon.com/512/252/252035.png';
      default:
        return 'https://cdn-icons-png.flaticon.com/512/252/252035.png';
    }
  };

  const searchLocation = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: location,
          appid: Api_Key,
        },
      });
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    searchLocation();
  }, []);

  return (
    <>
      <div className='fullscreen'>
        <div className='wrapscreen'>
          <div className='inputnsearch'>
            <input
              className="input"
              type='text'
              placeholder='Enter location'
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <button className='button' onClick={searchLocation}>
              Search
            </button>
          </div>
          <div className='weathershow'>
            {weatherData ? (
              <>
                <div className='placentemp'>
                  <div className='place'>{weatherData.name}, {weatherData.sys.country}</div>
                  <div className='weathertype'>{weatherData.weather[0].description}</div>
                  <div className='weather'>{kelvinToCelsius(weatherData.main.temp).toFixed(1)}°C</div>
                </div>
                <div className='weatherproperty'>
                  <img
                    className='image'
                    src={getWeatherIcon(weatherData.weather[0].icon)}
                    alt={weatherData.weather[0].description}
                  />
                  <div className='allabout'>
                    <div>Feels like: {kelvinToCelsius(weatherData.main.feels_like).toFixed(1)}°C</div>
                    <div>Humidity: {weatherData.main.humidity}%</div>
                    <div>Wind: {weatherData.wind.speed} m/s</div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
