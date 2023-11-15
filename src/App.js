import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <p>
        <button className="btn btn-primary">Нажми меня</button>
      </p>
      <footer>
        Created by Tatiana Bugulova using React and{" "}
        <a
          href="https://github.com/TAffinity/weather-react-week5-6"
          target="_blank"
          rel="noreferrer"
        >
          posted in GitHUB
        </a>
      </footer>
    </div>
  );
}

export default App;
