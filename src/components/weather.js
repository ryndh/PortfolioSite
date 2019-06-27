import React, { useState } from "react";

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState("");
  const getWeather = e => {
    e.preventDefault();
    if (e.target.city.value) {
      const city = e.target.city.value;
      fetch("https://portfoliopython.herokuapp.com/weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ cityName: city })
      })
        .then(response => {
          return response.json();
        })
        .then(responseData => {
          setWeatherInfo(responseData);
        });
    } else {
      console.log("Not Valid City");
    }
    e.target.city.value = null;
  };
  return (
    <div className="weather-wrap">
      <form className="weather" onSubmit={e => getWeather(e)}>
        <h2 className="weather-heading">Check your weather</h2>
        <div className="input-field">
          <input type="text" name="city" placeholder="city name" />
          <button type="submit">Submit</button>
        </div>
      </form>

      {weatherInfo == "" ? (
        <div className="weather-data">
          <p>City: {weatherInfo.name}</p>
          <p>Temp:</p>
          <p>Humidity: </p>
          <p>Wind: </p>
        </div>
      ) : weatherInfo.message ? (
        <div className="weather-data">
          <p>City: {weatherInfo.message}</p>
          <p>Temp:</p>
          <p>Humidity: </p>
          <p>Wind: </p>
        </div>
      ) : (
        <div className="weather-data">
          <p>City: {weatherInfo.name}</p>
          <p>Temp: {weatherInfo.main.temp}&deg;F</p>
          <p>Humidity: {weatherInfo.main.humidity}%</p>
          <p>Wind: {weatherInfo.wind.speed}mph</p>
        </div>
      )}
    </div>
  );
}
