import "./App.scss";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import "./assets/data/data"
import weather from "./assets/data/data";

const App = () => {
  return (
    <div className="App">
      <WeatherBox location={weather.location.name} temperature={weather.current.temp_c} icon={weather.current.condition.icon} description={weather.current.condition.text}/>
    </div>
  );
};

export default App;
