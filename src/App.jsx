import "./App.scss";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import "./assets/data/data"
import weather from "./assets/data/data";
import HistoryBox from "./components/HistoryBox/HistoryBox";
import { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationWeather, setLocationWeather] = useState([]);

  // HANDLE SEARCH LOCATION NAME
  const handleInput = event =>{
    setSearchTerm(event.target.value);
    console.log(searchTerm)
  }

  const handleSubmit = event =>{
    event.preventDefault()
    fetch(`http://api.weatherapi.com/v1/current.json?key=bbe6e6853c904ecbb42102301221602&q=${searchTerm}&aqi=no`)
    .then((response)=>response.json())
    .then((json => {
      console.log(json)
      setLocationWeather(json) 
    }))
  }
console.log(locationWeather)
  return (
    <div className="app">
      <WeatherBox handleInput={handleInput} handleSubmit={handleSubmit}/>
      {typeof locationWeather != "undefined" ? (
        <div className="app__current">
          <WeatherCard location= {locationWeather.location.name} temperature={locationWeather.current.temp_c} icon={locationWeather.current.condition.icon} description ={locationWeather.current.condition.text} />
        </div>
        
      ): ""}
      <HistoryBox />
    </div>
  );
};

export default App;
