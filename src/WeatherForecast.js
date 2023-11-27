import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  //можно написать и просто }, [props]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    //console.log(response.data);
  }

  function load() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    // console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index <= 7) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
          {/* <WeatherForecastDay data={forecast[0]} /> */}
        </div>
        {/* или чтобы сделать на несколько дней, 
          можно просто вызвать компонент столько раз 
          сколько мне нужно, но это не будет красиво...
          это вариант для трех дней
           <div className="col"> 
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[1]} />
          </div>*/}
      </div>
    );
  } else {
    {
      /* можно тут оставить эту часть кода или для читабельности
    создать функцию, перенести это в нее, прописать ее выше,
    а тут оставить только вызов этой ф.ции. Так и сделаю.
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);*/
    }
    load();
    return null; //можно писать, НО return должен быть обязательно! любое ex: "Loadinf Forecast
  }
}
