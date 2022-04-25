import React from "react";
import "./Forecast.css";
import Image from "./sunny.svg";

export default function Forecast() {
  return (
    <div className="Container">
      <div className="Forecast">
        <div className="row">
          <div className="col-3">
            <img
              src={Image}
              id="icon-img"
              class="float-left"
              alt="weather description"
            />
          </div>
          <div className="col-2 temperature-date">
            <h2>
              <span id="current-temp"> </span>
              <span className="unitsActive"> 20°C </span>
            </h2>
          </div>
          <div className="col-4">
            <ul className="description">
              <li>Sunny</li>
              <li>Humidity: 34%</li>
              <li>Wind: 10km</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
