import { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ capitalCity }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          capitalCity +
          "&units=metric&appid=" +
          api_key
      )
      .then((response) => {
        setWeatherData({
          temperature: response.data.main.temp,
          icon:
            "http://openweathermap.org/img/wn/" +
            response.data.weather[0].icon +
            "@2x.png",
          wind: response.data.wind.speed,
        });
        console.log(response.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  console.log(weatherData);
  return (
    <>
      <h3>Weather in {capitalCity}</h3>
      <p>Temperature {weatherData.temperature}℃</p>
      <img src={weatherData.icon} alt="icon" />
      <p>Wind {weatherData.wind}</p>
    </>
  );
};

export default Weather;
