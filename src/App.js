import React from "react";
import City from "./City";
import Time from "./Time";
import Search from "./Search";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="weather-app">
      <Search />
      <City city="Toronto, ON" />
      <Time day="Sunday" time="7:00" />
      <Forecast />
    </div>
  );
}
