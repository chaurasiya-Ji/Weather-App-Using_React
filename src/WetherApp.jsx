import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeather] = useState({
    city :"Delhi",
    feelsLike: 0,
    temp: 33.05,
    tempMin: 33.05,
    tempMax: 33.05,
    humidity: 70,
    weather: "haze",
  });

let updateInfo= (newInfo)=>{
    setWeather(newInfo);
}
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
     <SearchBox updateInfo= {updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
