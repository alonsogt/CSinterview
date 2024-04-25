import React, { useState, useEffect } from 'react';

function WeatherTable() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch('https://mjgh1cx0le.execute-api.us-west-1.amazonaws.com/default/weatherAPI');
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data.weather);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false); 
      }
    }

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-container">
      <table>
        <thead>
          <tr>
            <th colSpan="2" className="table-header">
              Weather API Results
            </th>
          </tr>
          <tr>
            <th colSpan="2" className="table-header">
              Feel free to get creative!
            </th>
          </tr>
        </thead>
        <tbody className="weather-data">
          <tr>
            <td colSpan="2" className="center">
              {loading ? (
                <p>Loading...</p>
              ) : weatherData ? (
                <div>
                  <img src={weatherData.icon_weather} alt="Weather Icon" style={{ maxWidth: '100px' }} />
                  <table>
                    <tbody>
                      <tr>
                        <th>Time</th>
                        <td>{weatherData.time}</td>
                      </tr>
                      <tr>
                        <th>Location</th>
                        <td>{weatherData.location}</td>
                      </tr>
                      <tr>
                        <th>Wind</th>
                        <td>{weatherData.wind}</td>
                      </tr>
                      <tr>
                        <th>Current Temperature</th>
                        <td>{weatherData.temperature_current}</td>
                      </tr>
                      <tr>
                        <th>Low Temperature</th>
                        <td>{weatherData.temperature_low}</td>
                      </tr>
                      <tr>
                        <th>High Temperature</th>
                        <td>{weatherData.temperature_high}</td>
                      </tr>
                      <tr>
                        <th>Precipitation</th>
                        <td>{weatherData.precipitation}</td>
                      </tr>
                      <tr>
                        <th>Humidity</th>
                        <td>{weatherData.humidity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No data available</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
