import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={52} />
          {/* <img src={props.data.iconUrl} alt={props.data.description} /> */}
          <WeatherTemperature celsius={props.data.temperature} />
          {/* <span className="temperature"> */}
          {/* {Math.round(props.data.temperature)}</span> */}
          {/* <span className="unit"> °C|°F </span> */}
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
          <button type="button" className="btn btn-warning me-2">
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
