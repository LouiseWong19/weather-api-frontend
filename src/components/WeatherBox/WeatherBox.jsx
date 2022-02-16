import React from "react";
import "./WeatherBox.scss";

const WeatherBox = (props) => {
  const {location, temperature, icon, description} = props
  return (
    <div className="weather-box">
      <h1>Enter your locations</h1>
      <form>
        <input type="text" id="location" name="location" />
        <input type="submit" value="Submit" />
      </form>
      <div className="weather-box__current">
        <h2>{location}</h2>
        <img src={icon}/>
        <p>Current temperature is {temperature}°C and {description}</p>
      </div>

    </div>
  );
};

export default WeatherBox;
