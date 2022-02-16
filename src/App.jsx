import "./App.scss";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import "./assets/data/data"
import weather from "./assets/data/data";
import HistoryBox from "./components/HistoryBox/HistoryBox";

const App = () => {
  return (
    <div className="app">
      <WeatherBox location={weather.location.name} temperature={weather.current.temp_c} icon={weather.current.condition.icon} description={weather.current.condition.text}/>
      <HistoryBox />
    </div>
  );
};

export default App;
