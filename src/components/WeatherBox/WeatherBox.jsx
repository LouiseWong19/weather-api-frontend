import React from "react";
import "./WeatherBox.scss";

const WeatherBox = (props) => {
  // const {location, temperature, icon, description, searchTerm,handleInput, handleSubmit} = props
  const { searchTerm, handleInput, handleSubmit } = props;
  return (
    <div className="weather-box">
      <h1>Enter your locations</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onInput={handleInput} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default WeatherBox;
