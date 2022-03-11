import React, { useState } from "react";
import "./App.css";
import footer from "./footer";
// import "bootstrap/dist/css/bootstrap.min.css"
const api = {
  key: "69f1180baba16804c8046c4c94a48706",
  base: "https://api.openweathermap.org/data/2.5/weather?q="
};

export default function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${api.base}${query}&units=metric&appid=${api.key}`)
        .then((response) => response.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div>
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>

        <h1 className="header">WEATHER APP</h1>
        <card>
          <div className="search-box">
            <input type="text"

              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div className="container">
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°c</div>
                <div className="weather">{weather.weather[0].main}</div>

                <div className="humidity primary">{weather.main.humidity}%</div>

                <div className="wind primary">{weather.wind.speed}</div>

              </div>
            </div>
          ) : ('')}
        </card>

      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


      </div>
      <footer>
        <div>
          <section className='footer'>
            <div className='container text-center'>
              <p>@ Prepare By Sagar and Brijesh</p>
            </div>
          </section>

        </div>
      </footer>
    </div>
  );
}
