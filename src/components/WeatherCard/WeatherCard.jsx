import React from "react";
import "./WeatherCard.scss";

const WeatherCard = (props) => {
  const { location, temperature, icon, description } = props;
  return (
    <div className="weather-card">
      <h2>{location}</h2>
      <img src={icon} />
      <p>{description}</p>
      <br />
      <p>Current temperature is {temperature}°C</p>
    </div>
  );
};

export default WeatherCard;
