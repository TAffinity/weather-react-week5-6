import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-success w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Tuesday 21:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="Https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
            className="float-left"
          />
          <span className="temperature">6</span>
          <span className="unit"> C|F </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation& 17%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
          <button type="button" className="btn btn-warning">
            Temperature
          </button>
          <button type="button" className="btn btn-warning">
            Precipitation
          </button>
        </div>
      </div>
    </div>
  );
}
