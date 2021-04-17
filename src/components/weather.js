import { computeHeadingLevel } from "@testing-library/dom";
import React, { useState, useEffect } from "react";
import Card from "./card.component";

const Weather = () => {
  const APIKEY = "1953dd3b21ad6879460bdc74042888b1";

  const [userInput, setUserInput] = useState("");
  const [weather, setWeather] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const getWeatherData = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    try {
      if (userInput === "") return;

      let weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${APIKEY}&units=metric`
      );
      let response = await weatherData.json();

      setWeather(response);
    } catch (e) {
      alert(e);
    }
  };

  console.log(weather);

  return (
    <div className="weather-app">
      <form onSubmit={getWeatherData}>
        <h2> weather app </h2>
        <input
          type="text"
          placeholder="Search a city..."
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" disabled={userInput === ""}>
          Search
        </button>
      </form>

      {weather.props !== undefined ? (
        <div>
          <Card weather={weather} />
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
