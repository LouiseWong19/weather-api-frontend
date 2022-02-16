import React from "react";
import "./WeatherBox.scss";

const WeatherBox = () => {
  return (
    <div>
      <h1>Enter your locations</h1>
      <form>
        <input type="text" id="location" name="location" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default WeatherBox;
